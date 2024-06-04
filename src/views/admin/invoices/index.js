import PropTypes from 'prop-types';
import * as React from 'react';
import adminAxios from 'utils/adminAxios';
import { useEffect, useState } from 'react';
import Modals from '../../user/auth/Modal';
import picture from 'assets/images/picture.png';
// material-ui
import {
    Box,
    TextField,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableSortLabel,
    TableRow,
    Stack,
    IconButton,
    MenuItem,
    Menu,
    InputAdornment,
    Grid,
    Typography
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import SearchIcon from '@mui/icons-material/Search';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { AiOutlineEye } from 'react-icons/ai';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import Chip from 'ui-component/extended/Chip';
import Car from 'assets/images/car.png';

// assets
import { Link, useNavigate } from 'react-router-dom';
import DateFormat from 'ui-component/our-component/DateFormat';

function createData(id, date, billingname, email, cars, amount, status, color, actions) {
    return {
        id,
        date,
        billingname,
        email,
        cars,
        amount,
        status,
        color,
        actions
    };
}

const rows = [
    createData('#123412451', '16-06-2022', 'Muster Hans 3018 Bern', 'Musterhans@gmail.com', Car, '660.00', 'Completed', 'success'),
    createData('#123412451', '16-06-2022', 'Muster Hans 3018 Bern', 'Musterhans@gmail.com', Car, '660.00', 'Pending', 'error'),
    createData('#123412451', '16-06-2022', 'Muster Hans 3018 Bern', 'Musterhans@gmail.com', Car, '660.00', 'Completed', 'success'),
    createData('#123412451', '16-06-2022', 'Muster Hans 3018 Bern', 'Musterhans@gmail.com', Car, '660.00', 'Completed', 'success'),
    createData('#123412451', '16-06-2022', 'Muster Hans 3018 Bern', 'Musterhans@gmail.com', Car, '660.00', 'Pending', 'error'),
    createData('#123412451', '16-06-2022', 'Muster Hans 3018 Bern', 'Musterhans@gmail.com', Car, '660.00', 'Paid', 'success')
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
        label: 'Sr'
    },
    {
        id: 'id',
        numeric: true,
        disablePadding: false,
        label: 'ID Invoice'
    },
    {
        id: 'amount',
        numeric: false,
        disablePadding: false,
        label: 'Amount'
    },
    {
        id: 'date',
        numeric: false,
        disablePadding: false,
        label: 'Date'
    },
    {
        id: 'invoicetype',
        numeric: false,
        disablePadding: false,
        label: 'Invoice Type'
    },

    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status'
    },
    {
        id: 'method',
        numeric: false,
        disablePadding: false,
        label: 'Payment Method'
    },
    {
        id: 'created',
        numeric: false,
        disablePadding: false,
        label: 'Created At'
    }
    ,
    {
        id: 'actions',
        numeric: false,
        disablePadding: false,
        label: 'Actions'
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

// ==============================|| TABLE - DATA TABLE ||============================== //

export default function AdminInvoice() {
    const token = window.localStorage.getItem('adminServiceToken');
    const [subData, setSubData] = useState([]);
    const [open, setOpen] = useState(false);
    const handleModalClose = () => setOpen(false);
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/invoices', { token });
            setSubData(response.data);
            console.log(response.data,"saol");
           
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleOpen();
    }, []);

    const navigate = useNavigate();
    const [selectedRowId, setSelectedRowId] = React.useState(null);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectedValue, setSelectedValue] = React.useState([]);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (event, id) => {
        setSelectedRowId(id);
        setAnchorEl(event?.currentTarget);
    };

    const handleClose = () => {
        setSelectedRowId(null);
        setAnchorEl(null);
    };

    const handleInvoiceDel = async (id) => {
        try {
            const response = await adminAxios.delete(`/delete/invoice/${id}`, { token });
            if (response.data === 'success') {
                handleOpen(); // Assuming handleOpen is used to refresh the invoice data after deletion
            }
        } catch (error) {
            console.error(error);
        }
    };
    

    const handleDelete = (id) => {
        handleInvoiceDel(id);
        setOpen(true);
        handleOpen();
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
    const height=rows.length === 0||rows.length<4 ? "80vh":"";
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <MainCard content={false} title="Invoices">
            <Grid xs={12} style={{ padding: '20px 10px' }}>
                <Stack direction="row" spacing={2} justifyContent="right">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker renderInput={(props) => <TextField {...props} />} />
                    </LocalizationProvider>

                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon fontSize="small" />
                                </InputAdornment>
                            )
                        }}
                        placeholder="Search Order"
                        size="large"
                    />
                </Stack>
            </Grid>
            <Paper sx={{ width: '100%', mb: 2,height:{xs:"",md:height} }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={subData.length}
                        />
                        {subData.length === 0 ? (
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell style={{ padding: '0px' }}>No data available in table</TableCell>
                            </TableRow>
                        ) : (
                            <TableBody>
                                {subData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="center">{row.sub_id}</TableCell>
                                        <TableCell align="center">{row.id}</TableCell>
                                        <TableCell align="center" style={{ color: '#76A81B' }}>
                                            {row.price}
                                        </TableCell>
                                        <TableCell align="center">{row.sub.id}</TableCell>
                                        <TableCell align="center">Local</TableCell>
                                        <TableCell align="center">
                                            <Link>
                                                <Chip
                                                    style={{
                                                        color: row.status === '0' ? 'red' : '#76A81B',
                                                        backgroundColor: `${row.status === '0' ? '#FFDAD8' : '#B9F6CA'}`
                                                    }}
                                                    label={row.status === '0' ? 'UnPaid' : 'Paid'}
                                                    size="small"
                                                />
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link style={{ color: '#4D4D4D' }} to="">
                                                Local Payment
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">
                                           <Typography><DateFormat time={row.created_at}/></Typography>
                                        </TableCell>
                                        <TableCell align="center" sx={{ pr: 3 }}>
                                            <IconButton onClick={(event) => handleMenuClick(event, row.id)} size="large">
                                                <MoreHorizOutlinedIcon
                                                    fontSize="small"
                                                    aria-controls={`menu-popular-card-${row.id}`}
                                                    aria-haspopup="true"
                                                    sx={{ color: 'grey.500' }}
                                                />
                                            </IconButton>
                                            <Menu
                                                id={`menu-popular-card-${row.id}`}
                                                anchorEl={anchorEl}
                                                keepMounted
                                                open={Boolean(anchorEl) && selectedRowId === row.id}
                                                onClose={handleClose}
                                                variant="selectedMenu"
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right'
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right'
                                                }}
                                                sx={{
                                                    '& .MuiMenu-paper': {
                                                        boxShadow: 'red'
                                                    }
                                                }}
                                            >
                                                <MenuItem onClick={() => navigate(`/admin/particular-invoice/${row.id}`)}>
                                                    <AiOutlineEye style={{ color: '#76A81B', marginRight: '10px' }} /> View
                                                </MenuItem>
                                                <MenuItem onClick={() => handleDelete(row.id)}>
                                                    <DeleteOutlineOutlinedIcon style={{ color: '#76A81B', marginRight: '10px' }} /> Delete
                                                </MenuItem>
                                            </Menu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                
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
                    count={subData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Modals
                open={open}
                handleClose={handleModalClose}
                title={<h3>SuccessFull</h3>}
                description="Record Updated Successfully"
                btnName="Ok"
                url={handleModalClose}
                img={picture}
            />
        </MainCard>
    );
}
