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
    Chip,
    CircularProgress
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';

function createData(id, discription, sub, startofrental, qty, unitprice, total) {
    return {
        id,
        discription,
        sub,
        startofrental,
        qty,
        unitprice,
        total
    };
}

const rows = [
    createData('1', 'Corrupti in reprehenderit accusamus ullam earum qui.', 'Tempora voluptatem facere.', ' ', '2', '$30.00', '$60.00'),
    createData('1', 'Corrupti in reprehenderit accusamus ullam earum qui.', 'Tempora voluptatem facere.', ' ', '2', '$30.00', '$60.00'),
    createData('1', 'Corrupti in reprehenderit accusamus ullam earum qui.', 'Tempora voluptatem facere.', ' ', '2', '$30.00', '$60.00'),
    createData('1', 'Corrupti in reprehenderit accusamus ullam earum qui.', 'Tempora voluptatem facere.', ' ', '2', '$30.00', '$60.00')
];

// table filter

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

function EnhancedTableHead({ order, orderBy, onRequestSort }) {
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
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired
};

// ==============================|| TABLE - DATA TABLE ||============================== //

export default function InvoiceTable(props) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [dense] = React.useState(false);

    const { invoice, sub, car, company, subData } = props;

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

    if (!Array.isArray(subData)) {
        // If subData is not an array, display a message or return null/empty component.
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <MainCard content={false}>
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
                                {subData.map((row) => (
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
                                            <Link style={{ color: '#4D4D4D', textDecoration: 'none' }} to={`/particular-invoice/${row.id}`}>
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
            </Paper>
        </MainCard>
    );
}
