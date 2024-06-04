import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
import TotalLineChartCard from 'ui-component/cards/TotalLineChartCard';

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
    Grid,
    TextField,
    InputAdornment,
    Select,
    Button,
    TablePagination,
    Stack
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { AiOutlineEye } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { formatDistanceToNow } from 'date-fns'; 
import Chip from 'ui-component/extended/Chip';
import Car from 'assets/images/car.png';

import { Link } from 'react-router-dom';
import DateFormat from 'ui-component/our-component/DateFormat';

function createData(id, date, auto, name, model, startofrental, duration, packages, rent, bills, status, color, addsignature) {
    return {
        id,
        date,
        auto,
        name,
        model,
        startofrental,
        duration,
        packages,
        rent,
        bills,
        status,
        color
    };
}

const rows = [
    createData(
        'A2301301',
        '12.03.2023, 11:50',
        Car,
        'Muster Hans',
        '3018 Bern',
        '16.06.2022',
        '6 Months',
        '2’500 Per Month',
        '660.00',
        '21',
        'Active',
        'success'
    ),
    createData(
        'A2301301',
        '12.03.2023, 11:50',
        Car,
        'Muster Hans',
        '3018 Bern',
        '16.06.2022',
        '6 Months',
        '2’500 Per Month',
        '660.00',
        '21',
        'Rejected',
        'error'
    ),
    createData(
        'A2301301',
        '12.03.2023, 11:50',
        Car,
        'Muster Hans',
        '3018 Bern',
        '16.06.2022',
        '6 Months',
        '2’500 Per Month',
        '660.00',
        '21',
        'Active',
        'success'
    ),
    createData(
        'A2301301',
        '12.03.2023, 11:50',
        Car,
        'Muster Hans',
        '3018 Bern',
        '16.06.2022',
        '6 Months',
        '2’500 Per Month',
        '660.00',
        '21',
        'Rejected',
        'error'
    )
];

