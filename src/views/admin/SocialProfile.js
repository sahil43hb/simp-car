import * as React from 'react';

// material-ui
import { TextField, Button, Grid } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';

export default function SocialProfile() {
    return (
        <>
            <MainCard content={false} title="Edit Account Details">
                <Grid container spacing={2} style={{ paddingBottom: '30px' }}>
                    <Grid item xs={10} style={{ paddingLeft: '30px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Grid style={{ paddingTop: '30px' }}>
                                    <TextField id="outlined-uncontrolled2" label="First Name" defaultValue="Josephine" fullWidth />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid style={{ paddingTop: '30px' }}>
                                    <TextField id="outlined-uncontrolled2" label="Last Name" defaultValue="Josephine" fullWidth />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid style={{ paddingTop: '35px' }}>
                            <TextField id="outlined-uncontrolled1" label="Email Address" defaultValue="name@example.com" fullWidth />
                        </Grid>

                        <Grid style={{ paddingTop: '20px' }}>
                            <Button
                                style={{ padding: '8px 20px', borderRadius: '5px', background: '#76A81B', color: '#FFFF', border: 'none' }}
                                type="submit"
                            >
                                Change Details
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <MainCard content={false} title="Change Password">
                    <Grid container spacing={2} style={{ height: '100vh' }}>
                        <Grid item xs={10} style={{ paddingLeft: '30px' }}>
                            <Grid style={{ paddingTop: '35px' }}>
                                <TextField id="outlined-uncontrolled1" label="Current password" defaultValue=" " fullWidth />
                            </Grid>
                            <Grid style={{ paddingTop: '35px' }}>
                                <TextField id="outlined-uncontrolled2" label="New Password" defaultValue=" " fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid style={{ paddingTop: '30px' }}>
                                    <TextField id="outlined-uncontrolled2" label="Confirm Password" defaultValue=" " fullWidth />
                                </Grid>
                            </Grid>
                            <Grid style={{ paddingTop: '20px' }}>
                                <Button
                                    style={{
                                        padding: '8px 20px',
                                        borderRadius: '5px',
                                        background: '#76A81B',
                                        color: '#FFFF',
                                        border: 'none'
                                    }}
                                    type="submit"
                                >
                                    Change Password
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </MainCard>
        </>
    );
}
