import React, { useEffect, useState } from 'react';
import myAxios from 'utils/myAxios';
import picture from 'assets/images/picture.png';
import close from 'assets/images/close.png';
import Modals from '../auth/Modal';
import { TextField, Button, Grid, InputLabel, CircularProgress } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useTheme, styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ImageWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '4px',
    cursor: 'pointer',
    width: 65,
    height: 65,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.default,
    '& > svg': {
        verticalAlign: 'sub',
        marginRight: 6
    }
}));
export default function Profile() {
    const theme = useTheme();
    const Avatar1 = 'https://phpstack-811730-3642341.cloudwaysapps.com/user.png';
    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;
    const token = window.localStorage.getItem('adminServiceToken');
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const handleClose = () => setOpen(false);
    const handleError = () => setError(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [image, setImage] = useState();
    const [selectedImageSrc, setSelectedImageSrc] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setPhone(user.phone);
    }, [user]);

    const handleOpen = async () => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('image', image); // Append the image to the FormData

            const data = {
                token,
                firstName,
                lastName,
                phone
            };

            // Append other data to the FormData
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });

            const response = await myAxios.post('/profile_update', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.data === 'success') {
                setOpen(true);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setError(true);
            setLoading(false);
        }
    };

    // const handleOpen = async () => {
    //     try {
    //         const response = await myAxios.post('/profile_update', {
    //             token,
    //             firstName,
    //             lastName,
    //             phone
    //         });
    //         console.log(response.data);
    //         if (response.data === 'success') {
    //             setOpen(true);
    //         } else if (response.data === 'error') {
    //             setError(true);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    const handlePasswordReset = async () => {
        setLoading(true);
        try {
            const response = await myAxios.post('/login/password_reset', {
                token,
                newPassword
            });
            if (response.data === 'success') {
                setOpen(true);
                setNewPassword('');
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setError(true);
            setLoading(false);
        }
    };
    const handleImage = (event) => {
        const selectedImage = event.target.files[0]; // Get the selected image file
        if (selectedImage) {
            setImage(selectedImage);
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImageSrc(e.target.result); // Update the selected image source
            };
            reader.readAsDataURL(selectedImage);
        } else {
            setImage(''); // Clear the image state
            setSelectedImageSrc(''); // Clear the selected image source
        }
    };
    return (
        <>
            <MainCard content={false} title="Edit Profile Details">
                <Grid container spacing={2} style={{ paddingBottom: '30px' }}>
                    <Grid item xs={11.9} style={{ paddingLeft: '30px' }}>
                        <Grid item xs={12}>
                            {selectedImageSrc && (
                                <ImageWrapper style={{ height: '60px' }}>
                                    <img
                                        id="selected-image"
                                        src={
                                            user.image_link === null
                                                ? `${image === undefined ? Avatar1 : selectedImageSrc}`
                                                : user.image_link
                                        }
                                        alt="Selected"
                                        style={{ width: '100px', height: 'auto' }}
                                    />
                                </ImageWrapper>
                            )}
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <div>
                                <TextField
                                    type="file"
                                    id="file-upload"
                                    onChange={handleImage}
                                    fullWidth
                                    label="Click here to upload"
                                    sx={{ display: 'none' }}
                                />
                                <InputLabel
                                    htmlFor="file-upload"
                                    sx={{
                                        background: theme.palette.background.default,
                                        py: 3.75,
                                        px: 0,
                                        textAlign: 'center',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        mb: 3,
                                        '& > svg': {
                                            verticalAlign: 'sub',
                                            mr: 0.5
                                        }
                                    }}
                                >
                                    <CloudUploadIcon /> Click here to upload Image
                                </InputLabel>
                            </div>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Grid style={{ paddingTop: '30px' }}>
                                    <TextField
                                        id="outlined-uncontrolled2"
                                        defaultValue={user.first_name}
                                        label="First Name"
                                        name="firstName"
                                        onChange={(event) => setFirstName(event.target.value)}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid style={{ paddingTop: '30px' }}>
                                    <TextField
                                        id="outlined-uncontrolled2"
                                        defaultValue={user.last_name}
                                        label="Last Name"
                                        name="lastName"
                                        onChange={(event) => setLastName(event.target.value)}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid style={{ paddingTop: '35px' }}>
                            <TextField
                                id="outlined-uncontrolled1"
                                defaultValue={user.phone}
                                label="Phone"
                                onChange={(event) => setPhone(event.target.value)}
                                name="phone"
                                fullWidth
                            />
                        </Grid>
                        <Grid style={{ paddingTop: '35px' }}>
                            <TextField id="outlined-uncontrolled1" label="Email Address" disabled defaultValue={user.email} fullWidth />
                        </Grid>

                        <Grid style={{ paddingTop: '20px' }}>
                            {loading === true ? (
                                <CircularProgress />
                            ) : (
                                <Button
                                    style={{
                                        padding: '8px 20px',
                                        borderRadius: '5px',
                                        background: '#76A81B',
                                        color: '#FFFF',
                                        border: 'none'
                                    }}
                                    onClick={handleOpen}
                                    disableElevation
                                    type="submit"
                                >
                                    Change Details
                                </Button>
                            )}
                            {open && (
                                <Modals
                                    open={open}
                                    handleClose={handleClose}
                                    title={<h3>SuccessFull</h3>}
                                    description="Record updated Successfully"
                                    btnName="Ok"
                                    url={handleClose}
                                    img={picture}
                                />
                            )}
                            {error && (
                                <Modals
                                    open={error}
                                    handleClose={handleError}
                                    title={<h3>Error</h3>}
                                    description="Something went wrong"
                                    btnName="Close"
                                    url={handleError}
                                    img={close}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </MainCard>

            <MainCard content={false} title="Change Password">
                <Grid container spacing={2} style={{ height: '100vh' }}>
                    <Grid item xs={11.9} style={{ paddingLeft: '30px' }}>
                        <Grid style={{ paddingTop: '35px' }}>
                            <TextField
                                id="outlined-uncontrolled2"
                                onChange={(event) => setNewPassword(event.target.value)}
                                label="New Password"
                                name="newPassword"
                                value={newPassword}
                                fullWidth
                            />
                        </Grid>
                        <Grid style={{ paddingTop: '20px' }}>
                        {loading === true ? (
                                <CircularProgress />
                            ) : (
                                <Button
                                    style={{
                                        padding: '8px 20px',
                                        borderRadius: '5px',
                                        background: '#76A81B',
                                        color: '#FFFF',
                                        border: 'none'
                                    }}
                                    onClick={handlePasswordReset}
                                    disableElevation
                                    type="submit"
                                >
                                    Change Password
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
}
