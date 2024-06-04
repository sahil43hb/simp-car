import PropTypes from 'prop-types';
import * as React from 'react';

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
    InputAdornment,
    Grid
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineEye } from 'react-icons/ai';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import myAxios from 'utils/myAxios';
import { useEffect, useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Chip from 'ui-component/extended/Chip';

import TotalLineChartCard from 'ui-component/cards/TotalLineChartCard';
import { Link } from 'react-router-dom';

// assets
export default function Invoice() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectedValue, setSelectedValue] = React.useState([]);

    const token = window.localStorage.getItem('adminServiceToken');
    const [subData, setSubData] = useState([]);
    const [totalData, setTotalData] = useState([]);
    const [paidData, setPaidData] = useState([]);
    const [unpaidData, setUnpaidData] = useState([]);
    const [cancelledData, setCancelledData] = useState([]);
    const [percentage1, setPercentage1] = useState([]);
    const [percentage2, setPercentage2] = useState([]);
    const [percentage3, setPercentage3] = useState([]);
    const [percentage4, setPercentage4] = useState([]);
    const [chartMonth, setChartMonth] = useState([]);
    const [chartMonth1, setChartMonth1] = useState([]);
    const [chartMonth2, setChartMonth2] = useState([]);
    const [chartMonth3, setChartMonth3] = useState([]);
    const handleOpen = async () => {
        try {
            const response = await myAxios.get('/invoices', { token });
            setSubData(response.data.invoice);
            setTotalData(response.data.totalInvoicesCount);
            setPaidData(response.data.invoicesWithStatus0Count);
            setUnpaidData(response.data.invoicesWithStatus1Count);
            setCancelledData(response.data.invoicesWithStatus2Count);
            setPercentage1(response.data.totalPercentage);
            setPercentage2(response.data.status0Percentage);
            setPercentage3(response.data.status1Percentage);
            setPercentage4(response.data.status2Percentage);
            setChartMonth(response.data.monthlyData);
            setChartMonth1(response.data.monthlyData1);
            setChartMonth2(response.data.monthlyData2);
            setChartMonth3(response.data.monthlyData3);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleOpen();
    }, []);
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
    const chartData1 = {
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
                data: chartMonth1
            }
        ]
    };
    const chartData2 = {
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
                data: chartMonth2
            }
        ]
    };
    const chartData3 = {
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
                data: chartMonth3
            }
        ]
    };

function createData(id, amount, date, invoicetype, status, color, method) {
    return {
        id,
        amount,
        date,
        invoicetype,
        status,
        color,
        method
    };
}
const rows = [
    createData('#123412451', '660.00', 'March 30, 2023', 'Monthly', 'Paid', 'success', 'Offline payments'),
    createData('#123412451', '250.00', 'Feb 15, 2023', 'Monthly', 'Unpaid', 'error', 'Offline payments'),
    createData('#123412451', '660.00', 'Dec 29, 2022', 'Monthly', 'Paid', 'success', 'Offline payments'),
    createData('#123412451', '660.00', 'Feb 15, 2023', 'Monthly', 'Paid', 'success', 'Offline payments'),
    createData('#123412451', '660.00', 'March 30, 2023', 'Monthly', 'Paid', 'success', 'Offline payments'),
    createData('#123412451', '250.00', 'Feb 15, 2023', 'Monthly', 'Unpaid', 'error', 'Offline payments'),
    createData('#123412451', '660.00', 'Dec 29, 2022', 'Monthly', 'Paid', 'success', 'Offline payments'),
    createData('#123412451', '660.00', 'March 30, 2023', 'Monthly', 'Paid', 'success', 'Offline payments')
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
        id: 'view',
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

// ==============================|| TABLE - DATA TABLE ||============================== //



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

    return (
        <>
            <Grid container spacing={1} alignItems="center" style={{ marginBottom: '30px' }}>
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        bgColor="#76A81B"
                        chartData={chartData}
                        value={totalData}
                        title="Total Invoices"
                        percentage={`${percentage1}%`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        chartData={chartData2}
                        bgColor="#57DC52"
                        value={unpaidData}
                        title="Paid Invoices "
                        percentage={`${percentage3}%`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        chartData={chartData1}
                        bgColor="#606060"
                        value={paidData}
                        title="Unpaid Invoices"
                        percentage={`${percentage2}%`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        chartData={chartData3}
                        bgColor="#00994C"
                        value={cancelledData}
                        title="In Process Invoices"
                        percentage={`${percentage4}%`}
                    />
                </Grid>
            </Grid>

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
                            {subData.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} style={{ textAlign: 'center' }}>
                                        No data available in table
                                    </TableCell>
                                </TableRow>
                            ) : (
                                <TableBody>
                                    {subData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                        <TableRow key={row.id}>
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
                                                <Link
                                                    style={{ color: '#4D4D4D', textDecoration: 'none' }}
                                                    to={`/particular-invoice/${row.id}`}
                                                >
                                                    <AiOutlineEye style={{ color: '#76A81B', marginRight: '10px' }} label="View" />
                                                    <span style={{ marginLeft: '-6px' }}>View</span>
                                                </Link>
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
                        count={subData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </MainCard>
        </>
    );
}
