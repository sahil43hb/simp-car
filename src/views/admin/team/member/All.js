import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
import Modals from 'views/user/auth/Modal';
import picture from 'assets/images/picture.png';
// material-ui
import {
    Box,
    Tooltip,
    Fab,
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
    Avatar,
    TextField,
    InputAdornment,
    TablePagination,
    Grid
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineEye } from 'react-icons/ai';
import AddIcon from '@mui/icons-material/AddTwoTone';
import { FiEdit } from 'react-icons/fi';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PrintIcon from '@mui/icons-material/PrintTwoTone';
import FileCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import FilterListIcon from '@mui/icons-material/FilterListTwoTone';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import Chip from 'ui-component/extended/Chip';
import Car from 'assets/images/car.png';
import Add from './Add';
import Avatar2 from 'assets/images/users/user-2.png';
import Avatar3 from 'assets/images/users/user-3.png';
import Avatar4 from 'assets/images/users/user-4.png';
import DateFormat from 'ui-component/our-component/DateFormat';
// assets

const Avatar1 = 'https://phpstack-811730-3642341.cloudwaysapps.com/user.png';
function createData(id,avtar, account, email, role, access, orderstatus, orderType, lastactive) {
    return {
        id,
        avtar,
        account,
        email,
        role,
        access,
        orderstatus,
        orderType,
        lastactive
    };
}

