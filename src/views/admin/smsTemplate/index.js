import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
import UpdateSms from './UpdateSms';
import CustomMsg from './CustomMsg';
import Modals from '../../user/auth/Modal';
import picture from 'assets/images/picture.png';
import SearchIcon from '@mui/icons-material/Search';
import DateFormat from 'ui-component/our-component/DateFormat';

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
    Grid,
    IconButton,
    Button,
    Typography
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets

function createData(lead, message, attachment, createdat) {
    return {
        lead,
        message,
        attachment,
        createdat
    };
}

const rows = [
    createData('Hey here is an MMS template!!', 'Hey here is an MMS template!!', 'No Attachment', 'March 4, 2023'),
    createData('Hey here is an MMS template!!', 'Hey here is an MMS template!!', 'No Attachment', 'March 4, 2023'),
    createData('Hey here is an MMS template!!', 'Hey here is an MMS template!!', 'No Attachment', 'March 4, 2023'),
    createData('Hey here is an MMS template!!', 'Hey here is an MMS template!!', 'No Attachment', 'March 4, 2023')
];

// table filter

// table header
const headCells = [
    {
        id: 'sr',
        numeric: false,
        disablePadding: false,
        label: 'SR'
    },
    {
        id: 'message',
        numeric: false,
        disablePadding: false,
        label: 'Message content'
    },
    {
        id: 'Created At',
        numeric: false,
        disablePadding: false,
        label: 'Created at'
    },
    {
        id: 'actions',
        numeric: false,
        disablePadding: false,
        label: 'Actions'
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

export default function SmsTemplate() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sms, setSms] = useState([]);
    const [value, setValue] = useState('');
    const [id, setId] = useState('');
    const [openEdit, setOpenEdit] = useState(false);
    const [openCustomEdit, setCustomOpenEdit] = useState(false);
    const [open, setOpen] = useState(false);

    const token = window.localStorage.getItem('userServiceToken');
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/sms-templates', { token });
            setSms(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleOpen();
    }, []);
    const handleModalClose = () => {
        setOpen(false);
        handleOpen();
    };
    const handleDelete = async (id) => {
        try {
            const response = await adminAxios.delete(`/delete-template/${id}`, { token });
            if (response.data === 'success') {
                setOpen(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleopenEdit = (id, value) => {
        setOpenEdit(true);
        setId(id);
        setValue(value);
    };
    const handleopenEditClose = () => {
        setOpenEdit(false);
        handleOpen();
    };
    const handleCustomOpenEdit = () => {
        setCustomOpenEdit(true);
    };
    const handleCustomOpenEditClose = () => {
        setCustomOpenEdit(false);
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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event?.target.value, 10));
        setPage(0);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;
    const height = rows.length === 0 || rows.length < 3 ? '80vh' : '';

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <MainCard
            content={false}
            title="SMS Templates"
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
                    <Button type="button" variant="contained" onClick={handleCustomOpenEdit} style={{ color: 'white', height: '50px' }}>
                        Send Custom Msg
                    </Button>
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
                            rowCount={sms.length}
                        />
                        {sms.length === 0 ? (
                            <TableBody>
                                <TableRow>
                                    <TableCell />
                                    <TableCell align="center" style={{ padding: '10px' }}>
                                        No data available in table
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        ) : (
                            <TableBody>
                                {sms.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                    /** Make sure no display bugs if row isn't an OrderData object */
                                    if (typeof row === 'number') return null;
                                    index += 1;
                                    const isItemSelected = isSelected(row.id);
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell align="center">{index}</TableCell>
                                            <TableCell align="center" style={{ color: '#76A81B' }}>
                                                {row.value}
                                            </TableCell>
                                            <TableCell align="center">
                                            <Typography><DateFormat time={row.created_at}/></Typography>
                                             </TableCell>
                                            <TableCell align="center">
                                                <Stack direction="row" justifyContent="center" alignItems="center">
                                                    <IconButton
                                                        color="inherit"
                                                        size="large"
                                                        onClick={() => handleopenEdit(row.id, row.value)}
                                                    >
                                                        <ModeOutlinedIcon style={{ color: '#4D4D4D' }} />
                                                    </IconButton>
                                                    <IconButton color="inherit" size="large" onClick={() => handleDelete(row.id)}>
                                                        <DeleteOutlineOutlinedIcon style={{ color: '#D84315' }} />
                                                    </IconButton>
                                                </Stack>
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
                    count={sms.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            {openEdit && (
                <UpdateSms
                    open={openEdit}
                    handleClose={handleopenEditClose}
                    editId={id}
                    btnName="Save"
                    value={value}
                    url={handleopenEditClose}
                />
            )}
            {openCustomEdit && (
                <CustomMsg open={openCustomEdit} handleClose={handleCustomOpenEditClose} btnName="Save" url={handleCustomOpenEditClose} />
            )}
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
