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
     TablePagination,
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

function createData(id, customers, date, address, model, contactdetails, email, rent, subscriptions, bills, status, color) {
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
        bills,
        status,
        color
    };
}

const rows = [
    createData(
        '1',
        'Muster Hans',
        '12.03.2023, 11:50',
        'Freiburgstrasse 12',
        '3172 Niederwangen',
        '031 321 11 23',
        'hansi@bluewin.ch',
        '660.00',
        '2',
        '21',
        'Active',
        'success'
    ),
    createData(
        '1',
        'Muster Hans',
        '12.03.2023, 11:50',
        'Freiburgstrasse 12',
        '3172 Niederwangen',
        '031 321 11 23',
        'hansi@bluewin.ch',
        '660.00',
        '2',
        '21',
        'Active',
        'success'
    ),
    createData(
        '1',
        'Muster Hans',
        '12.03.2023, 11:50',
        'Freiburgstrasse 12',
        '3172 Niederwangen',
        '031 321 11 23',
        'hansi@bluewin.ch',
        '660.00',
        '2',
        '21',
        'Active',
        'success'
    ),
    createData(
        '1',
        'Muster Hans',
        '12.03.2023, 11:50',
        'Freiburgstrasse 12',
        '3172 Niederwangen',
        '031 321 11 23',
        'hansi@bluewin.ch',
        '660.00',
        '2',
        '21',
        'Active',
        'success'
    ),
    createData(
        '1',
        'Muster Hans',
        '12.03.2023, 11:50',
        'Freiburgstrasse 12',
        '3172 Niederwangen',
        '031 321 11 23',
        'hansi@bluewin.ch',
        '660.00',
        '2',
        '21',
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
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Address'
    },
    {
        id: 'contactdetails',
        numeric: false,
        disablePadding: false,
        label: 'Contact details'
    },

    {
        id: 'rent',
        numeric: false,
        disablePadding: false,
        label: 'Rent'
    },
    {
        id: 'subscriptions',
        numeric: true,
        disablePadding: false,
        label: 'Subscriptions'
    },
    {
        id: 'bills',
        numeric: false,
        disablePadding: false,
        label: 'Bills'
    },

    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status'
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
                {/* <TableCell padding="checkbox" sx={{ pl: 3 }}>
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts'
                        }}
                    />
                </TableCell> */}
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

// ==============================|| TABLE - HEADER TOOLBAR ||============================== //

// const EnhancedTableToolbar = ({ numSelected }) => (
//     <Toolbar
//         sx={{
//             p: 0,
//             pl: 1,
//             pr: 1,
//             ...(numSelected > 0 && {
//                 color: (theme) => theme.palette.secondary.main
//             })
//         }}
//     >
//         {numSelected > 0 ? (
//             <Typography color="inherit" variant="subtitle1">
//                 {numSelected} selected
//             </Typography>
//         ) : (
//             <Typography variant="h6" id="tableTitle">
//                 ""
//             </Typography>
//         )}
//         <Box sx={{ flexGrow: 1 }} />
//         {numSelected > 0 && (
//             <Tooltip title="Delete">
//                 <IconButton size="large">
//                     <DeleteIcon />
//                 </IconButton>
//             </Tooltip>
//         )}
//     </Toolbar>
// );

// EnhancedTableToolbar.propTypes = {
//     numSelected: PropTypes.number.isRequired
// };

// ==============================|| TABLE - DATA TABLE ||============================== //

export default function Transfer() {
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

    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

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
        <MainCard
            content={false}
            title="Transfers"
            secondary={
                <Stack direction="row" spacing={2} alignItems="center">
                    <button
                        onClick={() => prompt('Enter NickName')}
                        type="button"
                        style={{
                            color: '#76A81B',
                            backgroundColor: '#FFFF',
                            margin: '7px',
                            borderRadius: '6px',
                            border: '1px solid #76A81B',
                            cursor: 'pointer',
                            height: 40,
                            // width: 140,
                            textAlign: 'center'
                        }}
                    >
                        + Create Customer
                    </button>
                    {/* <SimpleModal /> */}
                </Stack>
            }
        >
            <Grid style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
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
                    size="small"
                />

                <FormControl style={{ width: '150px' }}>
                    <InputLabel id="demo-simple-select-label1">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label1"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Actie</MenuItem>
                        <MenuItem value={20}>Active</MenuItem>
                        <MenuItem value={30}>Active</MenuItem>
                    </Select>
                </FormControl>

                <Grid>
                    <Button style={{ padding: '13px 20px', borderRadius: '5px', background: '#76A81B', color: '#FFFF', border: 'none' }}>
                        Canton of residance <span style={{ paddingLeft: '10px' }}>+3</span>{' '}
                        <CloseIcon style={{ color: 'white', fontSize: '12px' }} />
                    </Button>
                </Grid>

                <FormControl style={{ width: '150px' }}>
                    <InputLabel id="demo-simple-select-label2 ">Nationality</InputLabel>
                    <Select
                        labelId="demo-simple-select-label2"
                        id="demo-simple-select"
                        value={nationality}
                        label="Nationality"
                        placeholder="2500 km per month"
                        onChange={handleChangeNat}
                    >
                        <MenuItem value={10}>Pakistain</MenuItem>
                        <MenuItem value={20}>England</MenuItem>
                        <MenuItem value={30}>London</MenuItem>
                    </Select>
                </FormControl>

                <FormControl style={{ width: '150px' }}>
                    <InputLabel id="demo-simple-select-label2 ">Mr.</InputLabel>
                    <Select
                        labelId="demo-simple-select-label2"
                        id="demo-simple-select"
                        value={mr}
                        label="Nationality"
                        placeholder="2500 km per month"
                        onChange={handleChangeMr}
                    >
                        <MenuItem value={10}>Ms.</MenuItem>
                        <MenuItem value={20}>Mr.</MenuItem>
                    </Select>
                </FormControl>

                <FormControl style={{ width: '150px' }}>
                    <InputLabel id="demo-simple-select-label2 ">Locality</InputLabel>
                    <Select
                        labelId="demo-simple-select-label2"
                        id="demo-simple-select"
                        value={locality}
                        label="Nationality"
                        placeholder="2500 km per month"
                        onChange={handleChangeLocality}
                    >
                        <MenuItem value={10}>Pakistain</MenuItem>
                        <MenuItem value={20}>England</MenuItem>
                        <MenuItem value={30}>London</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Paper sx={{ width: '100%', mb: 2 }}>
                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}

                {/* table */}

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
                                                {/* id, fname, lname, Email, CreatedAT, AccountType, Nickname */}
                                                {/* <TableCell padding="checkbox" sx={{ pl: 3 }}>
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId
                                                    }}
                                                />
                                            </TableCell> */}

                                                <TableCell align="center">#{row.id}</TableCell>
                                                <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="center" variant="subtitle1">
                                                            {row.customers}
                                                        </Typography>
                                                        <Typography component="div" align="center" variant="subtitle2">
                                                            {row.date}
                                                        </Typography>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="center" variant="subtitle1">
                                                            {row.address}
                                                        </Typography>
                                                        <Typography component="div" align="center" variant="subtitle2">
                                                            {row.model}
                                                        </Typography>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="center" variant="subtitle1">
                                                            {row.contactdetails}
                                                        </Typography>
                                                        <Typography component="div" align="center" variant="subtitle2">
                                                            {row.email}
                                                        </Typography>
                                                    </Grid>
                                                </TableCell>

                                                <TableCell align="center" style={{ color: '#76A81B' }}>
                                                    {row.rent}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Chip chipcolor={row.color} label={row.subscriptions} size="small" />
                                                </TableCell>

                                                <TableCell align="center">
                                                    <Chip chipcolor={row.color} label={row.bills} size="small" />
                                                </TableCell>

                                                <TableCell align="center">
                                                    <Chip chipcolor={row.color} label={row.status} size="small" />
                                                </TableCell>

                                                <TableCell align="center" sx={{ pr: 3 }}>
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
                                                        <Link  style={{ borderBottom: '0px', color: '#4D4D4D' }}>
                                                            <MenuItem onClick={handleClose}>
                                                              
                                                                <FiEdit style={{ color: '#76A81B', marginRight: '10px' }} />
                                                                Edit
                                                            </MenuItem>
                                                        </Link>
                                                        <MenuItem onClick={handleClose}>
                                                            <AiOutlineEye style={{ color: '#76A81B', marginRight: '10px' }} /> View
                                                        </MenuItem>
                                                        <MenuItem onClick={handleClose}>
                                                            <DeleteOutlineOutlinedIcon style={{ color: '#76A81B', marginRight: '10px' }} />{' '}
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

                {/* table data */}
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
