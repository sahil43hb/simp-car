import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
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
import Modals from 'views/user/auth/Modal';
import picture from 'assets/images/picture.png';
import { Link, useNavigate } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';

function createData(
    id,
    customers,
    date,
    address,
    model,
    contactdetails,
    email,
    rent,
    subscriptions,
    status,
    streetNumber,
    postCode,
    town,

    residence,
    nationality,
    color
) {
    return {
        id,
        customers,
        date,
        address,
        model,
        contactdetails,
        email,
        rent,
        subscriptions,
        status,
        streetNumber,
        postCode,
        town,

        residence,
        nationality,
        color
    };
}

// const rows = [
//     createData(
//         '1',
//         'Muster Hans',
//         '12.03.2023, 11:50',
//         'Freiburgstrasse 12',
//         '3172 Niederwangen',
//         '031 321 11 23',
//         'hansi@bluewin.ch',
//         '660.00',
//         '2',
//         '2',
//         'Active',
//         'success'
//     ),
//     createData(
//         '1',
//         'Muster Hans',
//         '12.03.2023, 11:50',
//         'Freiburgstrasse 12',
//         '3172 Niederwangen',
//         '031 321 11 23',
//         'hansi@bluewin.ch',
//         '660.00',
//         '2',
//         '2',
//         'Active',
//         'success'
//     ),
//     createData(
//         '1',
//         'Muster Hans',
//         '12.03.2023, 11:50',
//         'Freiburgstrasse 12',
//         '3172 Niederwangen',
//         '031 321 11 23',
//         'hansi@bluewin.ch',
//         '660.00',
//         '2',
//         '2',
//         'Active',
//         'success'
//     ),
//     createData(
//         '1',
//         'Muster Hans',
//         '12.03.2023, 11:50',
//         'Freiburgstrasse 12',
//         '3172 Niederwangen',
//         '031 321 11 23',
//         'hansi@bluewin.ch',
//         '660.00',
//         '2',
//         '2',
//         'Active',
//         'success'
//     ),
//     createData(
//         '1',
//         'Muster Hans',
//         '12.03.2023, 11:50',
//         'Freiburgstrasse 12',
//         '3172 Niederwangen',
//         '031 321 11 23',
//         'hansi@bluewin.ch',
//         '660.00',
//         '2',
//         '2',
//         'Active',
//         'success'
//     )
// ];

