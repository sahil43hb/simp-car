// import * as React from 'react';

// material-ui
import { Card, Typography, Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { ImPlus } from 'react-icons/im';

import React from 'react';

// assets

import { Link } from 'react-router-dom';
import AddressDetail from './AddressDetail';

export default function Address() {
   
    return (
        <MainCard content={false} title="">
            <Grid container>
                <h3 style={{ padding: '20px' }}>Add Address</h3>
            </Grid>

            <Grid container spacing={2} style={{ paddingLeft: '15px' }}>
                <Grid item xs={11} sm={5.5} lg={4}>
                    <Card style={{ border: '10px solid #DEF1BB' }} sx={{ boxShadow: 5 }}>
                        <Grid style={{ background: 'white', height: '200px', borderRadius: '12px' }}>
                            <Typography variant="h3" style={{ textAlign: 'center', padding: '40px' }}>
                                Add Personal
                            </Typography>
                            <Grid id textAlign="-webkit-center">
                                <Link to="/add-personal">
                                    <Grid
                                        style={{
                                            border: '5px solid #76A81B',
                                            borderRadius: '7px',
                                            width: '50px',
                                            height: '40px',
                                            padding: '5px'
                                        }}
                                    >
                                        <ImPlus style={{ color: '#76A81B', fontSize: '20px' }} />
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={11} sm={5.5} lg={4}>
                    <Card style={{ border: '10px solid #DEF1BB' }} sx={{ boxShadow: 5 }}>
                        <Grid style={{ background: 'white', height: '200px', borderRadius: '12px' }}>
                            <Typography variant="h3" style={{ textAlign: 'center', padding: '40px' }}>
                            Add Business
                            </Typography>
                            <Grid id textAlign="-webkit-center">
                                <Link to="/add-business">
                                    <Grid
                                        style={{
                                            border: '5px solid #76A81B',
                                            borderRadius: '7px',
                                            width: '50px',
                                            height: '40px',
                                            padding: '5px'
                                        }}
                                    >
                                        <ImPlus style={{ color: '#76A81B', fontSize: '20px' }} />
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            <Grid style={{ padding: '20px' }}>
                <AddressDetail />
            </Grid>
        </MainCard>
    );
}
