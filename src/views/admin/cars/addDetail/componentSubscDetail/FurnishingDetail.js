import React, { useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
// material-ui
import { TextField, Grid, Button, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import Typography from 'themes/typography';
import Chip from 'ui-component/extended/Chip';
// project imports

export default function SubscriptionDetail(props) {
    const token = window.localStorage.getItem('userServiceToken');

    const [furnishing, setFurnishing] = useState([]);
    const [currency, setCurrency] = useState();
    const [value, setValue] = useState([]);
    const handleSelectChange = (event) => {
        const newValue = event?.target.value;
        setCurrency(newValue);
        setValue((prevValue) => (prevValue ? `${prevValue} ${newValue},` : newValue));
    };
    
    
    
    const navigate = useNavigate();
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/furnishing', { token });
            setFurnishing(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        handleOpen();
    }, []);
    const handleStore = async () => {
        const url = window.location.pathname;
        const id = parseInt(url.split('/').pop(), 10);
        try {
            const response = await adminAxios.post(`/add-car-furnishing/${id}`, { token, value });
            navigate(`/admin/car/AddCar/price/${response.data}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <MainCard container content={false} title="Add Car Furnishing">
                <SubCard content={false}>
                    <Grid container spacing={2} style={{ padding: '15px 15px',justifyContent:"center" }}>
                        <Grid item xs={6}>
                        <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select Furnishing*"
                                    value={currency}
                                    fullWidth
                                    onChange={handleSelectChange}
                                >
                                    {furnishing.map((option) => (
                                        <MenuItem key={option.id} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                        </Grid>
                     
                    </Grid>
                    <Grid item sx={{pl:7}}>
                            <Chip label={value}/>
                        </Grid>
                    <Grid container sx={{justifyContent:"space-between",padding:"20px"}}>
                        <Grid>
                            <AnimateButton>
                                <Button variant="contained" size="large" onClick={() => navigate('/admin/car/AddCar')}>
                                    Back
                                </Button>
                            </AnimateButton>
                        </Grid>
                        <Grid >
                            <AnimateButton>
                                <Button variant="contained" size="large" onClick={handleStore}>
                                    Continue
                                </Button>
                            </AnimateButton>
                        </Grid>
                    </Grid>
                </SubCard>
            </MainCard>
        </>
    );
}