export default function Customer() {
    const token = window.localStorage.getItem('adminServiceToken');
    const [addressData, setAddressData] = useState([]);
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/customer', { token });
            console.log(response.data, 'sahil1');
            setAddressData(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleOpen();
    }, []);
    const [open, setOpen] = useState(false);
    const handleModalClose = () => setOpen(false);
    const handleDelete = async (id) => {
        try {
            const response = await adminAxios.delete(`/delete-customer/${id}`, { token });
            // console.log(response.data);
            if (response.data === 'success') {
                setOpen(true);
                handleOpen();
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleActive = async (id) => {
        try {
            const response = await adminAxios.post(`/active-customer/${id}`, { token });
            // console.log(response.data);
            if (response.data === 'success') {
                setOpen(true);
                handleOpen();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const rows = addressData.map((subs) =>
        createData(
            subs.id,
            `${subs.first_name} ${subs.last_name}`,
            subs.joining_date,
            subs.address ? subs.address.street_name : '',
            subs.model, // Replace with the correct property from your data
            subs.phone,
            subs.email,
            subs.total_invoice_price,
            subs.subscription_count,
            subs.status,
            subs.address ? subs.address.street_number : '',
            subs.address ? subs.address.post_code : '',
            subs.address ? subs.address.town : '',
            subs.address ? subs.address.residence_permit : '',
            subs.address ? subs.address.nationality : '',
            subs.color // Replace with the correct property from your data
        )
    );

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
            id: 'customers',
            numeric: false,
            disablePadding: false,
            label: 'Customer Name'
        },
        {
            id: 'address',
            numeric: false,
            disablePadding: false,
            label: 'Email'
        },
        {
            id: 'contactdetails',
            numeric: false,
            disablePadding: false,
            label: 'Contact No'
        },

        {
            id: 'rent',
            numeric: false,
            disablePadding: false,
            label: 'Due Rent'
        },
        {
            id: 'subscriptions',
            numeric: true,
            disablePadding: false,
            label: 'Subscriptions'
        },
        {
            id: 'status',
            numeric: false,
            disablePadding: false,
            label: 'Status'
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
                        <TableCell
                            key={headCell.id}
                            align="center"
                            padding="10px"
                            sortDirection={orderBy === headCell.id ? order : undefined}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                                sx={{ fontSize: '16px' }}
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

    const navigate = useNavigate();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('id');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedValue, setSelectedValue] = useState([]);
    const [selectedRowId, setSelectedRowId] = React.useState(null);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event, id) => {
        setSelectedRowId(id);
        setAnchorEl(event?.currentTarget);
    };

    const handleClose = () => {
        setSelectedRowId(null);
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

    const height = rows.length === 0 || rows.length < 3 ? '80vh' : '';

    return (
        <MainCard
            content={false}
            title="Customer"
            secondary={
                <Stack direction="row" spacing={2} alignItems="center">
                    <Grid item xs={6} sm={6} md={4} lg={2}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }}
                            placeholder="Search Order"
                            value="Search"
                            size="large"
                        />
                    </Grid>
                    <button
                        onClick={() => navigate('/admin/customer/add')}
                        type="button"
                        style={{
                            color: '#76A81B',
                            backgroundColor: '#FFFF',
                            margin: '7px',
                            borderRadius: '6px',
                            border: '1px solid #76A81B',
                            cursor: 'pointer',
                            height: 51,

                            textAlign: 'center'
                        }}
                    >
                        + Create Customer
                    </button>
                </Stack>
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
                            rowCount={rows.length}
                        />
                        {rows.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} style={{ textAlign: 'center' }}>
                                    No data available in table
                                </TableCell>
                            </TableRow>
                        ) : (
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        console.log(rows.length);
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
                                                <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="center" variant="subtitle1">
                                                            {row.customers}
                                                        </Typography>
                                                        {/* <Typography component="div" align="center" variant="subtitle2">
                                                            {row.date}
                                        </Typography> */}
                                                    </Grid>
                                                </TableCell>
                                                <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                    {/* <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="center" variant="subtitle1">
                                                            {row.address} {row.postCode} {row.town}
                                                        </Typography>
                                                        <Typography component="div" align="center" variant="subtitle2">
                                                            {row.model} {row.residence} {row.nationality}
                                                        </Typography>
                                                   </Grid> */}
                                                    <Typography component="div" align="center" variant="subtitle1">
                                                        {row.email}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="center" variant="subtitle1">
                                                            {row.contactdetails}
                                                        </Typography>
                                                    </Grid>
                                                </TableCell>

                                                <TableCell align="center" style={{ color: '#76A81B' }}>
                                                    {row.rent === undefined ? 'N/A' : row.rent}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Chip chipcolor={row.color} label={row.subscriptions} size="small" />
                                                </TableCell>

                                                <TableCell align="center" onClick={row.status === '1' ? ' ' : () => handleActive(row.id)}>
                                                    <Chip
                                                        style={{
                                                            color: `${row.status === '1' ? '#76A81B' : '#121926'}`,
                                                            backgroundColor: `${row.status === '1' ? '#B9F6CA' : '#c7c8c9'}`,
                                                            cursor: `${row.status === '1' ? ' ' : 'pointer'}`
                                                        }}
                                                        label={row.status === '1' ? 'Active' : 'Unactive'}
                                                        size="small"
                                                    />
                                                </TableCell>

                                                <TableCell align="center">
                                                    <Typography component="div" align="center" variant="subtitle1">
                                                        {row.date}
                                                    </Typography>
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
                                                        <MenuItem onClick={() => navigate(`/admin/customer/edit/${row.id}`)}>
                                                            <AiOutlineEye style={{ color: '#76A81B', marginRight: '10px' }} /> View
                                                        </MenuItem>
                                                        <MenuItem onClick={() => handleDelete(row.id)}>
                                                            <DeleteOutlineOutlinedIcon style={{ color: 'red', marginRight: '10px' }} />{' '}
                                                            Delete
                                                        </MenuItem>
                                                    </Menu>
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
