import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import CountUp from 'react-countup';
// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

import line from 'assets/images/landing/Line.png';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const CompletelyCare = () => {
    const headerSX = {
        fontSize: { xs: '21px', sm: '21px', md: '34', lg: '34px' },
        lineHeight: { lg: '40px', md: '38px', sm: '42px', xs: '45px' }
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0 }}>
            <Grid container spacing={2} sx={{ mb: { xs: 13, sm: 18.75, md: 1.75 } }}>
                <Grid item xs={12} sm={6}>
                    <Grid sx={{ padding: { xs: '60px 10px', sm: '130px 0px' } }}>
                        <Typography fontSize="19px" fontWeight="500">
                           
Völlig sorglos
                        </Typography>
                        <Typography variant="h2" fontSize="27px" pt="19px" fontWeight="500">
                        Mit wenigen Klicks zum Neuwagen-Abo
                        </Typography>
                        <Typography fontSize="17px" fontWeight="400" marginTop="12px">
                        Wir verfügen über eine ständig wachsende Auswahl an Fahrzeugen, die über unser Portal innerhalb weniger Minuten online gemietet werden können
                        und ohne Vorlage von Unterlagen.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={2} sx={{ padding: { xs: '30px 20px', sm: '130px 20px' } }}>
                        <Grid item xs={6} style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>
                            <CountUp start={0} end={5} duration={1} />
                            <Typography pt="30px">langjährige Erfahrung</Typography>
                        </Grid>
                        <Grid item xs={6} style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>
                            <CountUp start={0} end={7} duration={2} />
                            <Typography pt="30px">Mitarbeiter</Typography>
                        </Grid>
                        <Grid item xs={6} style={{ fontSize: '50px', paddingTop: '44px', fontWeight: 'bold', textAlign: 'center' }}>
                            <CountUp start={0} end={130} duration={8} />
                            <Typography pt="30px">
                            Abo-Autos</Typography>
                        </Grid>
                        <Grid item xs={6} style={{ paddingTop: '44px', fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>
                            <CountUp start={0} end={24} duration={3} />
                            <Typography paddingTop="30px">Stunden online</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CompletelyCare;