const rows = [
    createData(Avatar1, 'Arthur Hanson', 'Arthurhanson@gmail.com', 'Admin', 'Full', 'Active', 'success', '4 mins ago'),
    createData(Avatar2, 'Arthur Hanson', 'Arthurhanson@gmail.com', 'Admin', 'Full', 'Disabled', 'error', '4 mins ago'),
    createData(Avatar3, 'Arthur Hanson', 'Arthurhanson@gmail.com', 'Admin', 'Full', 'Active', 'success', '1 day ago'),
    createData(Avatar4, 'Arthur Hanson', 'Arthurhanson@gmail.com', 'Admin', 'Denied', 'Disabled', 'error', '4 mins ago')
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
        id: 'account',
        numeric: true,
        disablePadding: false,
        label: 'Account'
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email address'
    },
    {
        id: 'role',
        numeric: false,
        disablePadding: false,
        label: 'Role'
    },
    {
        id: 'team',
        numeric: false,
        disablePadding: false,
        label: 'Team'
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status'
    },
    {
        id: 'lastactive',
        numeric: false,
        disablePadding: false,
        label: 'Last active'
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
                    <TableCell key={headCell.id} align="left" padding="10px" sortDirection={orderBy === headCell.id ? order : undefined}>
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

export default function All() {
    const token = window.localStorage.getItem('userServiceToken');
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [search, setSearch] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState([]);
    const [success, setSuccess] = useState(false);
    const [adminData, setAdminData] = useState([]);
    const [openModal, setModalOpen] = useState(false);
    const handleModalClose = () => setModalOpen(false);
    const [error, setError] = useState();
    const handleOpen = async () => {

        try {
            const response = await adminAxios.get('/get-admin', { token });
            setAdminData(response.data);
        } catch (error) {
            console.error(error);
            setError(error);
        }
    };
    useEffect(()=>{
        handleOpen();
    },[]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleDelete = async (id) => {
        try {
            const response = await adminAxios.delete(`/delete-admin/${id}`, { token });
            if(response.data === 'success'){
                handleOpen();
                setModalOpen(true);
                handleClose();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpenDialog = () => {
        setOpen(true);
    };
    const handleCloseDialog = () => {
        setOpen(false);
        handleOpen();
    };


    const handleMenuClick = (event) => {
        setAnchorEl(event?.currentTarget);
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

    const handleSearch = (event) => {
        const newString = event?.target.value;
        setSearch(newString || '');

        if (newString) {
            const newRows = rows.filter((row) => {
                let matches = true;

                const properties = ['name', 'category', 'price', 'qty', 'id'];
                let containsQuery = false;

                properties.forEach((property) => {
                    if (row[property].toString().toLowerCase().includes(newString.toString().toLowerCase())) {
                        containsQuery = true;
                    }
                });

                if (!containsQuery) {
                    matches = false;
                }
                return matches;
            });
            // setRows(newRows);
        } else {
            // setRows(products);
        }
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
    const height=adminData.length === 0||adminData.length<4 ? "80vh":"";


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <>
   
                <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }}
                            onChange={handleSearch}
                            placeholder="Search"
                            value={search}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                        <Tooltip title="Copy">
                            <IconButton size="large">
                                <FileCopyIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Print">
                            <IconButton size="large">
                                <PrintIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Filter">
                            <IconButton size="large">
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>

                        {/* product add & dialog */}
                        <Tooltip title="Add Product">
                            <Fab
                                color="primary"
                                size="small"
                                onClick={handleClickOpenDialog}
                                sx={{ boxShadow: 'none', ml: 1, width: 32, height: 32, minHeight: 32 }}
                            >
                                <AddIcon fontSize="small" />
                            </Fab>
                        </Tooltip>
                        <Add open={open} success={success} handleCloseDialog={handleCloseDialog} />
                    </Grid>
                </Grid>
            

            <Paper sx={{ width: '100%', mb: 2 , height:{xs:"",md:height}}}>
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
                        <Typography label={error} />
                        {adminData.length === 0 ? (
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell align="center" style={{ padding: '0px' }}>
                                    No data available in table
                                </TableCell>
                            </TableRow>
                        ) : (
                            <TableBody>
                                {adminData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                    /** Make sure no display bugs if row isn't an OrderData object */
                                    if (typeof row === 'number') return null;
                                    index += 1

                                    const isItemSelected = isSelected(row.id);
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

                                        <TableCell>
                                        <Grid item xs zeroMinWidth>
                                        <Typography component="div" align="left" variant="subtitle1">
                                            {index}
                                        </Typography>
                                    </Grid>
                                    </TableCell>
                                            <TableCell sx={{}}>
                                                <Grid container spacing={2} alignItems="left" sx={{ flexWrap: 'nowrap' }}>
                                                    <Grid item>
                                                        <Avatar alt="User 1" src={row.image_link === null ? Avatar1 : row.image_link} />
                                                    </Grid>
                                                 
                                                </Grid>
                                            </TableCell>

                                            <TableCell>
                                                <Typography>{row.email}</Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography >{row.user_type}</Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography >{row.user_team}</Typography>
                                            </TableCell>

                                            <TableCell>
                                                <Chip chipcolor="red" label={row.status === '1' ? 'Active' : 'Inactive'} size="small" />
                                            </TableCell>
                                            <TableCell>
                                                <Typography>{row.last_active}</Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography><DateFormat time={row.created_at} /></Typography>
                                            </TableCell>
                                            <TableCell align="left" sx={{ pr: 3 }}>
                                                <IconButton onClick={handleMenuClick} size="large">
                                                    <MoreHorizOutlinedIcon
                                                        fontSize="small"
                                                        aria-controls="menu-popular-card-1"
                                                        aria-haspopup="true"
                                                        sx={{ color: 'grey.500' }}
                                                    />
                                                </IconButton>
                                                <Menu
                                                    id="menu-popular-card-1"
                                                    anchorEl={anchorEl}
                                                    keepMounted
                                                    open={Boolean(anchorEl)}
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
                                                    {' '}
                                                    <MenuItem onClick={handleClose}>
                                                        <FiEdit style={{ color: '#76A81B', marginRight: '10px' }} />
                                                        Edit
                                                    </MenuItem>
                                                    <MenuItem onClick={handleClose}>
                                                        <AiOutlineEye style={{ color: '#76A81B', marginRight: '10px' }} /> View
                                                    </MenuItem>
                                                    <MenuItem onClick={()=>handleDelete(row.id)}>
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
            </Paper>

            {/* table pagination */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={adminData ? adminData.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Modals
                open={openModal}
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
