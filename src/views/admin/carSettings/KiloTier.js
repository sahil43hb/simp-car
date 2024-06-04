import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
import Modals from 'views/user/auth/Modal';
import picture from 'assets/images/picture.png';
import { useNavigate } from 'react-router-dom';
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
    TextField,
    Autocomplete,
    TablePagination,
    Grid,
    CircularProgress
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import DateFormat from 'ui-component/our-component/DateFormat';

function createData(
    id,
    value
) {
    return {
        id,
        value
    };
}

const rows = [
    createData(
        '1',
        '12'
    ),
    createData(
        '1',
        '12'
    ),
    createData(
        '1',
        '12'
    ),
    createData(
        '1',
        '12'
    ),
    createData(
        '1',
        '12'
    )
];

export default function KiloMeterTier() {
    const Time = [
        { label: 'Select a Value', id: 1 },
        { label: '850 KiloMeters', id: 1 },
        { label: '1250 KiloMeters', id: 2 },
        { label: '1850 KiloMeters', id: 3 },
        { label: '2500 KiloMeters', id: 4 },
        { label: '3250 KiloMeters', id: 5 }
    ];
    const token = window.localStorage.getItem('adminServiceToken');
    const [month, setMonth] = useState(Time[0]); // Initialize with the default value
    const [monthData, setMonthData] = useState([]);

    const handleMonthChange = (event, value) => {
        // 'value' will contain the selected value from the dropdown
        setMonth(value);
    };
    const timeJsonString = JSON.stringify(month); // Convert 'month' state to JSON string
    const [loading , setLoading] = useState(false);
    console.log(monthData);

    const handleDefault = async () => {
        
        try {
            const response = await adminAxios.get('/kilometer', { token });
            // console.log(response.data);
            setMonthData(response.data);

        } catch (error) {
            console.error(error);
        }
    };
    useEffect(()=>{
        handleDefault();
    }, []);

    const [open, setOpen] = useState(false);
    const handleModalClose = () => setOpen(false);
    


    const handleOpen = async () => {
        setLoading(true);
        if(month.label === 'Select a Value') {
            setLoading(false);
        }
        try {
            const response = await adminAxios.post('/add-kilometer', { token, label: month.label});
            // console.log(response.data);
            if(response.data === 'success'){
                setMonth(Time[0]);
                handleDefault();
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await adminAxios.delete(`/delete-kilometer/${id}`, { token });
            // console.log(response.data);
            if(response.data === 'success'){
                setOpen(true);
                handleDefault();
            }
        } catch (error) {
            console.error(error);
        }
    };

   
 

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
            id: 'value',
            numeric: false,
            disablePadding: false,
            label: 'Value'
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


   
    const height=monthData.length === 0||monthData.length<3 ? "80vh":"";


    return (
        <MainCard
            content={false} title="KiloMeter Tier"
        >

            <Grid container spacing={2} sx={{ padding: '10px', justifyContent: 'end' }}>
             
                <Grid item xs={12} sm={4} md={3}>
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                        <Autocomplete
                                options={Time}
                                getOptionLabel={(option) => option.label}
                                value={month} // Set the selected value explicitly
                                onChange={handleMonthChange} // <-- Add this line
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5} sm={2} md={1.5}>
                    <button
                        type="button"
                        style={{
                            color: '#76A81B',
                            backgroundColor: '#FFFF',

                            borderRadius: '6px',
                            border: '1px solid #76A81B',
                            cursor: 'pointer',
                            height: '52px',
                            padding: '13px',

                            textAlign: 'center'
                        }}
                        onClick={handleOpen}
                    >
                    {loading === true ? <CircularProgress style={{marginTop: '-8px'}} /> : '+ Submit'}
                    </button>
                </Grid>
            </Grid>

            <Paper sx={{ width: '100%', mb: 2 ,height:{xs:"",md:height} }}>
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
                        {monthData.length === 0 ? (
                            <TableRow>
                                <TableCell />
                                <TableCell align='center' style={{ padding: '0px' }}>No data available in table</TableCell>
                            </TableRow>
                        ) : (
                            <TableBody>
                                {monthData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
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
                                            <TableCell align="center">{row.id}</TableCell>
                                            <TableCell align="center">{row.value}</TableCell>
                                            <TableCell align="center"><DateFormat time={row.created_at}/></TableCell>
                                            <TableCell component="th" id={labelId} scope="row" sx={{ color: '#212121',textAlign: 'center' }}>
                                                    <DeleteOutlineOutlinedIcon style={{ color: 'red', marginRight: '10px',cursor: 'pointer' }} onClick={()=>handleDelete(row.id)}  />
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
                    count={monthData.length}
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
