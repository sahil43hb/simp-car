import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import myAxios from 'utils/myAxios';
import Modals from '../auth/Modal';
import picture from 'assets/images/picture.png';
import close from 'assets/images/close.png';


// material-ui
import { TextField, Typography, Button, Grid } from '@mui/material';

import { VscMail } from 'react-icons/vsc';
import { FiPhoneCall } from 'react-icons/fi';
import { BsClock } from 'react-icons/bs';
// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| TABLE - DATA TABLE ||============================== //

export default function Contact() {
    const storedUser = window.localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;
    const token = window.localStorage.getItem('adminServiceToken');

    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const handleClose = () => setOpen(false);
    const handleError = () => setError(false);

    const [nameValue, setNameValue] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
 console.log(nameValue,email, message);
    const handleOpen = async () => {
        try {
            const response = await myAxios.post('/contact', {
                token,
                message
            });
            console.log(response.data);
            if (response.data === 'success') {
                setOpen(true);
            } else if (response.data === 'error') {
                setError(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <MainCard content={false} title="Contact ">
            <Grid container spacing={2} style={{ padding: '40px 20px' }}>
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{ borderRight: {xs:' ',md:'2px solid #ECF3DF'} }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3} sm={2} md={3.3} lg={2}>
                            <BsClock style={{ color: '#76A81B', height: '30px', width: '30px' }} />
                        </Grid>
                        <Grid item xs={9} md={8} lg={8} style={{ padding: '0px' }}>
                            <h3 style={{ padding: '0px' }}>Customer Service Hours</h3>
                            <p>Monday to Saturday (9 to 6)</p>
    {/* <FormattedMessage id="Subscriptions" /> */}
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={3} sm={2} md={3.3} lg={2}>
                            <FiPhoneCall style={{ color: '#76A81B', height: '30px', width: '30px' }} />
                        </Grid>
                        <Grid item xs={9} md={8} lg={8} style={{ padding: '0px' }}>
                            <h3 style={{ padding: '0px' }}>Phone Support</h3>
                            <p>+44912874721</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3} sm={2} md={3.3} lg={2}>
                            <VscMail style={{ color: '#76A81B', height: '30px', width: '30px' }} />
                        </Grid>
                        <Grid item xs={9} md={8} lg={8} style={{ padding: '0px' }}>
                            <h3 style={{ padding: '0px' }}>Email Support</h3>
                            <p>johnsmith@gmail.com</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={3} sm={2} md={3.3} lg={2}>
                            <VscMail style={{ color: '#76A81B', height: '30px', width: '30px' }} />
                        </Grid>
                        <Grid item xs={9} md={8} lg={8} style={{ padding: '0px' }}>
                            <h3 style={{ padding: '0px' }}>Our Website</h3>
                            <p>www.simpcar.com</p>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={0} sm={0} md={1} lg={1} />

                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Typography style={{ fontSize: '20px' }}>Quick Contact </Typography>
                    <Grid style={{ paddingTop: '35px' }}>
                        <TextField
                            id="outlined-uncontrolled1"
                            label="Name"
                            disabled
                            onChange={(event) => setNameValue(event.target.value)}
                            name="name"
                            defaultValue={`${user.first_name} ${user.last_name}`}
                            fullWidth
                        />
                    </Grid>
                    <Grid style={{ paddingTop: '30px' }}>
                        <TextField
                            id="outlined-uncontrolled2"
                            label="Email address"
                            onChange={(event) => setEmail(event.target.value)}
                            disabled
                            name="email"
                            defaultValue={user.email}
                            fullWidth
                        />
                    </Grid>
                    <Grid style={{ paddingTop: '30px' }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            onChange={(event) => setMessage(event.target.value)}
                            name="message"
                            multiline
                            fullWidth
                            rows={4}
                            value={message}
                        />
                    </Grid>
                    <Grid style={{ paddingTop: '20px', textAlign: 'right' }}>
                        <Button
                            style={{ padding: '9px 25px', borderRadius: '5px', background: '#76A81B', color: '#FFFF', border: 'none' }}
                            type="submit"
                            onClick={handleOpen}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            {open && (
                <Modals
                    open={open}
                    handleClose={handleClose}
                    title={<h3>Successfull</h3>}
                    description="Message sent successfully."
                    btnName="Ok"
                    onClick={setOpen(false)}
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
                    onClick={handleClose}
                    img={close}
                />
            )}
        </MainCard>
    );
}
