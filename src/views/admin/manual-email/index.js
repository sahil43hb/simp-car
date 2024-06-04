import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import adminAxios from 'utils/adminAxios';
import Modals from 'views/user/auth/Modal';
import picture from 'assets/images/picture.png';
// material-ui
import { Grid, TextField, Autocomplete, Button, CircularProgress, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Container } from '@mui/system';

export default function ManualEamil() {
    const editor = useRef(null);
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const [userData, setUserData] = useState([]);
    const [emailData, setEmailData] = useState([]);
    const [invoiceData, setInvoiceData] = useState([]);

    const handleEditorChange = (content) => {
        setValue(content);
    };
    const handleopen = async () => {
        try {
            const token = window.localStorage.getItem('userServiceToken');
            const response = await adminAxios.get('/manual-email', { token });
            console.log(response.data);
            setUserData(response.data.user);
            setEmailData(response.data.email);
            setInvoiceData(response.data.invoice);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleopen();
    }, []);
    const handleModalClose = () => {
        setOpen(false);
        handleopen();
    };
    const [user, setUser] = useState(userData[0]);
    const [temp, setTemp] = useState(emailData[0]);
    const [invoiceTemp, setInvoiceTemp] = useState(invoiceData[0]);

    const handleUserChange = (event, value) => {
        setUser(value);
        setUserEmail(value?.id || ''); // Set the value of JoditEditor based on selected option's value
    };

    const handleTempChange = (event, value) => {
        setTemp(value);
        setValue(value?.value || ''); // Set the value of JoditEditor based on selected option's value
    };
    const handleInvoiceTempChange = (event, value) => {
        setInvoiceTemp(value);
        setValue(value?.value || ''); // Set the value of JoditEditor based on selected option's value
    };
    const handleSend = async () => {
        setLoading(true);
        try {
            const token = window.localStorage.getItem('userServiceToken');
            const response = await adminAxios.post('/send-email', { token, userEmail, value });
            if (response.data === 'success') {
                setOpen(true);
                setLoading(false);
                handleopen();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const [values, setValues] = React.useState('email');

    const handleChange = (event) => {
        setValues(event.target.value);
        setTemp(null); // Reset temp state
        setInvoiceTemp(null); // Reset invoiceTemp state
        setValue('');
    };

    return (
        <MainCard
            content={false}
            title="Manual Eamil"
            secondary={
                <Grid sx={{ display: 'flex', justifyContent: 'end' }}>
                    <FormControl sx={{ display: 'flex', justifyContent: 'end' }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={values}
                            onChange={handleChange}
                        >
                            <FormControlLabel
                                value="email"
                                control={
                                    <Radio
                                        color="default"
                                        sx={{
                                            color: '#76a81b',
                                            '&.Mui-checked': {
                                                color: '#76a81b'
                                            }
                                        }}
                                    />
                                }
                                label="Email Templates"
                                sx={{
                                    color: '#76a81b'
                                }}
                            />
                            <FormControlLabel
                                value="invoice"
                                control={
                                    <Radio
                                        sx={{
                                            color: '#76a81b',
                                            '&.Mui-checked': {
                                                color: '#76a81b'
                                            }
                                        }}
                                    />
                                }
                                label="Invoice Template"
                                sx={{
                                    color: '#76a81b'
                                }}
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            }
        >
            <Container maxWidth="">
                <Grid container spacing={2} sx={{ p: '10px 0px 20px 0px' }}>
                    <Grid item xs={6}>
                        <Autocomplete
                            options={userData}
                            getOptionLabel={(option) => option.first_name}
                            value={user} // Set the selected value explicitly
                            onChange={handleUserChange} // <-- Add this line
                            renderInput={(params) => <TextField {...params} label="Select User" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {values === 'email' ? (
                            <Autocomplete
                                options={emailData}
                                getOptionLabel={(option) => option.name}
                                value={temp}
                                onChange={handleTempChange}
                                inputValue={temp ? temp.name : ''}
                                renderInput={(params) => <TextField {...params} label="Select Email Template" />}
                            />
                        ) : (
                            <Autocomplete
                                options={invoiceData}
                                getOptionLabel={(option) => option.name}
                                value={invoiceTemp}
                                onChange={handleInvoiceTempChange}
                                inputValue={invoiceTemp ? invoiceTemp.name : ''}
                                renderInput={(params) => <TextField {...params} label="Select Invoice Template" />}
                            />
                        )}
                    </Grid>
                </Grid>

                <Grid spacing={2} sx={{ pb: 2 }}>
                    <JoditEditor ref={editor} value={value} onBlur={handleEditorChange} />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Grid item xs={12} md={12} lg={12} style={{ textAlign: 'right', height: '50vh' }}>
                        <Button style={{ background: '#76a81b', border: 'none', color: '#FFFFFF' }} onClick={handleSend}>
                            {loading === true ? <CircularProgress style={{ color: 'white' }} /> : 'Send'}
                        </Button>
                    </Grid>
                </Grid>
            </Container>
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
