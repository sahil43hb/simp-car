import React, { useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography, TablePagination } from '@mui/material';

// project imports
import Avatar from 'ui-component/extended/Avatar';
import { useDispatch } from 'store';
import Modals from 'views/user/auth/Modal';
import picture from 'assets/images/picture.png';

// asset
// import Avatar1 from 'assets/images/users/user-1.png';
import Avatar2 from 'assets/images/users/user-2.png';
import Avatar3 from 'assets/images/users/user-3.png';
import Avatar4 from 'assets/images/users/user-4.png';
import Avatar5 from 'assets/images/users/user-5.png';
import Add from './Add';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import { DeleteForever, Block, Edit } from '@mui/icons-material';
import EditModal from './EditModal';

const Avatar1 = 'https://phpstack-811730-3642341.cloudwaysapps.com/user.png';
const usersS2 = [
    {
        image: Avatar1,
        name: 'Elnora',
        designation: 'Lead Marketing Facilitator',
        badgeStatus: 'active',
        subContent: 'We need to generate the virtual CSS hard drive!',
        email: 'Reid_OConnell4@yahoo.com',
        phone: '506-654-1653',
        location: 'Saucerize',
        progressValue: '78%'
    },
    {
        image: Avatar2,
        name: 'Hirohito',
        designation: 'Investor Creative Liaison',
        badgeStatus: 'active',
        subContent: 'If we synthesize the protocol, we can get to the RSS circuit through.',
        email: 'Conner22@hotmail.com',
        phone: '673-157-1670',
        location: 'Port Narcos',
        progressValue: '78%'
    },
    {
        image: Avatar3,
        name: 'Kathie',
        designation: 'Human Accountability Strategist',
        badgeStatus: 'inactive',
        subContent: 'We need to generate the virtual CSS hard drive!',
        email: 'Dangelo40@company.com',
        phone: '506-654-1653',
        location: 'Saucerize',
        progressValue: '78%'
    },
    {
        image: Avatar4,
        name: 'Kathie',
        designation: 'Human Accountability Strategist',
        badgeStatus: 'active',
        subContent: 'We need to generate the virtual CSS hard drive!',
        email: 'Dangelo40@company.com',
        phone: '506-654-1653',
        location: 'Saucerize',
        progressValue: '78%'
    },
    {
        image: Avatar5,
        name: 'Kathie',
        designation: 'Human Accountability Strategist',
        badgeStatus: 'inactive',
        subContent: 'We need to generate the virtual CSS hard drive!',
        email: 'Dangelo40@company.com',
        phone: '506-654-1653',
        location: 'Saucerize',
        progressValue: '78%'
    }
];

// ==============================|| USER LIST 2 ||============================== //

