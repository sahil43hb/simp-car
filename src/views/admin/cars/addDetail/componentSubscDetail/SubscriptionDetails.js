import React, { useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
// material-ui
import { TextField,  Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AnimateButton from 'ui-component/extended/AnimateButton';

// project imports

export default function SubscriptionDetail(props) {
    const token = window.localStorage.getItem('userServiceToken');

    const [role, setRole] = useState([]);
    const [currency, setCurrency] = useState();
    const handleSelectChange = (event) => {
        setCurrency(event?.target.value);
    };
    const { name, model, engine, power, drive, fuel, transmission, seat, consumption, carbon, price, company, type, energy, description } =
        props;

    const handleInput = (
        newName,
        newModel,
        newEngine,
        newPower,
        newDrive,
        newFuel,
        newTransmission,
        newSeat,
        newConsumption,
        newCarbon,
        newPrice,
        newCompany,
        newType,
        newEnergy,
        newDescription
    ) => {
        name(newName);
        model(newModel);
        engine(newEngine);
        power(newPower);
        drive(newDrive);
        fuel(newFuel);
        transmission(newTransmission);
        seat(newSeat);
        consumption(newConsumption);
        carbon(newCarbon);
        price(newPrice);
        company(newCompany);
        type(newType);
        energy(newEnergy);
        description(newDescription);
    };
    const navigate = useNavigate();
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

    return (
        <>
            <Grid container spacing={2} style={{ padding: '15px 15px' }}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        required
                        id="filled-required"
                        name="Car Name"
                        defaultValue={name}
                        onChange={(event) => name(event.target.value)}
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
                        onChange={(event) => model(event.target.value)}
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
                                onChange={(event) => engine(event.target.value)}
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
                                onChange={(event) => power(event.target.value)}
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
                                onChange={(event) => drive(event.target.value)}
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
                                onChange={(event) => fuel(event.target.value)}
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
                        onChange={(event) => transmission(event.target.value)}
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
                        onChange={(event) => seat(event.target.value)}
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
                        onChange={(event) => consumption(event.target.value)}
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
                        onChange={(event) => carbon(event.target.value)}
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
                        onChange={(event) => price(event.target.value)}
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
                        onChange={(event) => energy(event.target.value)}
                        variant="outlined"
                        style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#8D8E93'
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <TextField
                        fullWidth
                        required
                        id="filled-required"
                        label="Car Description"
                        defaultValue={description}
                        rows="3"
                        onChange={(event) => description(event.target.value)}
                        variant="outlined"
                        style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#8D8E93'
                        }}
                    />
                </Grid>
              
            </Grid>
            <Grid textAlign='right'>
                <AnimateButton>
                    <Button variant="contained" size="large"  onClick={() => navigate('/admin/car/AddCar/furnishing')} >
                        Continue
                    </Button>
                </AnimateButton>
                </Grid>
        </>
    );
}
