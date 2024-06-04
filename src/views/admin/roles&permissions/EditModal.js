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

export default function EditModal({
    url,
    editId,
    open,
    handleClose,
    title,
    title1,
    description,
    btnName,
    img,
    showModal = true,
    OnClick
}) {
    //   const [open, setOpen] = React.useState(false);
    //   const handleOpen = () => setOpen(true);
    //   const handleClose = () => setOpen(false);
    const nevigate = useNavigate();

console.log(editId);
    
    const [loading, setLoading] = useState(false);
    const [currency, setCurrency] = useState();
    const handleSelectChange = (event) => {
        setCurrency(event?.target.value);
    };
    const token = window.localStorage.getItem('userServiceToken');
    const [role, setRole] = useState([]);
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/team', { token });
            setRole(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleOpen();
    }, []);

    const handleStore = async () => {
        setLoading(true);
        try {
            const response = await adminAxios.post(`/update-team/${editId}`, { token, currency });
            if (response.data === 'success') {
                setLoading(false);
                handleClose();
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
                        <Typography variant="h3">Edit Role</Typography>
                        <Typography>
                            <CloseIcon onClick={url} />
                        </Typography>
                    </Grid>

                    <Grid>
                        <Typography sx={{ paddingBottom: '10px' }}>Role Title</Typography>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select Role*"
                            value={currency}
                            fullWidth
                            onChange={handleSelectChange}
                            helperText="Please select Category"
                        >
                            {role.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid sx={{ mt: 2, textAlign: 'right' }}>
                        <Button disableElevation onClick={url} type="submit" style={{ alignSelf: 'center', color: 'red' }}>
                            Cancel
                        </Button>
                        {loading === true ? (
                            <CircularProgress style={{ height: "30px", width: "30px" }} />
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
