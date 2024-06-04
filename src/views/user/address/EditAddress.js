import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, CircularProgress } from '@mui/material';
import myAxios from 'utils/myAxios';
import MainCard from 'ui-component/cards/MainCard';
import { Navigate, useNavigate } from 'react-router-dom';
import Modals from '../auth/Modal';
import picture from 'assets/images/picture.png';

export default function EditAddress() {
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState('');
    const [countryValue, setCountryValue] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postCode, setPostCode] = useState('');
    const [streetNum, setStreetNum] = useState('');
    const [employment, setEmployment] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'address':
                setAddress(value);
                break;
            case 'country':
                setCountryValue(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'state':
                setState(value);
                break;
            case 'postCode':
                setPostCode(value);
                break;
            case 'streetNum':
                setStreetNum(value);
                break;
            case 'employment':
                setEmployment(value);
                break;
            default:
                break;
        }
    };

    const token = window.localStorage.getItem('adminServiceToken');
    const url = window.location.pathname;
    const id = parseInt(url.split('/').pop(), 10);
    const [response, setResponse] = useState(null);
    const [method, setMethod] = useState(null);
    const handleAddress = async () => {
        try {
            const editData = await myAxios.post(`/address/show/${id}`, { token });
            setResponse(editData.data);
            setLoading(false);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleAddress();
    }, []);
    useEffect(() => {
        if (response) {
            setAddress(response.street_name);
            setCountryValue(response.nationality);
            setCity(response.town);
            setState(response.residence_permit);
            setPostCode(response.post_code);
            setStreetNum(response.street_number);
            setEmployment(response.employment_status);
            setMethod(response.address_type);
            setLoading(false);
        }
    }, [response]);
    console.log(method);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const handleOpen = async () => {
        try {
            const response = await myAxios.post(`/address/update/${id}`, {
                token,
                method,
                address,
                streetNum,
                countryValue,
                state,
                city,
                employment,
                postCode
            });
            if (response.data === 'success') {
                setOpen(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <MainCard content={false} title="Edit Address">
            <Grid container spacing={2} sx={{ height: {xs:' ',md:"100vh" }}}>
                <Grid item xs={11} sm={11} md={10} lg={10} style={{ paddingLeft: '30px' }}>
                    <Grid style={{ paddingTop: '35px' }}>
                        <TextField
                            id="outlined-uncontrolled1"
                            name="address"
                            label="Street Name"
                            defaultValue={response.street_name}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Grid style={{ paddingTop: '30px' }}>
                                <TextField
                                    id="outlined-uncontrolled2"
                                    name="streetNum"
                                    label="Street Number"
                                    defaultValue={response.street_number}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid style={{ paddingTop: '30px' }}>
                                <TextField
                                    id="outlined-uncontrolled3"
                                    name="postCode"
                                    label="Zip Code"
                                    defaultValue={response.post_code}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Grid style={{ paddingTop: '30px' }}>
                                <TextField
                                    id="outlined-uncontrolled2"
                                    name="city"
                                    label="Locality"
                                    defaultValue={response.town}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid style={{ paddingTop: '30px' }}>
                                <TextField
                                    id="outlined-uncontrolled3"
                                    name="country"
                                    label="Nationality"
                                    defaultValue={response.nationality}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Grid style={{ paddingTop: '30px' }}>
                                <TextField
                                    id="outlined-uncontrolled4"
                                    name="state"
                                    label="Residence Permit"
                                    defaultValue={response.residence_permit}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid style={{ paddingTop: '30px' }}>
                                <TextField
                                    id="outlined-uncontrolled5"
                                    name="employment"
                                    label="Employment"
                                    defaultValue={response.employment_status}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid sx={{ padding: '20px 0px' ,display: "flex",
                    justifyContent: "end"}}>
                        <Button
                            style={{
                                padding: '8px 20px',
                                borderRadius: '5px',
                                background: '#76A81B',
                                color: '#FFFF',
                                border: 'none'
                            }}
                            type="submit"
                            onClick={handleOpen}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Modals
                open={open}
                handleClose={handleClose}
                title={<h3>SuccessFull</h3>}
                description={`You have Successfully updated ${response.address_type === 'home' ? 'Personal' : 'Business'} Address`} 
                btnName="Ok"
                url={() => navigate('/address')}
                img={picture}
            />
        </MainCard>
    );
}
