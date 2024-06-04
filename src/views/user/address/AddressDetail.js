import PropTypes from 'prop-types';

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
    Stack,
    TablePagination
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { useNavigate } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Chip from 'ui-component/extended/Chip';
import myAxios from 'utils/myAxios';
import React, { useEffect, useState } from 'react';
import Modals from './Modal';
import picture from 'assets/images/picture.png';

function createData(id, address, country, city, state, zipcode, type, color, action) {
    return {
        id,
        address,
        country,
        city,
        state,
        zipcode,
        type,
        color,
        action
    };
}

const rows = [
    createData(
        '#1',
        '2109 Sixth Street, New Westminster, British Columbia Canada',
        'Canada',
        'New Westminster',
        'British Columbia',
        'V3L 3C1',
        'Personal',
        'success'
    ),
    createData(
        '#1',
        '2109 Sixth Street, New Westminster, British Columbia Canada',
        'Canada',
        'New Westminster',
        'British Columbia',
        'V3L 3C1',
        'Personal',
        'success'
    ),
    createData(
        '#1',
        '2109 Sixth Street, New Westminster, British Columbia Canada',
        'Canada',
        'New Westminster',
        'British Columbia',
        'V3L 3C1',
        'Personal',
        'success'
    )
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
        label: 'No.'
    },

    {
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Address'
    },
    {
        id: 'country',
        numeric: false,
        disablePadding: false,
        label: 'Country'
    },
    {
        id: 'city',
        numeric: true,
        disablePadding: false,
        label: 'City'
    },
    {
        id: 'state',
        numeric: false,
        disablePadding: false,
        label: 'State'
    },
    {
        id: 'zipcode',
        numeric: false,
        disablePadding: false,
        label: 'Zip Code'
    },
    {
        id: 'type',
        numeric: false,
        disablePadding: false,
        label: 'Type'
    },
    {
        id: 'action',
        numeric: false,
        disablePadding: false,
        label: 'Action'
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

export default function AddressDetail() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectedValue, setSelectedValue] = React.useState([]);
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
    const navigate = useNavigate();

    const token = window.localStorage.getItem('adminServiceToken');
    const [address, setAddress] = useState([]);
    const handleAxios = async () => {
        try {
            const response = await myAxios.get('/addresses', { token });
            setAddress(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleAxios();
    }, []);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleDelete = async (id) => {
        const token = window.localStorage.getItem('adminServiceToken');
        try {
            const response = await myAxios.delete(`/address/delete/${id}`, { token });
            if (response.data === 'success') {
                setOpen(true);
                handleAxios();
            }
        } catch (error) {
            console.error(error);
        }
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

    return (
        <MainCard content={false} title="Address Detail">
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

                        {address.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} style={{ textAlign: 'center' }}>
                                    No data available in table
                                </TableCell>
                            </TableRow>
                        ) : (
                            <TableBody>
                                {address.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="center">{row.id}</TableCell>
                                        <TableCell align="center">
                                            {row.street_number} {row.street_name} {row.town}, {row.residence_permit} {row.nationality}
                                        </TableCell>
                                        <TableCell align="center">{row.nationality}</TableCell>
                                        <TableCell align="center">{row.town}</TableCell>
                                        <TableCell align="center">{row.residence_permit}</TableCell>
                                        <TableCell align="center">{row.post_code}</TableCell>
                                        <TableCell>
                                            <Chip
                                                chipcolor={row.color}
                                                label={row.address_type === 'home' ? 'Personal' : 'Business'}
                                                size="small"
                                            />
                                        </TableCell>

                                        <TableCell align="center" sx={{ pr: 3 }}>
                                            <Stack direction="row" justifyContent="center" alignItems="center">
                                                <IconButton color="inherit" size="large">
                                                    <FiEdit
                                                        style={{ color: '#02B100' }}
                                                        onClick={() => navigate(`/edit-address/${row.id}`)}
                                                    />
                                                </IconButton>
                                                <IconButton color="red" size="large">
                                                    <DeleteOutlineOutlinedIcon
                                                        style={{ color: 'red' }}
                                                        onClick={() => handleDelete(row.id)}
                                                    />
                                                </IconButton>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        )}
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={address.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Modals
                open={open}
                handleClose={handleClose}
                title={<h3>SuccessFull</h3>}
                description="Record Updated Successfully"
                btnName="Ok"
                url={handleClose}
                img={picture}
            />
        </MainCard>
    );
}
