import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Modals from 'views/user/auth/Modal';
import picture from 'assets/images/picture.png';
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
import Car from 'assets/images/car.png';
import { Link, useNavigate } from 'react-router-dom';
import adminAxios from 'utils/adminAxios';
import DateFormat from 'ui-component/our-component/DateFormat';

function createData(vehicle, model, images, catagory, drive, transmission, fuel, puttingintoservice, abos, status, color) {
    return {
        vehicle,
        model,
        images,
        catagory,
        drive,
        transmission,
        fuel,
        puttingintoservice,
        abos,
        status,
        color
    };
}

const rows = [
    createData('Merzdes-Benz', 'C200 CDI', Car, 'Limousine', 'Front', 'Manually', 'Diesel', '13.10.2008', '2', 'Rented', 'success'),
    createData('Merzdes-Benz', 'C200 CDI', Car, 'Limousine', 'Front', 'Manually', 'Diesel', '13.10.2008', '2', 'Rented', 'success'),
    createData('Merzdes-Benz', 'C200 CDI', Car, 'Limousine', 'Front', 'Manually', 'Diesel', '13.10.2008', '2', 'Rented', 'success'),
    createData('Merzdes-Benz', 'C200 CDI', Car, 'Limousine', 'Front', 'Manually', 'Diesel', '13.10.2008', '2', 'Rented', 'success')
];
// table filter
export default function AdminCars() {
    const navigate = useNavigate();
    const token = window.localStorage.getItem('adminServiceToken');
    const [carData, setCarData] = useState([]);
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/cars', { token });
            // console.log(response.data);
            setCarData(response.data);
            console.log(response.data,"ssss");
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleOpen();
    }, []);

    //     const rows = carData.map((car) =>
    //     createData(
    //       car.car_company.name,
    //       car.name,
    //       Car,
    //       car.car_type.name,
    //       car.drive,
    //       car.transmission,
    //       car.fuel,
    //       car.consumption,
    //       car.subscription_count,
    //       car.invoices,
    //       'success'
    //     )
    //   );

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
            id: 'vehicle',
            numeric: true,
            disablePadding: false,
            label: 'Vehicle'
        },
        {
            id: 'images',
            numeric: false,
            disablePadding: false,
            label: 'Images'
        },
        {
            id: 'catagory',
            numeric: false,
            disablePadding: false,
            label: 'Catagory'
        },
        {
            id: 'drive',
            numeric: false,
            disablePadding: false,
            label: 'Drive'
        },
        {
            id: 'transmission',
            numeric: true,
            disablePadding: false,
            label: 'Transmission'
        },
        {
            id: 'fuel',
            numeric: false,
            disablePadding: false,
            label: 'Fuel'
        },
        {
            id: 'puttingintoservice',
            numeric: false,
            disablePadding: false,
            label: 'Putting into service'
        },
        {
            id: 'Subcriptions',
            numeric: false,
            disablePadding: false,
            label: 'Subscriptions'
        },
        {
            id: 'status',
            numeric: false,
            disablePadding: false,
            label: 'Status'
        }
        ,
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

    const [open, setOpen] = useState(false);
    const handleModalClose = () => setOpen(false);

    const handleDelete = async (id) => {
        try {
            const response = await adminAxios.delete(`/delete-car/${id}`, { token });
            // console.log(response.data);
            if (response.data === 'success') {
                setOpen(true);
                handleOpen();
                handleClose();
            }
        } catch (error) {
            console.error(error);
        }
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

    const isSelected = (id) => selected.indexOf(id) !== -1;
    const paginatedData = carData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event?.target.value, 10));
        setPage(0);
    };
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
    const height=carData.length === 0||carData.length<4 ? "80vh":"";


    return (
        <MainCard
            content={false}
            title="Cars"
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
                            size="small"
                        />
                    </Grid>
                    <button
                        onClick={() => navigate('/admin/car/AddCar')}
                        type="button"
                        style={{
                            color: '#76A81B',
                            backgroundColor: '#FFFF',
                            margin: '7px',
                            borderRadius: '6px',
                            border: '1px solid #76A81B',
                            cursor: 'pointer',
                            height: 40,
                            textAlign: 'center'
                        }}
                    >
                        + Create autos
                    </button>
                    {/* <SimpleModal /> */}
                </Stack>
            }
        >
            
            <Paper sx={{ width: '100%', mb: 2,height:{xs:"",md:height} }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={carData.length}
                        />
                        {carData.length === 0 ? (
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell style={{ padding: '0px' }}>No data available in table</TableCell>
                            </TableRow>
                        ) : (
                            <TableBody>
                                {carData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                    console.log(rows.length);
                                    index += 1;
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
                                            <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                <Grid item xs zeroMinWidth>
                                                    <Typography component="div" align="center" variant="subtitle1">
                                                        {index}
                                                    </Typography>
                                                </Grid>
                                            </TableCell><TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                <Grid item xs zeroMinWidth>
                                                    <Typography component="div" align="left" variant="subtitle1">
                                                        {row.car_company === null ? 'Not Found' : row.car_company.name}
                                                    </Typography>
                                                    <Typography component="div" align="left" variant="subtitle2">
                                                        {row.name === null ? 'Not Found' : row.name}
                                                    </Typography>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="center">
                                                <img src={row.images === null ? Car : row.images.link} alt="no" style={{width: '60px'}} />
                                            </TableCell>

                                            <TableCell align="center">
                                                {row.car_type === null ? 'Not Found' : row.car_type.name}
                                            </TableCell>
                                            <TableCell align="center"> {row.drive === null ? 'Not Found' : row.drive} </TableCell>
                                            <TableCell align="center">
                                                {row.transmission === null ? 'Not Found' : row.transmission}
                                            </TableCell>
                                            <TableCell align="center"> {row.fuel === null ? 'Not Found' : row.fuel} </TableCell>
                                            <TableCell align="center" style={{ color: '#76A81B' }}>
                                                {row.consumption === null ? 'Not Found' : row.consumption}
                                            </TableCell>

                                            <TableCell align="center">
                                                <Chip
                                                    chipcolor={row.color}
                                                    label={row.subcription_count === '0' ? '0' : `${row.subscription_count}`}
                                                    size="small"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Chip
                                                    style={{
                                                        color: row.subcription_count === '0' ? '#C6282E' : '#76A81B',
                                                        backgroundColor: row.subcription_count === '0' ? '#FFDAD8' : '#DAFFD8'
                                                    }}
                                                    label={row.subcription_count === '0' ? 'Rented' : 'Available'}
                                                    size="small"
                                                />
                                            </TableCell>

                                            <TableCell align="center" >
                                            <DateFormat time={row.created_at} />
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
                                                    <Link to="/admin/car/editDetail" style={{ borderBottom: '0px', color: '#4D4D4D' }}>
                                                        <MenuItem onClick={handleClose}>
                                                            <FiEdit style={{ color: '#76A81B', marginRight: '10px' }} />
                                                            Edit
                                                        </MenuItem>
                                                    </Link>
                                                    <MenuItem onClick={handleClose}>
                                                        <AiOutlineEye style={{ color: '#76A81B', marginRight: '10px' }} /> View
                                                    </MenuItem>
                                                    <MenuItem onClick={() => handleDelete(row.id)}>
                                                        <DeleteOutlineOutlinedIcon style={{ color: 'red', marginRight: '10px' }} /> Delete
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
                    count={carData.length}
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
