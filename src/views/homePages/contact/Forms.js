import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import HeaderSection from './HeaderSection';

// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

import Phone from 'assets/images/landing/Phone.png';
import Mail from 'assets/images/landing/Mail.png';
import LOC from 'assets/images/landing/LOC.png';
import TabsComp from './Tabs/Tabs';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const Forms = () => {
    const headerSX = {
        fontSize: { xs: '2rem', sm: '2rem', md: '2rem', lg: '34px' }
    };

    return (
        <Grid sx={{ mt: { xs: -7.75, sm: -7.75, md: -7.75 }, mb: { xs: 0, sm: 12.75, md: 29.75 } }}>
            <TabsComp />
        </Grid>
    );
};

export default Forms;
