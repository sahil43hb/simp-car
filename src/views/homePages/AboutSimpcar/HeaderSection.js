import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

import line from "assets/images/landing/Line.png"
import { Box } from '@mui/system';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderSection = () => {
    const headerSX = {
        fontSize: { xs: '27px', sm: '27px', md: '34px', lg: '34px' },
        lineHeight: { lg: '40px', md: '38px', sm: '42px', xs: '45px' },
        paddingLeft:{xs:"0px",sm:"42px"}
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0 }}>
            <Grid sx={{ mt: { xs: 18, sm: 32, md: 26.75 }, mb: { xs: 13, sm: 18.75, md: 14.75 } }}>
               

                <Grid textAlign="center" ><Typography sx={headerSX} fontWeight="bold" textAlign="center"  >Auto-Abo mit<Box  style={{color:"#92bd44"}}>simpcar</Box><img src={line} alt='not' style={{position:"relative",bottom:"20px",right:"0px",width:"100px"}}/></Typography>
                <Typography fontSize="14px" textAlign="center" sx={{paddingTop:"10px"}}>Wir haben einen Strich darunter gemacht!</Typography>
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default HeaderSection;
