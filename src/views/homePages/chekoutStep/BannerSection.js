import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import carImg from 'assets/images/landing/mask-bmw.png';
import speedIcon from 'assets/images/landing/speed-iconW.png';
import manualIcon from 'assets/images/landing/manual-iconW.png';
import diselIcon from 'assets/images/landing/diesel-iconW.png';
import { padding } from '@mui/system';

export default function BannerSection(props) {
    const {company, model, power, transmission, fuel, price} = props;
    return (
        <Container>
            <Grid style={{ padding: '0' }}>
                <Grid container spacing={2} style={{ padding: '15px 15px' }}>
                    <Grid item xs={12} sm={12} lg={4}>
                        <img
                            src={carImg}
                            alt=""
                            style={{ width: '100%', objectFit: 'contain', objectPosition: 'center', height: '100%' }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} lg={8} style={{ marginTop: '20px' }}>
                        <Grid style={{ display: 'flex' }}>
                            <Typography variant="body2" style={{ fontSize: '18px', marginTop: '20px', paddingLeft: '15px' }}>
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
                            Neu
                            </Typography>
                        </Grid>

                        <Grid container spacing={2} sx={{ padding: { xs: 1,lg:0}  }}>
                            <Grid item>
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

                        <Grid container spacing={2} sx={{ padding: { xs: 1,lg:0}  }}>
                            <Grid item>
                                <Grid  >
                                <Typography variant="body2" style={{ fontSize: '14px', margin: '12px 0 0 7px' }}>
                                Minimale Mietdauer
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '0px 0 0 7px' }}>
                                    36 Monate
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid  >
                                <Typography variant="body2" style={{ fontSize: '14px', margin: '12px 0 0 7px' }}>
                                 
Kilometerpaket
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '0px 0 0 7px' }}>
                                        
850 km pro Monat
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid  >
                                <Typography variant="body2" style={{ fontSize: '14px', margin: '12px 0 0 7px' }}>
                                     
Mietpreis
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '0px 0 0 7px' }}>
                                        CHF {price}.00 pro Monat</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
