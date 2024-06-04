import React, { useState } from 'react';

// material-ui
import { TextField, Button, Grid } from '@mui/material';
import myAxios from 'utils/myAxios';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Navigate, useNavigate } from 'react-router-dom';
import Modals from '../auth/Modal';
import picture from 'assets/images/picture.png';

export default function AddPersonal() {
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
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = async () => {
        try {
            const response = await myAxios.post('/address/create_personal', {
                token,
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

    console.log(address, countryValue, city, state, postCode, streetNum, employment);
    return (
        <MainCard content={false} title="Add Personal Address">
            <Grid container spacing={2} sx={{ paddingBottom: '40px', height: {xs:' ',sm:"100vh"} }}>
                <Grid item xs={11} sm={11} md={10} lg={10} style={{ paddingLeft: '30px' }}>

                <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Grid style={{ paddingTop: '30px' }}>
                        <TextField
                            id="outlined-uncontrolled2"
                            name="address"
                            label="Street Name"
                            value={address}
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
                                    name="streetNum"
                                    label="Street Number"
                                    value={streetNum}
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
                                    value={postCode}
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
                                    value={city}
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
                                    value={countryValue}
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
                                    value={state}
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
                                    value={employment}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid style={{ paddingTop: '20px',display: "flex",
                    justifyContent: 'end' }}>
                        <Button
                            style={{ padding: '8px 20px', borderRadius: '5px', background: '#76A81B', color: '#FFFF', border: 'none' }}
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
                description="You have Successfully Added Personal Address "
                btnName="Ok"
                url={() => navigate('/address')}
                img={picture}
            />
        </MainCard>
    );
}