const UserCard = () => {
    const theme = useTheme();
    const [openModal, setModalOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [data, setData] = useState();
    const [id, setId] = useState();

    const handleopenEdit = (id) => {
        setOpenEdit(true);
        setId(id);
    };

    const [open, setOpen] = React.useState(false);
    const token = window.localStorage.getItem('userServiceToken');

    const handleLoad = async (id) => {
        setId(id);
        try {
            const response = await adminAxios.post(`/routes/${id}`, { token });
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClickOpenDialog = (id) => {
        setOpen(true);
        setId(id);
        handleLoad(id);
    };

    const [adminData, setAdminData] = useState([]);
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/get-users', { token });
            setAdminData(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleOpen();
    }, []);

    const handleopenEditClose = () => {
        setOpenEdit(false);
        handleOpen();
    };

    const handleModalClose = () => {
        setModalOpen(false);
        handleOpen();
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const handleBlock = async (id) => {
        try {
            const response = await adminAxios.get(`/block-user/${id}`, { token });
            if (response.data === 'success') {
                handleOpen();
                setModalOpen(true);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleUnBlock = async (id) => {
        try {
            const response = await adminAxios.get(`/unblock-user/${id}`, { token });
            if (response.data === 'success') {
                handleOpen();
                setModalOpen(true);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event?.target.value, 10));
        setPage(0);
    };
    // Not remove

    // const [rows, setRows] = React.useState([]);
    // const { usersS2 } = useSelector((state) => state.user);

    // React.useEffect(() => {
    //     setRows(usersS2);
    // }, [usersS2]);

    // React.useEffect(() => {
    //     dispatch(getUsersListStyle2());
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    const height = adminData.length === 0 || adminData.length < 3 ? '80vh' : '';
    return (
        <TableContainer>
            <Table
                sx={{
                    '& td': {
                        whiteSpace: 'nowrap'
                    },
                    '& td:first-of-type': {
                        pl: 0
                    },
                    '& td:last-of-type': {
                        pr: 0,
                        minWidth: 260
                    },
                    '& tbody tr:last-of-type  td': {
                        borderBottom: 'none'
                    },
                    [theme.breakpoints.down('xl')]: {
                        '& tr:not(:last-of-type)': {
                            borderBottom: '1px solid',
                            borderBottomColor: theme.palette.mode === 'dark' ? 'rgb(132, 146, 196, .2)' : 'rgba(224, 224, 224, 1)'
                        },
                        '& td': {
                            display: 'inline-block',
                            borderBottom: 'none',
                            pl: 0
                        },
                        '& td:first-of-type': {
                            display: 'block'
                        }
                    },
                    height: { xs: '', md: height }
                }}
            >
                <TableBody>
                    {adminData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Avatar alt="User 1" src={row.image_link === null ? Avatar1 : row.image_link} sx={{ width: 60, height: 60 }} />
                                    </Grid>
                                    <Grid item sm zeroMinWidth>
                                        <Grid container spacing={1}>
                                            <Grid item xs={10}>
                                                <Typography align="left" variant="subtitle1">
                                                    {row.first_name} {row.last_name}
                                                    <CheckCircleIcon
                                                        sx={{ width: 14, height: 14 }}
                                                        style={{ color: row.status === '1' ? 'green' : 'gray !important' }}
                                                    />
                                                </Typography>
                                                <Typography align="left" variant="subtitle2" sx={{ whiteSpace: 'break-spaces' }}>
                                                    {row.user_team}
                                                   
                                                </Typography>
                                            </Grid>
                                            {/* <Grid item xs={10}>
                                                <Typography align="left" variant="body2" sx={{ whiteSpace: 'break-spaces' }}>
                                                    {row.subContent}
                                                </Typography>
                                            </Grid> */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <Typography variant="caption">Email</Typography>
                                        <Typography variant="h6">{row.email}</Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <Typography variant="caption">Phone</Typography>
                                        <Typography variant="h6">{row.phone}</Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell>
                                <Grid container spacing={3}>
                                    <Grid item xs={8} sm={4} md={4} lg={4}>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            sx={{ minWidth: 80 }}
                                            style={{ color: 'gray', borderColor: 'gray' }}
                                            startIcon={<ChatBubbleTwoToneIcon />}
                                            onClick={() => handleClickOpenDialog(row.id)}
                                        >
                                            Permissions
                                        </Button>
                                        <Add open={open} data={data} id={id} handleCloseDialog={handleCloseDialog} />
                                    </Grid>
                                    <Grid item xs={8} sm={4} md={4} lg={4}>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            size="small"
                                            sx={{ minWidth: 110 }}
                                            onClick={() => handleopenEdit(row.id)}
                                            startIcon={<Edit />}
                                        >
                                            Edit
                                        </Button>
                                        {openEdit && (
                                            <EditModal
                                                open={openEdit}
                                                handleClose={handleopenEditClose}
                                                editId={id}
                                                btnName="Ok"
                                                url={handleopenEditClose}
                                            />
                                        )}
                                    </Grid>
                                    <Grid item xs={8} sm={4} md={4} lg={4}>
                                        {row.status === '1' ? (
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                fullWidth
                                                size="small"
                                                onClick={() => handleBlock(row.id)}
                                                sx={{ minWidth: 80 }}
                                                startIcon={<Block />}
                                            >
                                                Block
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="outlined"
                                                style={{ color: '#121926', borderColor: '#121926' }}
                                                fullWidth
                                                size="small"
                                                onClick={() => handleUnBlock(row.id)}
                                                sx={{ minWidth: 80 }}
                                                startIcon={<Block />}
                                            >
                                                UnBlock
                                            </Button>
                                        )}
                                    </Grid>
                                </Grid>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={adminData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Modals
                open={openModal}
                handleClose={handleModalClose}
                title={<h3>SuccessFull</h3>}
                description="Record Updated Successfully"
                btnName="Ok"
                url={handleModalClose}
                img={picture}
            />
        </TableContainer>
    );
};

export default UserCard;
