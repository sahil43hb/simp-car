import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import carImg from 'assets/images/landing/mask-bmw.png';
import speedIcon from 'assets/images/landing/speed-iconW.png';
import manualIcon from 'assets/images/landing/manual-iconW.png';
import diselIcon from 'assets/images/landing/diesel-iconW.png';


export default function BannerSection(props) {
    const {company, model, power, transmission, fuel, price, kiloMeter, monthly, calculatedPrice} = props;
    return (
        <Container maxWidth={false} style={{backgroundColor:'#F4F5F8',padding:'30px 0', }}>

        <Container >
            <Grid style={{ padding: '0' }}>
                <Grid>
                    <Typography variant="body2" sx={{ fontSize: '18px',  textAlign: {xs:'left',sm:"center"},fontWeight:'bold' }}>
                        Book online car subscription
                    </Typography>
                </Grid>
                <Grid container spacing={2} sx={{ p: {xs:'0px',sm:"15px"} }}>
                    <Grid item xs={12} sm={12} lg={8} sx={{ marginTop: {xs:'0px',sm:"20px"} }}>
                        <Grid style={{ display: 'flex' }}>
                            <Typography variant="body2" style={{ fontSize: '18px', marginTop: '20px' }}>
                                {company} {model}
                            </Typography>

                            <Typography
                                variant="body2"
                                style={{
                                    fontSize: '12px',
                                    marginTop: '20px',
                                    padding: '5px 25px',
                                    background: '#ECF3DF',
                                    border: '1px solid #92BD44',
                                    borderRadius: '40px',
                                    color: '#92BD44',
                                    margin: '17px 0 15px 40px'
                                }}
                            >
                                New Car
                            </Typography>
                        </Grid>

                        <Grid container spacing={2} sx={{ padding: { xs: 0 } }}>
                            <Grid item >
                                <Grid style={{ display: 'flex' }}>
                                    <img src={speedIcon} alt="" style={{ width: '40px' }} />
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                        {power} PS
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid style={{ display: 'flex' }}>
                                    <img src={manualIcon} alt="" style={{ width: '40px' }} />
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                        {transmission}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid style={{ display: 'flex' }}>
                                    <img src={diselIcon} alt="" style={{ width: '40px' }} />
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                        {fuel}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ padding: { xs: 0, lg: 0 } }}>
                            <Grid item>
                                <Grid>
                                    <Typography variant="body2" sx={{ fontSize: '14px', m: '12px 0 0 7px' }}>
                                        Minimum Rental Period
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '0px 0 0 7px', color: '#76A81B' }}>
                                        {monthly} Months
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid>
                                    <Typography variant="body2" sx={{ fontSize: '14px', m: {xs:'0 0 0 7px',sm:'12px 0 0 7px'} }}>
                                        Mileage Package
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '0px 0 0 7px', color: '#76A81B' }}>
                                        {kiloMeter} km per Month
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid>
                                    <Typography variant="body2"  sx={{ fontSize: '14px', m: {xs:'0 0 0 7px',sm:'12px 0 0 7px'} }}>
                                        Rental Price
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '0px 0 0 7px', color: '#76A81B' }}>
                                        CHF {calculatedPrice} pro Monat
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} lg={4}>
                        <img
                            src={carImg}
                            alt=""
                            style={{ width: '100%', objectFit: 'contain', objectPosition: 'center', height: '100%' }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        </Container>

    );
}
