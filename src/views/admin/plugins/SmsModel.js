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
    const [accountId, setAccountId] = useState();
    const [accountAuth, setAccountAuth] = useState();
    const [number, setNumber] = useState();

    const token = window.localStorage.getItem('userServiceToken');
    const handleOpen = async () => {
        setDataLoading(true);
        try {
            const response = await adminAxios.get('/sms-plugin', { token });
            setAccountId(response.data.accountId);
            setAccountAuth(response.data.accountAuth);
            setNumber(response.data.number);
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
            const response = await adminAxios.post(`/update-sms-plugin`, {
                token,
                accountId,
                accountAuth,
                number
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
                        <Typography variant="h3">Edit Sms Plugin</Typography>
                        <Typography>
                            <CloseIcon onClick={url} />
                        </Typography>
                    </Grid>
                    {dataLoading === true ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <>
                            <Grid container spacing={2}>
                                <Grid item lg={6} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="Twilio Account Id"
                                        value={accountId}
                                        fullWidth
                                        onChange={(event) => setAccountId(event.target.value)}
                                    />
                                </Grid>
                                <Grid item lg={6} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="Twilio Auth Token"
                                        value={accountAuth}
                                        fullWidth
                                        onChange={(event) => setAccountAuth(event.target.value)}
                                    />
                                </Grid>
                                <Grid item lg={12} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="Twilio Number"
                                        value={number}
                                        fullWidth
                                        onChange={(event) => setNumber(event.target.value)}
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
