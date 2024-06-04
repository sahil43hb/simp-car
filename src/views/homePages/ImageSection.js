import React from 'react';
import { Box, Container, Link, Stack, Typography, Grid } from '@mui/material';
import simpcarApp from 'assets/images/landing/simpcar-app.png';
import appStore from 'assets/images/landing/app-store.png';
import playStore from 'assets/images/landing/play-store.png';

export default function ImageSection() {
    return (
        <>
            <Container maxWidth={false} className="appSecBg">
                <Container sx={{ mb: 6 }} style={{ padding: '0' }}>
                    <Grid container spacing={2} >
                        <Grid item lg={6} md={6} sm={6} sx={{ display: { xs: 'none',sm:'block',md: 'block',lg:'block' } }}>
                            <img src={simpcarApp} alt="simpcar-app" style={{ width: '85%', marginTop: '-100px', float: 'right' }} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12} className='txtCenter'>
                            <Typography variant="h1">In Kürze auch als App</Typography>
                            <Typography variant="body2" sx={{ width:{xs:"90%",md:'58%'}, marginTop: '20px',paddingLeft:{xs:"40px",md:' '}, color: 'white' }}>
                            Demnächst wird im Zuge des Rebranding von simpcar eine App an den Start gehen, damit unseren Kunden die Mobilität von morgen heute schon zu Händen liegt.
                            </Typography>

                            <Grid container spacing={2} style={{ marginTop: '15px' }} className='appsImg'>
                                <Grid item xs={4}>
                                    <img src={appStore} alt="app-store"  style={{ width: '100%',height:"auto"  }}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={playStore} alt="play-store"  style={{ width: '100%',height:"auto" }}/>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} className='txtCenter' sx={{ display: { xs: 'block',sm:'none',md: 'none',lg:'none' } }}>
                            <img src={simpcarApp} alt="simpcar-app" className='mobileImg' style={{ width: '85%', marginTop: '-100px', float: 'right' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </>
    ); 
}