export default function TotalSubscription() {
    const token = window.localStorage.getItem('adminServiceToken');
    const [subData, setSubData] = useState([]);
    const [data, setData] = useState([]);
    const [totalPercentage, setTotalPercentage] = useState([]);
    const [activePercentage, setActivePercentage] = useState([]);
    const [pendingPercentage, setPendingPercentage] = useState([]);
    const [cancelledPercentage, setCancelledPercentage] = useState([]);
    const [chartMonth, setChartMonth] = useState([]);
    const [activeChartMonth, setActiveChartMonth] = useState([]);
    const [pendingChartMonth, setPendingChartMonth] = useState([]);
    const [cancelledChartMonth, setCancelledChartMonth] = useState([]);
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/subs', { token });
            setData(response.data);
            
            setSubData(response.data.subs);
            setTotalPercentage(response.data.totalPercentage);
            setActivePercentage(response.data.activePercentage);
            setPendingPercentage(response.data.pendingPercentage);
            setCancelledPercentage(response.data.cancelledPercentage);
            setChartMonth(response.data.monthlyData);
            setActiveChartMonth(response.data.monthlyDataPending);
            setPendingChartMonth(response.data.monthlyDataActive);
            setCancelledChartMonth(response.data.monthlyDataCancelled);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleOpen();
    }, []);
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
            id: 'auto',
            numeric: false,
            disablePadding: false,
            label: 'Auto'
        },
        {
            id: 'name',
            numeric: false,
            disablePadding: false,
            label: 'Name'
        },
        {
            id: 'startofrental',
            numeric: false,
            disablePadding: false,
            label: 'Start of Rental'
        },
        {
            id: 'duration',
            numeric: true,
            disablePadding: false,
            label: 'Minimum Duration'
        },
        {
            id: 'packages',
            numeric: false,
            disablePadding: false,
            label: 'Kilometer Package'
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
        },
        {
            id: 'created',
            numeric: false,
            disablePadding: false,
            label: 'Created At' 
        }
        ,
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

    // ==============================|| TABLE - DATA TABLE ||============================== //

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
    const height = rows.length === 0 || rows.length < 5 ? '80vh' : '';

    const paginatedData = rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event?.target.value, 10));
        setPage(0);
    };
    const chartData = {
        type: 'area',
        height: 100,
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#fff'],
            fill: {
                type: 'solid',
                opacity: 0.4
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            yaxis: {
                min: 0,
                max: 10
            },
            tooltip: {
                theme: 'dark',
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: () => 'Total Status'
                    }
                },
                marker: {
                    show: false
                }
            }
        },
        series: [
            {
                name: 'series1',
                data: chartMonth
            }
        ]
    };
    const chartDataActive = {
        type: 'area',
        height: 100,
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#fff'],
            fill: {
                type: 'solid',
                opacity: 0.4
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            yaxis: {
                min: 0,
                max: 10
            },
            tooltip: {
                theme: 'dark',
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: () => 'Total Status'
                    }
                },
                marker: {
                    show: false
                }
            }
        },
        series: [
            {
                name: 'series1',
                data: activeChartMonth
            }
        ]
    };
    const chartDataPending = {
        type: 'area',
        height: 100,
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#fff'],
            fill: {
                type: 'solid',
                opacity: 0.4
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            yaxis: {
                min: 0,
                max: 10
            },
            tooltip: {
                theme: 'dark',
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: () => 'Total Status'
                    }
                },
                marker: {
                    show: false
                }
            }
        },
        series: [
            {
                name: 'series1',
                data: pendingChartMonth
            }
        ]
    };
    const chartDataCancelled = {
        type: 'area',
        height: 100,
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#fff'],
            fill: {
                type: 'solid',
                opacity: 0.4
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            yaxis: {
                min: 0,
                max: 10
            },
            tooltip: {
                theme: 'dark',
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: () => 'Total Status'
                    }
                },
                marker: {
                    show: false
                }
            }
        },
        series: [
            {
                name: 'series1',
                data: cancelledChartMonth
            }
        ]
    };
    console.log('SubData=>', subData);

    // const getHumanReadableTime = (timestamp) => {
    //     const date = new Date(timestamp);
    //     const distance = formatDistanceToNow(date, { includeSeconds: false, addSuffix: true });
      
    //     // Remove the word "about" if present at the beginning
    //     return distance.startsWith('about ') ? distance.slice(6) : distance;
    //   };

    return (
        <>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        bgColor="#76A81B"
                        chartData={chartData}
                        value={data.count}
                        title="Total Subscriptions"
                        percentage={`${totalPercentage}%`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        chartData={chartDataActive}
                        bgColor="#57DC52"
                        value={data.active}
                        title="Active Subscriptions "
                        percentage={`${activePercentage}%`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        chartData={chartDataCancelled}
                        bgColor="#606060"
                        value={data.cancelled}
                        title="Cancelled Subscriptions"
                        percentage={`${cancelledPercentage}%`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        chartData={chartDataPending}
                        bgColor="#00994C"
                        value={data.pending}
                        title="In Process Subscriptions"
                        percentage={`${pendingPercentage}%`}
                    />
                </Grid>
            </Grid>
            <MainCard
                content={false}
                title="Subscriptions"
                style={{ marginTop: '30px' }}
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
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                    <TableCell />
                                    <TableCell style={{ padding: '0px' }}>No data available in table</TableCell>
                                </TableRow>
                            ) : (
                                <TableBody>
                                    {subData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
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
                                                <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="center" variant="subtitle1">
                                                            {row.id}
                                                        </Typography>
                                                        {/* <Typography component="div" align="center" variant="subtitle2">
                                                            {row === null ? 'N/A' : row.start_date}
                                        </Typography> */}
                                                    </Grid>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <img src={Car} alt="no" />
                                                </TableCell>
                                                <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="left" variant="subtitle1">
                                                            {row.car.car_company === null ? 'N/A' : row.car.car_company.name}
                                                        </Typography>
                                                        <Typography component="div" align="left" variant="subtitle2">
                                                            {row.car === null ? 'N/A' : row.car.name}
                                                        </Typography>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell align="center">{row === null ? 'N/A' : row.start_date}</TableCell>
                                                <TableCell align="center"> {row === null ? 'N/A' : row.rent_period} Months</TableCell>
                                                <TableCell align="center"> {row === null ? 'N/A' : row.milage_plan} KM</TableCell>
                                                <TableCell align="center" style={{ color: '#76A81B' }}>
                                                    {row.sub[0] === '[]' ? 'N/A' : row.sub[0].price}
                                                </TableCell>
                                                <TableCell>
                                                    <Chip
                                                        style={{
                                                            color: `${
                                                                row === null
                                                                    ? 'N/A'
                                                                    : `${row.sub[0].status === '1' ? '#76A81B' : '#C62828'}`
                                                            }`,
                                                            backgroundColor: `${
                                                                row === null
                                                                    ? 'N/A'
                                                                    : `${row.sub[0].status === '1' ? '#B9F6CA' : '#FFDAD8'}`
                                                            }`
                                                        }}
                                                        label={row === null ? 'N/A' : `${row.sub[0].status === '1' ? 'Paid' : 'UnPaid'}`}
                                                        size="small"
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                 <Typography><DateFormat time={row.created_at}/>   </Typography>
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
                                                        <Link
                                                            to="/admin/subscription/edit-subscription"
                                                            style={{ borderBottom: '0px', color: '#4D4D4D' }}
                                                        >
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
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={subData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                </Paper>
            </MainCard>
        </>
    );
}
