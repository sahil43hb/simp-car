import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

import Phone from 'assets/images/landing/Phone.png';
import Mail from 'assets/images/landing/Mail.png';
import LOC from 'assets/images/landing/LOC.png';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderSection = () => {
    const headerSX = {
        fontSize: { xs: '2rem', sm: '2rem', md: '2rem', lg: '34px' }
    };

    return (
        <Container >
            <Grid sx={{ mt: { xs: 18, sm: 32, md: 25.75 }, mb: { xs: 12.75, sm: 12.75, md: 12.75 } }}>
                <Grid>
                    <Typography sx={headerSX} variant='h1' fontWeight="700px" textAlign="center">
                        <span style={{ color: '#92bd44' }}>Kontaktcenter</span> für Kunden
                    </Typography>
                    <Typography fontSize="16px" textAlign="center" sx={{ paddingTop: '10px' }}>
                    Unser Kundenservice freut sich auf Ihre Kontaktaufnahme.
                    </Typography>
                </Grid>

                <Grid container spacing={2} sx={{paddingTop:"80px"}}>
                    <Grid item xs={12} sm={4} sx={{textAlign:{xs:"left",sm:"center"},borderRight:{sm:"1px solid #bec2b4",xs:"none"},borderBottom:{xs:"1px solid #bec2b4",sm:"none"}}}>
                        <img src={Phone} alt="not " style={{ width: '40px' }} />
                        <Typography variant='h6' fontSize="20px">Telefon</Typography>
                        <Typography variant='h6' color="#92bd44" fontSize="20px">031 558 25 00</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{textAlign:{xs:"left",sm:"center"},borderRight:{sm:"1px solid #bec2b4",xs:"none"},borderBottom:{xs:"1px solid #bec2b4",sm:"none"}}}>
                    <img src={Mail} alt="not " style={{ width: '40px' }} />
                    <Typography variant='h6' fontSize="20px">Anfrage per E-Mail</Typography>
                    <Typography variant='h6' color="#92bd44" fontSize="20px">info@simpcar.ch</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{textAlign:{xs:"left",sm:"center"}}}>
                    <img src={LOC} alt="not " style={{ width: '40px' }} />
                    <Typography variant='h6' fontSize="20px">
                    Unsere Adresse</Typography>
                    <Typography variant='h6' color="#92bd44" fontSize="20px">Heidmoosweg 15, 3049 Säriswil</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderSection;
