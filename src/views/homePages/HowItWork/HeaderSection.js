import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

import How from "assets/images/landing/How.png"


// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderSection = () => {
   
const headerSX = {
        fontSize: { xs: '21px', sm: '21px', md: '34', lg: '34px' },
        lineHeight: { lg: '40px', md: '38px', sm: '42px', xs: '45px' }
    };
    

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0 }}>
            <Grid
               
               
                sx={{ mt: { xs: 18, sm: 32, md: 18.75 },}}
            >
            <Grid ><Typography sx={headerSX} fontWeight="bold" textAlign="center" >Auto-Abo Schweiz</Typography>
            <Typography fontSize="14px" textAlign="center" sx={{paddingTop:"10px"}}>
            Abonnieren statt leasen oder kaufen</Typography>
            </Grid>
            <Grid sx={{paddingTop:"30px"}}><img src={How} alt='not'/></Grid>
           
            </Grid>
        </Container>
    );
};

export default HeaderSection;
