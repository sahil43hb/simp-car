import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';

// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

import speedIcon from 'assets/images/landing/speed-iconW.png';
import manualIcon from 'assets/images/landing/manual-iconW.png';
import diselIcon from 'assets/images/landing/diesel-iconW.png';
import ProductSlider from './ProductSlider';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const BannerSection = (props) => {
    const headerSX = {
        fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '24px' },
        lineHeight: { lg: '40px', md: '38px', sm: '42px', xs: '45px' }
    };

    const paddingSX = {
        padding: { xs: '10px', sm: '10px', md: '0px', lg: '0px' }
    };
    
    
    const {speed, transmition, fuel, model, price, perMonth, company} = props;
    
    
    return (
        <Container maxWidth={false} sx={{ backgroundColor: '#F4F5F8', p: {xs:'40px 0 70px 0',sm:"40px 0 200px 0"} }}>
            <Container>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    // sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
                >
                    <Grid item xs={12} md={12}>
                        <Grid container spacing={6}>
                            <Grid item xs={12} lg={3} md={3} sx={paddingSX}>
                                <Grid container spacing={2} direction="column">
                                    <Grid item xs={4}>
                                        <Grid style={{ display: 'flex' }}>
                                            <img src={speedIcon} alt="" style={{ width: '40px' }} />
                                            <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                                {speed}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid style={{ display: 'flex' }}>
                                            <img src={manualIcon} alt="" style={{ width: '40px' }} />
                                            <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                                {transmition}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid style={{ display: 'flex' }}>
                                            <img src={speedIcon} alt="" style={{ width: '40px' }} />
                                            <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                                {fuel}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} lg={7} md={9}>
                                <Typography textAlign={{ xs: 'center' }} variant="body2" sx={headerSX}>
                                    <Card style={{ padding: '20px 0 50px 0' }}>
                                        <Typography
                                            variant="body2"
                                            sx={headerSX}
                                            style={{ textAlign: 'left', paddingLeft: '20px', fontWeight: 'bold' }}
                                        >
                                           {company} {model}
                                        </Typography>
                                        <ProductSlider />
                                    </Card>
                                </Typography>
                            </Grid>

                            <Grid item lg={2} md={3} sm={3} xs={3} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
                                <Typography
                                    textAlign={{ xs: 'center' }}
                                    variant="body2"
                                    style={{ background: '#76A81B', padding: '38px 27px', borderRadius: '100px', color: 'white' }}
                                >
                                    <span style={{ fontSize: '22px' }}> ab</span>
                                    <br />
                                    <span style={{ fontSize: '36px', fontWeight: 'bold' }}>
                                        {price}<span style={{ color: '#fff', fontWeight: 'bold' }}>.-</span>
                                    </span>
                                    <span style={{ fontWeight: 'bold' }}>{perMonth}</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};

export default BannerSection;
