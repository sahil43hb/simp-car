import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
// material-ui
import Modals from 'views/user/auth/Modal';
import picture from 'assets/images/picture.png';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableSortLabel,
    TableRow,
    Grid,
    Button,
    TablePagination,
    CircularProgress,
    Typography
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Link } from 'react-router-dom';
import DateFormat from 'ui-component/our-component/DateFormat';

function createData(id, date, customername) {
    return {
        id,
        date,
        customername
    };
}

const rows = [createData('1', '12.03.2023, 11:50', 'Muster Hans')];

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
        label: 'Sr'
    },
    {
        id: 'date',
        numeric: false,
        disablePadding: false,
        label: 'Date'
    },
    {
        id: 'customername',
        numeric: false,
        disablePadding: false,
        label: 'Backup Name'
    },
    {
        id: 'backup',
        numeric: false,
        disablePadding: false,
        label: 'Download Backup'
    },
    {
        id: 'created',
        numeric: false,
        disablePadding: false,
        label: 'Created At'
    
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
                            sx={{fontSize:"16px"}}
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

export default function BackupSystem() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedValue, setSelectedValue] = useState([]);
    const token = window.localStorage.getItem('userServiceToken');
    const [data, setData] = useState([]);
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/backup', { token });
            setData(response.data);
            console.log(response.data,"hihihi");
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleOpen();
    }, []);
    const [open, setOpen] = useState(false);
    const handleModalClose = () => setOpen(false);
    
    const [loading, setLoading] = useState(false);
    const handleStore = async () => {
        try {
            const response = await adminAxios.post('/backup-system', { token });
            if (response.data === 'success') {
                setLoading(true);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleDelete = async (id) => {
        try {
            const response = await adminAxios.delete(`/delete-backup-system/${id}`, { token });
            if (response.data === 'success') {
                setLoading(true);
            }
        } catch (error) {
            console.error(error);
        }
    };
    if (loading === true) {
        handleOpen();
        setLoading(false);
        setOpen(true)
    }
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
    const height = rows.length === 0 || rows.length < 3 ? '80vh' : '';

    return (
        <>
            <MainCard content={false} title="Database Backup Settings" secondary={
                <Button type="button" variant="contained" onClick={handleStore} style={{color: 'white',height: '40px'}}>
                                {loading === true ? <CircularProgress style={{color: 'white'}} /> : '+ Create Database Backup'}
                            </Button>
            }
            >
                <Paper sx={{ width: '100%', mb: 2, height: { xs: '', md: height } }}>
                    <TableContainer>
                        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={data.length}
                            />
                            {data.length === 0 ? (
                                <TableRow>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell style={{ padding: '0px', textAlign: 'center' }}>No data available in table</TableCell>
                                </TableRow>
                            ) : (
                                <TableBody>
                                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                        /** Make sure no display bugs if row isn't an OrderData object */
                                        if (typeof row === 'number') return null;
                                        index += 1;
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
                                                <TableCell align="center">{index}</TableCell>
                                                <TableCell align="center">{row.date}</TableCell>

                                                <TableCell align="center" style={{ color: '#76A81B' }}>
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="center" style={{ color: '#92bd44' }}>
                                                    <a href={row.link}>
                                                        <CloudDownloadIcon style={{ color: '#92BD44' }} />
                                                    </a>
                                                </TableCell>
                                                <TableCell align="center">
                                                <Typography><DateFormat time={row.created_at} /></Typography>
                                            </TableCell>
                                                <TableCell align="center" style={{ color: 'red', cursor: 'pointer' }} onClick={()=>handleDelete(row.id)}>
                                                    <DeleteOutlineOutlinedIcon />
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

                    {/* table data */}
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </MainCard>
            <Modals
                open={open}
                handleClose={handleModalClose}
                title={<h3>SuccessFull</h3>}
                description="Record Updated Successfully"
                btnName="Ok"
                url={handleModalClose}
                img={picture}
            />
        </>
    );
}
