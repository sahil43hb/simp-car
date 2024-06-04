import PropTypes from 'prop-types';
import * as React from 'react';

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
    TablePagination
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { AiOutlineEye } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import Chip from 'ui-component/extended/Chip';
import Chip from 'ui-component/extended/Chip';
import Car from 'assets/images/car.png';

// assets

import { Link, useNavigate } from 'react-router-dom';

// material-ui imports...

export default function TotalSubscription(props) {
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
            status,
            color,
            addsignature
        };
    }

    const { sub } = props;

    const rows =
        sub.subs && sub.subs.length > 0
            ? sub.subs.map((item) =>
                  createData(
                      item.id,
                      item.car === null ? 'N/A' : item.start_date,
                      Car,
                      item.car.car_company === null ? 'N/A' : item.car.car_company.name,
                      item.car === null ? 'N/A' : item.car.name,
                      item.car === null ? 'N/A' : item.start_date,
                      item.car === null ? 'N/A' : item.rent_period,
                      item.car === null ? 'N/A' : item.milage_plan,
                      item.car === null ? 'N/A' : item.car.price,
                      item.car === null ? 'N/A' : item.status,
                      item.car === null ? 'N/A' : item.status,
                      'addsignature'
                  )
              )
            : [];

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
    const navigate = useNavigate();

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
            label: 'Start Date'
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
            id: 'addsignature',
            numeric: false,
            disablePadding: false,
            label: 'Add document'
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

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectedValue, setSelectedValue] = React.useState([]);

    const [anchorEl, setAnchorEl] = React.useState(null);
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
                const newSelectedId = sub.map((n) => n.id);
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
        const selectedRowData = sub.filter((row) => newSelected.includes(row.id.toString()));
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
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sub.length) : 0;

    return (
        <MainCard
            content={false}
            title="Subscriptions"
            secondary={
                <Stack direction="row" spacing={2} alignItems="center">
                    <Grid xs={2} sm={12} md={12} lg={12}>
                        <button
                            onClick={() => navigate('/book-a-car')}
                            type="button"
                            style={{
                                color: '#76A81B',
                                backgroundColor: '#FFFF',
                                margin: '7px',
                                borderRadius: '6px',
                                border: '1px solid #76A81B',
                                cursor: 'pointer',
                                padding: '10px',

                                // width: 140,
                                textAlign: 'center'
                            }}
                        >
                            + Add Subscriptions
                        </button>
                    </Grid>
                </Stack>
            }
        >
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={sub.length}
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
                                        let label;
                                        let color;
                                        let background;
                                        if (row.status === '0') {
                                            label = 'Pending';
                                            color = '#C62828';
                                            background = '#FFDAD8';
                                        } else if (row.status === '1') {
                                            label = 'Active';
                                            color = '#76A81B';
                                            background = '#B9F6CA';
                                        } else if (row.status === '2') {
                                            label = 'Cancelled';
                                            color = 'gray';
                                            background = 'lightgray';
                                        }
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
                                                        <Typography component="div" align="center" variant="subtitle2">
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
                                                <TableCell align="center">{row.duration}</TableCell>
                                                <TableCell align="center">{row.packages}</TableCell>
                                                <TableCell align="center" style={{ color: '#76A81B' }}>
                                                    {row.rent}
                                                </TableCell>
                                                <TableCell>
                                                    <Chip
                                                        style={{ color: `${color}`
                                                        , backgroundColor: `${background}` }}
                                                        label={label}
                                                        size="small"
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Link to="/add-document">
                                                        <span style={{ color: '#4D4D4D' }}>Add document</span>
                                                    </Link>
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
                                                        <Link to="/edit-subscription" style={{ borderBottom: '0px', color: '#4D4D4D' }}>
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
