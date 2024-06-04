import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
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
    Typography,
    Stack,
    Grid
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Chip from 'ui-component/extended/Chip';
import Car from 'assets/images/car.png';

// assets

import Camera from 'assets/images/camera.png';
import { Link } from 'react-router-dom';
import ReactFileReader from 'react-file-reader';

function createData(id, date, auto, name, model, startofrental, duration, packages, rent, bills, status, color, action) {
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
        color,
        action
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
        'Pending document',
        'error',
        'Add signature'
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
        label: 'Subscriptions No.'
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

export default function AddDocument() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectedValue, setSelectedValue] = React.useState([]);

    const handleClick1 = (e) => console.log(e);

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

    return (
        <MainCard
            content={false}
            title="Subscriptions"
            secondary={
                <Stack direction="row" spacing={2} alignItems="center">
                <Grid xs={2} sm={12} md={12} lg={12}>
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
                            height: 30,
                            textAlign: 'center'
                        }}
                    >
                        + Add Document
                    </button>
                    </Grid>
                </Stack>
            }
        >
            <Grid style={{ padding: '30px 20px' }}>
                <Grid style={{ border: '2px dashed #909090', borderRadius: '6px', cursor: 'pointer' }}>
                    <ReactFileReader
                        // fileTypes={[".png",".tif", ".jpg",]}
                        base64="true"
                        handleFiles={handleClick1}
                    >
                        <Grid style={{ padding: '45px 0px', textAlign: 'center' }}>
                            <img style={{ paddingBottom: '15px' }} src={Camera} alt="not" />
                            <Typography>Drop files here or click to upload.</Typography>
                        </Grid>
                    </ReactFileReader>
                </Grid>
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
                                                <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="left" variant="subtitle1">
                                                            {row.id}
                                                        </Typography>
                                                        <Typography component="div" align="left" variant="subtitle2">
                                                            {row.date}
                                                        </Typography>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <img src={row.auto} alt="no" />
                                                </TableCell>
                                                <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121' }}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography component="div" align="left" variant="subtitle1">
                                                            {row.name}
                                                        </Typography>
                                                        <Typography component="div" align="left" variant="subtitle2">
                                                            {row.model}
                                                        </Typography>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell align="center">{row.startofrental}</TableCell>
                                                <TableCell align="center"> {row.duration} </TableCell>
                                                <TableCell align="center"> {row.packages} </TableCell>
                                                <TableCell align="center" style={{ color: '#76A81B' }}>
                                                  
                                                    {row.rent}
                                                </TableCell>
                                                <TableCell align="center"> {row.bills} </TableCell>
                                                <TableCell>
                                                    <Chip chipcolor={row.color} label={row.status} size="small" />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Link style={{ color: '#4D4D4D' }} to="/add-signature">
                                                        {row.action}
                                                    </Link>
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
        </MainCard>
    );
}
