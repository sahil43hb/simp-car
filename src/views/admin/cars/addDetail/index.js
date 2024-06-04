import React, { useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
// material-ui
import { TextField, Grid, Button, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
// project imports

export default function SubscriptionDetail() {
    const token = window.localStorage.getItem('userServiceToken');
    const [name, setName] = useState();
    const [model, setModel] = useState();
    const [engine, setEngine] = useState();
    const [power, setPower] = useState();
    const [drive, setDrive] = useState();
    const [fuel, setFuel] = useState();
    const [transmission, setTransmission] = useState();
    const [seat, setSeat] = useState();
    const [consumption, setConsumption] = useState();
    const [carbon, setCarbon] = useState();
    const [price, setPrice] = useState();
    const [company, setCompany] = useState([]);
    const [type, setType] = useState([]);
    const [energy, setEnergy] = useState();
    const [description, setDescription] = useState();
    const [companyValue, setCompanyValue] = useState();
    const [carType, setCarType] = useState();
    const handleSelectCompany = (event) => {
        setCompanyValue(event?.target.value);
    };
    const handleSelectType = (event) => {
        setCarType(event?.target.value);
    };
  
    const navigate = useNavigate();
    const handleCompany = async () => {
        try {
            const response = await adminAxios.get('/car-company', { token });
            setCompany(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const handleType = async () => {
        try {
            const response = await adminAxios.get('/car-type', { token });
            setType(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleCompany();
        handleType();
    }, []);
    const [id,setId] = useState();
    const handleStore = async () => {
        try {
            const response = await adminAxios.post('/add-car', { 
                token,
                name,
                model,
                engine,
                power,
                drive,
                fuel,
                transmission,
                seat,
                consumption,
                carbon,
                price,
                companyValue,
                energy,
                description,
                carType
             });
            
            navigate(`/admin/car/AddCar/furnishing/${response.data}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <MainCard container content={false} title="Add Car Detail">
                <SubCard content={false}>
                    <Grid container spacing={2} style={{ padding: '15px 15px' }}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                name="Car Name"
                                defaultValue={name}
                                onChange={(event) => setName(event.target.value)}
                                label="First Name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Car Model"
                                defaultValue={model}
                                onChange={(event) => setModel(event.target.value)}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} lg={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="filled-required"
                                        label="Car Engine"
                                        defaultValue={engine}
                                        onChange={(event) => setEngine(event.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="filled-required"
                                        label="Car Power"
                                        defaultValue={power}
                                        onChange={(event) => setPower(event.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6} lg={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="filled-required"
                                        label="Car Drive"
                                        defaultValue={drive}
                                        onChange={(event) => setDrive(event.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="filled-required"
                                        label="Car Fuel"
                                        defaultValue={fuel}
                                        onChange={(event) => setFuel(event.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Car Transmission"
                                defaultValue={transmission}
                                onChange={(event) => setTransmission(event.target.value)}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Car Seat"
                                defaultValue={seat}
                                onChange={(event) => setSeat(event.target.value)}
                                variant="outlined"
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#8D8E93'
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Car Consumption"
                                defaultValue={consumption}
                                onChange={(event) => setConsumption(event.target.value)}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Car Carbon"
                                defaultValue={carbon}
                                onChange={(event) => setCarbon(event.target.value)}
                                variant="outlined"
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#8D8E93'
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Car Price"
                                defaultValue={price}
                                onChange={(event) => setPrice(event.target.value)}
                                variant="outlined"
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#8D8E93'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Car Energy"
                                defaultValue={energy}
                                onChange={(event) => setEnergy(event.target.value)}
                                variant="outlined"
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#8D8E93'
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select Car Company*"
                                    value={companyValue}
                                    fullWidth
                                    onChange={handleSelectCompany}
                                >
                                    {company.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        <Grid item xs={6}>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select Car Type*"
                                    value={carType}
                                    fullWidth
                                    onChange={handleSelectType}
                                >
                                    {type.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        <Grid item xs={12} sm={12} lg={12}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Car Description"
                                defaultValue={description}
                                rows="3"
                                onChange={(event) => setDescription(event.target.value)}
                                variant="outlined"
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#8D8E93'
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container sx={{justifyContent:"end",padding:"20px"}}>
                        <Grid >
                            <AnimateButton>
                                <Button variant="contained" size="large" onClick={handleStore}>
                                    Continue
                                </Button>
                            </AnimateButton>
                        </Grid>
                    </Grid>
                </SubCard>
            </MainCard>
        </>
    );
}
