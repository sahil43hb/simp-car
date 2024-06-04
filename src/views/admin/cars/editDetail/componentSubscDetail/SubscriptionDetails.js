import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { InputLabel, FormControl, Select, MenuItem, TextField, Switch , Grid,FormControlLabel  } from '@mui/material';
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
       <Grid container spacing={2} style={{ paddingTop: '20px' }}>
       <Grid item xs={12} sm={3}>
           <FormControl fullWidth>
               <InputLabel id="demo-simple-select-label1">Condition</InputLabel>
               <Select
                   labelId="demo-simple-select-label1"
                   id="demo-simple-select"
                   value={dur}
                   label="Condition"
                   placeholder=" "
                   onChange={handleChange}
               >
                   <MenuItem value={10}>Occasion</MenuItem>
                   <MenuItem value={20}>Occasion</MenuItem>
                   <MenuItem value={30}>Occasion</MenuItem>
               </Select>
           </FormControl>
       </Grid>
       <Grid item xs={12} sm={3}>
       <FormControl fullWidth>
           <InputLabel id="demo-simple-select-label1">Category</InputLabel>
           <Select
               labelId="demo-simple-select-label1"
               id="demo-simple-select"
               value={dur}
               label="Category"
               placeholder=" "
               onChange={handleChange}
           >
               <MenuItem value={10}> Limousine</MenuItem>
               <MenuItem value={20}> Limousine</MenuItem>
               <MenuItem value={30}>Limousine</MenuItem>
           </Select>
       </FormControl>
   </Grid>
   <Grid item xs={12} sm={3}>
   <FormControl fullWidth>
       <InputLabel id="demo-simple-select-label1">Category</InputLabel>
       <Select
           labelId="demo-simple-select-label1"
           id="demo-simple-select"
           value={dur}
           label="Category"
           placeholder=" "
           onChange={handleChange}
       >
           <MenuItem value={10}>Limousine</MenuItem>
           <MenuItem value={20}>Limousine</MenuItem>
           <MenuItem value={30}>Limousine</MenuItem>
       </Select>
   </FormControl>
</Grid>
       <Grid item xs={12} sm={3}>
           <FormControl fullWidth>
               <InputLabel id="demo-simple-select-label2 ">Category</InputLabel>
               <Select
                   labelId="demo-simple-select-label2"
                   id="demo-simple-select"
                   value={pack}
                   label="Category"
                   placeholder="2500 km per month"
                   onChange={handleChangePack}
               >
                   <MenuItem value={10}>Limousine</MenuItem>
                   <MenuItem value={20}>Limousine</MenuItem>
                   <MenuItem value={30}>Limousine</MenuItem>
               </Select>
           </FormControl>
       </Grid>
   </Grid>

            <Grid container spacing={2} style={{ paddingTop: '20px' }}>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label2 ">Brand</InputLabel>
                <Select
                    labelId="demo-simple-select-label2"
                    id="demo-simple-select"
                    value={pack}
                    label="Brand"
                    placeholder="2500 km per month"
                    onChange={handleChangePack}
                >
                    <MenuItem value={10}>Merdeces-Benz</MenuItem>
                    <MenuItem value={20}>Merdeces-Benz</MenuItem>
                    <MenuItem value={30}>Merdeces-Benz</MenuItem>
                </Select>
            </FormControl>
        </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label1">Model</InputLabel>
                        <Select
                            labelId="demo-simple-select-label1"
                            id="demo-simple-select"
                            value={dur}
                            label="Model"
                            placeholder=" "
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>A-Klasse</MenuItem>
                            <MenuItem value={20}>A-Klasse</MenuItem>
                            <MenuItem value={30}>A-Klasse</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

            </Grid>

            <Grid container spacing={2} style={{ paddingTop: '20px' }}>
            
            <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label2 ">Transmission </InputLabel>
                <Select
                    labelId="demo-simple-select-label2"
                    id="demo-simple-select"
                    value={pack}
                    label="Transmission "
                    placeholder="2500 km per month"
                    onChange={handleChangePack}
                >
                    <MenuItem value={10}>Automatic</MenuItem>
                    <MenuItem value={20}>Automatic</MenuItem>
                    <MenuItem value={30}>Automatic</MenuItem>
                </Select>
            </FormControl>
        </Grid>
            <Grid item xs={12} sm={3}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label1">Drive</InputLabel>
                    <Select
                        labelId="demo-simple-select-label1"
                        id="demo-simple-select"
                        value={dur}
                        label="Drive"
                        placeholder=" "
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Front wheel</MenuItem>
                        <MenuItem value={20}>Front wheel</MenuItem>
                        <MenuItem value={30}>Front wheel</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label1">Fuel</InputLabel>
                <Select
                    labelId="demo-simple-select-label1"
                    id="demo-simple-select"
                    value={dur}
                    label="Fuel"
                    placeholder=" "
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Petrol</MenuItem>
                    <MenuItem value={20}>Petrol</MenuItem>
                    <MenuItem value={30}>Petrol</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label1">Color</InputLabel>
            <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select"
                value={dur}
                label="Color"
                placeholder=" "
                onChange={handleChange}
            >
                <MenuItem value={10}>Weiss (White shade)</MenuItem>
                <MenuItem value={20}>Weiss (White shade)</MenuItem>
                <MenuItem value={30}>Weiss (White shade)</MenuItem>
            </Select>
        </FormControl>
     </Grid>
          
        </Grid>

            <Grid container spacing={2} style={{ paddingTop: '20px' }}>
                <Grid item xs={12} sm={3}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker renderInput={(props) => <TextField {...props} fullWidth label="Placing on the market" />} />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={3}>
                <TextField fullWidth  id="outlined-basic" label="Performance (PS/KW)" variant="outlined" defaultValue="136"/>
                </Grid>
                <Grid item xs={12} sm={3}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label2 ">Seat</InputLabel>
                    <Select
                        labelId="demo-simple-select-label2"
                        id="demo-simple-select"
                        value={pack}
                        label="Seat"
                        placeholder="2500 km per month"
                        onChange={handleChangePack}
                    >
                        <MenuItem value={10}>4</MenuItem>
                        <MenuItem value={20}>4</MenuItem>
                        <MenuItem value={30}>4</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} style={{ paddingTop: '20px' }}>
            <FormControlLabel
          value="start"
          control={<Switch color="primary"  defaultChecked size="large"/>}
          label="Trailer hitch"
          labelPlacement="start"
         
        />
            </Grid>
            </Grid>
            <Grid container spacing={2} style={{ paddingTop: '20px' }}>
            <Grid item xs={12} sm={4} style={{ paddingTop: '20px' }}>
            <TextField fullWidth  id="outlined-basic" defaultValue="242.2323.1122.2" label="Root number" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4} style={{ paddingTop: '20px' }}>
            <TextField fullWidth  id="outlined-basic" defaultValue="Au57SA2" label="Type number" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4} style={{ paddingTop: '20px' }}>
            <TextField fullWidth  id="outlined-basic" defaultValue="136" label="Consumption (L/S/T)" variant="outlined" />
            </Grid></Grid>
        </>
    );
}
