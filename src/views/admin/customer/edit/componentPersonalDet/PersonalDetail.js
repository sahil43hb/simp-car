import * as React from 'react';
import { Grid, TextField } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function PersonalDetail(props) {
    const { user } = props;
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                    id="outlined-basic"
                    value={user === null ? 'N/A' : user.first_name}
                    label="First name"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                    id="outlined-basic"
                    value={user === null ? 'N/A' : user.last_name}
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                    id="outlined-basic"
                    value={user === null ? 'N/A' : user.email}
                    label="E-Mail"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                {/* Use PhoneInput to handle phone number */}
                <PhoneInput
                    country='us'
                    value={user === null ? 'N/A' : user.phone}
                    inputProps={{
                        name: 'phone',
                        required: true,
                    }}
                    inputStyle={{ width: '100%' }}
                />
            </Grid>
            
            {/* Other fields go here */}
        </Grid>
    );
}
