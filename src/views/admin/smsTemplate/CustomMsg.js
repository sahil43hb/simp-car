import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField, Autocomplete, CircularProgress } from '@mui/material';
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

export default function EditModal({ url, open, handleClose, title1, description, btnName, img, showModal = true, OnClick }) {
    const [loading, setLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);
    const [cVal, setCVal] = useState();
    const token = window.localStorage.getItem('userServiceToken');
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState(userData[0]);

    const handleopen = async () => {
        try {
            const token = window.localStorage.getItem('userServiceToken');
            const response = await adminAxios.get('/manual-email', { token });
            console.log(response.data);
            setUserData(response.data.user);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleopen();
    }, []);
    const handleUserChange = (event, value) => {
        setUser(value);
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
                        <Typography variant="h3">Send Custom MSG</Typography>
                        <Typography>
                            <CloseIcon onClick={url} />
                        </Typography>
                    </Grid>
                    {dataLoading === true ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '11vh' }}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Autocomplete
                                        options={userData}
                                        getOptionLabel={(option) => option.first_name}
                                        value={user} // Set the selected value explicitly
                                        onChange={handleUserChange} // <-- Add this line
                                        renderInput={(params) => <TextField {...params} label="Select User" />}
                                    />
                                </Grid>
                                <Grid item lg={12} py={2}>
                                    <TextField
                                        id="standard-select-currency"
                                        label="Write Msg"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        onChange={(event) => setCVal(event.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </>
                    )}

                    <Grid sx={{ mt: 2, textAlign: 'right' }}>
                        <Button disableElevation onClick={handleClose} type="submit" style={{ alignSelf: 'center', color: 'red' }}>
                            Cancel
                        </Button>
                        {loading === true ? (
                            <CircularProgress style={{ height: '30px', width: '30px' }} />
                        ) : (
                            <Button
                                disableElevation
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
