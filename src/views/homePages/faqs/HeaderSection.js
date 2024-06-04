import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

import line from "assets/images/landing/Line.png"

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderSection = () => {
    const headerSX = {
        fontSize: { xs: '2rem', sm: '2rem', md: '2rem', lg: '34px' },
        lineHeight: { lg: '40px', md: '38px', sm: '42px', xs: '45px' }
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0 }}>
            <Grid sx={{ mt: { xs: 18, sm: 32, md: 25.75 }, mb: { xs: 13, sm: 12.75, md: 12.75 } }}>
               

                <Grid ><Typography sx={headerSX} fontWeight="bold" textAlign="center" >Formular absenden <span style={{color:"#92bd44"}}>Fragen</span> 
                von unseren Kunden </Typography>
                <Typography fontSize="14px" textAlign="center" sx={{paddingTop:"10px"}}>Hier finden Sie eine Zusammenstellung der wichtigsten Informationen.</Typography>
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default HeaderSection;
