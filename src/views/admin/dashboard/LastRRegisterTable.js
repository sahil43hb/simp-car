import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import {
    Box,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableSortLabel,
    TableRow,
    Menu,
    MenuItem,
    Typography,
    Stack,
    Grid,
    TextField,
    InputAdornment,
    Select,
    Button,
    TablePagination
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { AiOutlineEye } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Chip from 'ui-component/extended/Chip';

import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';

import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';

function createData(id, customers, cars, startedat, rent, status, color) {
    return {
        id,
        customers,
        cars,
        startedat,
        rent,
        status,
        color
    };
}

const rows = [
    createData(
        '1',
        'Muster Hans',
        'Mercedes-Benz C220',
        '01-04-2023',
        '560.00',
        'Active',
        'warningDark'
    ),
    createData(
        '1',
        'Muster Hans',
        'Mercedes-Benz C220',
        '01-04-2023',
        '560.00',
        'Active',
        'success'
    ),
    createData(
        '1',
        'Muster Hans',
        'Mercedes-Benz C220',
        '01-04-2023',
        '560.00',
        'Active',
        'success'
    ),
    createData(
        '1',
        'Muster Hans',
        'Mercedes-Benz C220',
        '01-04-2023',
        '560.00',
        'Active',
        'success'
    ),
    
    
   
    
];

// table filter
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

const getComparator = (order, orderBy) =>
    order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// table header
const headCells = [
    {
        id: 'id',
        numeric: true,
        disablePadding: false,
        label: 'No'
    },
    {
        id: 'customers',
        numeric: false,
        disablePadding: false,
        label: 'Customers'
    },
    {
        id: 'cars',
        numeric: false,
        disablePadding: false,
        label: 'Cars'
    },
    {
        id: 'startedat',
        numeric: false,
        disablePadding: false,
        label: 'Started at'
    },

    {
        id: 'rent',
        numeric: false,
        disablePadding: false,
        label: 'Rent'
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status'
    }
];

// ==============================|| TABLE - HEADER ||============================== //

function EnhancedTableHead({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id} align="center" padding="10px" sortDirection={orderBy === headCell.id ? order : undefined}>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

export default function LastRRegisterTable() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedValue, setSelectedValue] = useState([]);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event?.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            if (selected.length > 0) {
                setSelected([]);
            } else {
                const newSelectedId = rows.map((n) => n.id);
                setSelected(newSelectedId);
            }
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        const selectedRowData = rows.filter((row) => newSelected.includes(row.id.toString()));
        setSelectedValue(selectedRowData);
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event?.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const [status, setStatus] = useState();
    const [nationality, setNationality] = useState();
    const [mr, setMr] = useState();
    const [locality, setLocality] = useState();

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    const handleChangeNat = (event) => {
        setNationality(event.target.value);
    };
    const handleChangeMr = (event) => {
        setMr(event.target.value);
    };
    const handleChangeLocality = (event) => {
        setLocality(event.target.value);
    };

    return (
        <MainCard content={false} title="Last registrations">
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        {rows.length === 0 ? (
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell style={{ padding: '0px' }}>No data available in table</TableCell>
                            </TableRow>
                        ) : (
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        console.log(rows.length);
                                        /** Make sure no display bugs if row isn't an OrderData object */
                                        if (typeof row === 'number') return null;

                                        const isItemSelected = isSelected(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.id)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                            >
                                            
                                                <TableCell align="center">#{row.id}</TableCell>
                                                <TableCell align="center">{row.customers}</TableCell>
                                                <TableCell align="center" style={{color:'#92BD44'}}>{row.cars}</TableCell>
                                               <TableCell align="center">
                                                    {row.startedat}
                                                </TableCell>
                                               <TableCell align="center">
                                                    {row.rent}
                                                </TableCell>
                                              

                                             

                                                <TableCell align="center">
                                                    <Chip chipcolor={row.color} label={row.status} size="small" />
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        )}
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </MainCard>
    );
}
