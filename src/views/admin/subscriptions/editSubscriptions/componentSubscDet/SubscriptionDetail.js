import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { InputLabel, FormControl, Select, MenuItem, TextField, Typography, Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// project imports
import Chip from 'ui-component/extended/Chip';
import car from 'assets/images/car.png';

export default function SubscriptionDetail() {
    const [dur, setDur] = React.useState('dfdghfgdh');
    const [pack, setPack] = React.useState('dfdghfgdh');

    const handleChange = (event) => {
        setDur(event.target.value);
    };
    const handleChangePack = (event) => {
        setPack(event.target.value);
    };
    return (
       <>
            <Grid container spacing={3} style={{  background: '#FAFAFA', borderRadius: '30px' }}>
                <Grid item xs={6} sm={6} md={1.5} lg={1.5} style={{ padding: '12px' }}>
                    <img src={car} alt="not" style={{ width: '50px' }} />
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4}>
                    <Typography>Mazda 2 </Typography>
                    <Typography>Automat – Benzin</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4.5} lg={4.5}>
                    <Typography>Handling over: 15.06.2022</Typography>
                    <Typography> Return: 17.12.2022</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                    <Chip chipcolor="#76A81B" label="Open" size="small" />
                </Grid>
            </Grid>

            <Grid container spacing={2} style={{ paddingTop: '20px' }}>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label1">Duration</InputLabel>
                        <Select
                            labelId="demo-simple-select-label1"
                            id="demo-simple-select"
                            value={dur}
                            label="Duration"
                            placeholder=" "
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>6 month</MenuItem>
                            <MenuItem value={20}>6 month</MenuItem>
                            <MenuItem value={30}>6 month</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label2 ">Kilometer Package</InputLabel>
                        <Select
                            labelId="demo-simple-select-label2"
                            id="demo-simple-select"
                            value={pack}
                            label="Kilometer Package"
                            placeholder="2500 km per month"
                            onChange={handleChangePack}
                        >
                            <MenuItem value={10}>2500 km per month</MenuItem>
                            <MenuItem value={20}>2500 km per month</MenuItem>
                            <MenuItem value={30}>2500 km per month</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container spacing={2} style={{ paddingTop: '20px' }}>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker renderInput={(props) => <TextField {...props} fullWidth label="Start of Rental" />} />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker renderInput={(props) => <TextField {...props} fullWidth label="Estimated end" />} />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} style={{ paddingTop: '20px' }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker renderInput={(props) => <TextField {...props} fullWidth label="End of Rental" />} />
                </LocalizationProvider>
            </Grid>
        </>
    );
}
