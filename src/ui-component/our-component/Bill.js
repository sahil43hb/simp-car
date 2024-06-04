import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { InputLabel, FormControl, Select, MenuItem, TextField, Typography, Grid, IconButton, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FiChevronRight } from 'react-icons/fi';
// project imports
import Chip from 'ui-component/extended/Chip';
import car from 'assets/images/car.png';

export default function Bill() {
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
            <Grid container spacing={3} style={{  background: '#FAFAFA', borderRadius: '10px',border:"1px solid #979797",marginLeft:"-13px",paddingBottom:"10px" }}>
                
                <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Typography>RE-23033012 </Typography>
                    <Typography>20.03.2023, 11:50 </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4}>
                    <Typography>Period: </Typography>
                    <Typography sx={{color:"#7BB31A"}}>01.04. - 30.04.2023</Typography>
                    
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                <Typography>Total: 500.00</Typography>
                <Typography sx={{color:"#7BB31A"}}>Paid: 500.00</Typography>
                   
                </Grid>
                <Grid item xs={6} sm={6} md={2} lg={2}>
                    <Chip chipcolor="#76A81B" label="Paid" size="small" />
                </Grid>
              
            </Grid>
            <Grid container spacing={3} style={{  background: '#FAFAFA', borderRadius: '10px',border:"1px solid #979797",marginLeft:"-13px" ,marginTop:"20px",paddingBottom:"10px" }}>
            <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography>RE-23033012 </Typography>
            <Typography>20.03.2023, 11:50 </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
            <Typography>Period: </Typography>
            <Typography sx={{color:"#7BB31A"}}>01.04. - 30.04.2023</Typography>
            
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
        <Typography>Total: 500.00</Typography>
        <Typography sx={{color:"#EA4435"}}>Paid: 500.00</Typography>
           
        </Grid>
            <Grid item xs={6} sm={6} md={2} lg={2}>
                <Chip chipcolor="error" label="Open" size="small" />
            </Grid>
           
        </Grid>
        <Grid>
        <Grid xs={2} sm={12} md={12} lg={12}>
        <Button
            
            type="button"
            sx={{
                color: '#76A81B',
                backgroundColor: '#FFFF',
                marginTop: '30px',
                borderRadius: '6px',
                border: '1px solid #76A81B',
                cursor: 'pointer',
                textAlign: 'center',
                width:{xs:"100px",md:"120px"}
            }}
        >
            + Make a Bill
        </Button>
        </Grid>
        </Grid>
            </>
    );
}
