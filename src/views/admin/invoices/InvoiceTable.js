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
    Grid
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// project imports
import MainCard from 'ui-component/cards/MainCard';

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
        label: '#'
    },
    {
        id: 'discription',
        numeric: false,
        disablePadding: false,
        label: <Typography style={{ paddingRight: '230px' }}>Discription</Typography>
    },

    {
        id: 'startofrental',
        numeric: false,
        disablePadding: false,
        label: ' '
    },
    {
        id: 'qty',
        numeric: false,
        disablePadding: false,
        label: 'Qty'
    },
    {
        id: 'unitprice',
        numeric: true,
        disablePadding: false,
        label: 'Unit Price'
    },
    {
        id: 'total',
        numeric: false,
        disablePadding: false,
        label: 'Total'
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

export default function InvoiceTable(props) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectedValue, setSelectedValue] = React.useState([]);

    const { invoice, sub, car, company } = props;
   

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
                            rowCount={invoice.length}
                        />
                        <TableBody>
                            <TableRow
                                hover
                                onClick={(event) => handleClick(event, invoice.id)}
                                role="checkbox"
                                tabIndex={-1}
                                key={invoice.id}
                            >
                                <TableCell align="center">{invoice.id}</TableCell>
                                <TableCell component="th" scope="row" sx={{ color: '#212121' }}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography component="div" align="left" variant="subtitle1">
                                        {company === null ? 'N/A' : company.name} {car === null ? 'N/A' : car.name}
                                        </Typography>
                                        <Typography component="div" align="left" variant="subtitle2">
                                            From {sub === null ? 'N/A' : sub.pick_from} {sub === null ? 'N/A' : `${sub.pick_from === 'home' ? 'with extra CHF 180' : 'with free delivery'}`} 
                                        </Typography>
                                    </Grid>
                                </TableCell>

                                <TableCell align="center">{invoice === null ? 'N/A' : invoice.start_date}</TableCell>
                                <TableCell align="center"> 1 </TableCell>
                                <TableCell align="center"> {invoice === null ? 'N/A' : invoice.price} </TableCell>

                                <TableCell align="center"> {invoice === null ? 'N/A' : invoice.price} </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* table data */}
            </Paper>
        </MainCard>
    );
}
