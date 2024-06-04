// material-ui
import { Button, Grid, TextField, CircularProgress } from '@mui/material';
import adminAxios from 'utils/adminAxios';
// project imports
import { gridSpacing } from 'store/constant';

// assets
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useState, useEffect } from 'react';

// ==============================|| PROFILE 2 - USER PROFILE ||============================== //
const UserProfile = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [postCode, setPostCode] = useState();
    const [reg, setReg] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [address, setAddress] = useState();
    const token = window.localStorage.getItem('userServiceToken');
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/company-settings', { token });
            setData(response.data);
            setName(response.data.name);
            setCity(response.data.city);
            setEmail(response.data.email);
            setCity(response.data.city);
            setPhone(response.data.phone);
            setPostCode(response.data.postCode);
            setReg(response.data.reg);
            setState(response.data.state);
            setCountry(response.data.country);
            setAddress(response.data.address);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        handleOpen();
        setLoading(true)
    }, []);

    const handleUpdate = async () => {
        setLoading(true);
        try {
            const response = await adminAxios.post('/update-settings', {
                token,
                name,
                city,
                email,
                phone,
                postCode,
                reg,
                state,
                country,
                address
            });
            if (response.data === 'success') {
                setLoading(false);
                handleOpen();
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (!data) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                {loading ? <CircularProgress /> : <p>Error fetching data.</p>}
            </div>
        );
    }
    

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Company name" defaultValue={name} onChange={(event) => setName(event.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="City" defaultValue={city} onChange={(event) => setCity(event.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" defaultValue={email} onChange={(event) => setEmail(event.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Telephone" defaultValue={phone} onChange={(event) => setPhone(event.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Zip code" defaultValue={postCode} onChange={(event) => setPostCode(event.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Company registration number"
                    defaultValue={reg}
                    onChange={(event) => setReg(event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="State" defaultValue={state} onChange={(event) => setState(event.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Country" defaultValue={country} onChange={(event) => setCountry(event.target.value)} />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField fullWidth label="Address" defaultValue={address} onChange={(event) => setAddress(event.target.value)} />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'end' }}>
                <AnimateButton>
                    <Button variant="contained" size="large" onClick={handleUpdate}>
                        {loading === true ? <CircularProgress style={{ color: 'white', width: '30px', height: '30px' }} /> : 'Update'}
                    </Button>
                </AnimateButton>
            </Grid>
        </Grid>
    );
};

export default UserProfile;
