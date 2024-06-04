import * as React from 'react';
import { Grid, TextField } from '@mui/material';

export default function PersonalDetail(props) {
    const { address } = props;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                    id="outlined-basic"
                    value={address === null ? 'N/A' : address.street_name}
                    label="Street Name"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                    id="outlined-basic"
                    value={address === null ? 'N/A' : address.street_number}
                    label="Street Number"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                    id="outlined-basic"
                    value={address === null ? 'N/A' : address.post_code}
                    label="Post Code"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                    id="outlined-basic"
                    value={address === null ? 'N/A' : address.town}
                    label="Town"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                    id="outlined-basic"
                    value={address === null ? 'N/A' : address.address_type}
                    label="Gender"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
                    id="outlined-basic"
                    value={address === null ? 'N/A' : address.date_of_birth}
                    label="Date of birth"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                    id="outlined-basic"
                    value={address === null ? 'N/A' : address.nationality}
                    label="Nationality"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
    );
}
