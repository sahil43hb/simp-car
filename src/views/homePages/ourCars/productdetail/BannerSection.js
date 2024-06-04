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
        fontSize: { xs: '2rem', sm: '2rem', md: '2rem', lg: '2.5rem' },
        lineHeight: { lg: '40px', md: '38px', sm: '42px', xs: '45px' }
    };

    const paddingSX = {
        padding: { xs: '0px', sm: '10px', md: '0px', lg: '0px' },
    };
    const {speed, transmition, fuel, model, price, perMonth, company} = props;

    return (
        <Container sx={{ p: 0 }}>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: { xs: 10, sm: 6, md: 7 }, mb: { xs: 2.5, md: 17 } }}
            >
            <Typography variant="body2" sx={headerSX} fontWeight="bold" textAlign="center" >
            {company}<span style={{color:"#92bd44"}}> {model}</span>im Auto-Abo
        </Typography>
                <Grid item xs={12} md={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} lg={4} md={4} sx={paddingSX}>
                           

                            <Grid container spacing={2} sx={{paddingTop:"20px",paddingLeft:{xs:"20px",sm:"0px"}}}>
                                <Grid item xs={6} sm={4}>
                                    <Grid style={{ display: 'flex' }}>
                                        <img src={speedIcon} alt="" style={{ width: '40px' }} />
                                        <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                            {speed} 
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <Grid style={{ display: 'flex' }}>
                                        <img src={manualIcon} alt="" style={{ width: '40px' }} />
                                        <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                            {transmition}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <Grid style={{ display: 'flex' }}>
                                        <img src={speedIcon} alt="" style={{ width: '40px' }} />
                                        <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                            {fuel}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} lg={6} md={6}>
                            <Typography textAlign={{ xs: 'center' }} variant="body2" sx={headerSX}>
                             <ProductSlider />
                            </Typography>
                        </Grid>

                        <Grid item lg={2} md={2} sm={3} xs={3} 	sx={{ display: { xs: 'none', sm: 'none' ,md:'block', lg:'block' } }}>
ProductSliderpicture                            <Typography
                                textAlign={{ xs: 'center' }}
                                variant="body2"
                                style={{ background: 'white', padding: '38px 27px', borderRadius: '100px' }}
                            >
                                <span style={{ fontSize: '22px' }}> ab</span>
                                <br />
                                <span style={{ fontSize: '36px', fontWeight: 'bold' }}>
                                    {price}<span style={{ color: '#92bd44', fontWeight: 'bold' }}>.-</span>
                                </span>
                                <span style={{ fontWeight: 'bold' }}>{perMonth}</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BannerSection;
