import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField, MenuItem, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import adminAxios from 'utils/adminAxios';
// import modal from "assets/images/Modal.png";
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    height: 'auto',
    width: { xs: '70%', sm: '40%' },
    p: 3,
    borderRadius: '20px'
};

export default function EditModal({ url, editId, open, handleClose, title, title1, description, btnName, img, showModal = true, OnClick }) {
    const nevigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);
    const [mailer, setMailer] = useState();
    const [host, setHost] = useState();
    const [port, setPort] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [encryption, setEncryption] = useState();
    const [address, setAddress] = useState();
    const [name, setName] = useState();

    const token = window.localStorage.getItem('userServiceToken');
    const [role, setRole] = useState([]);
    const handleOpen = async () => {
        setDataLoading(true);
        try {
            const response = await adminAxios.get('/mail-plugin', { token });
            setMailer(response.data.mailer);
            setHost(response.data.host);
            setPort(response.data.port);
            setUserName(response.data.userName);
            setPassword(response.data.password);
            setEncryption(response.data.encryption);
            setAddress(response.data.address);
            setName(response.data.name);
            setDataLoading(false);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleOpen();
    }, []);

    const handleStore = async () => {
        setLoading(true);
        setDataLoading(true);
        try {
            const response = await adminAxios.post(`/update-mail-plugin`, {
                token,
                mailer,
                host,
                port,
                userName,
                password,
                encryption,
                address,
                name
            });
            if (response.data === 'success') {
                setLoading(false);
                setDataLoading(false);
                handleOpen();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                size="xs"
            >
                <Box sx={style}>
                    <Grid style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0px' }}>
                        <Typography variant="h3">Edit Mail Plugin</Typography>
                        <Typography>
                            <CloseIcon onClick={url} />
                        </Typography>
                    </Grid>
                    {dataLoading === true ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '36vh' }}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <>
                            <Grid container spacing={2}>
                                <Grid item lg={6} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="Mailer"
                                        value={mailer}
                                        fullWidth
                                        onChange={(event) => setMailer(event.target.value)}
                                    />
                                </Grid>
                                <Grid item lg={6} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="Host"
                                        value={host}
                                        fullWidth
                                        onChange={(event) => setHost(event.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item lg={6} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="Port"
                                        value={port}
                                        fullWidth
                                        onChange={(event) => setPort(event.target.value)}
                                    />
                                </Grid>
                                <Grid item lg={6} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="User Name"
                                        value={userName}
                                        fullWidth
                                        onChange={(event) => setUserName(event.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item lg={6} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="Password"
                                        value={password}
                                        fullWidth
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </Grid>
                                <Grid item lg={6} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="Encryption"
                                        value={encryption}
                                        fullWidth
                                        onChange={(event) => setEncryption(event.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item lg={6} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="Address"
                                        value={address}
                                        fullWidth
                                        onChange={(event) => setAddress(event.target.value)}
                                    />
                                </Grid>
                                <Grid item lg={6} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="Name"
                                        value={name}
                                        fullWidth
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </>
                    )}

                    <Grid sx={{ mt: 2, textAlign: 'right' }}>
                        <Button disableElevation onClick={url} type="submit" style={{ alignSelf: 'center', color: 'red' }}>
                            Cancel
                        </Button>
                        {loading === true ? (
                            <CircularProgress style={{ height: '30px', width: '30px' }} />
                        ) : (
                            <Button
                                disableElevation
                                onClick={handleStore}
                                type="submit"
                                variant="contained"
                                style={{ background: '#76A81B', alignSelf: 'center', color: '#FFFF' }}
                            >
                                {btnName}
                            </Button>
                        )}
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
