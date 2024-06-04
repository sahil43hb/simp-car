import * as React from 'react';
import PropTypes from 'prop-types';
// material-ui
import { Box, Checkbox, TextField, Typography, Grid, Button } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import adminAxios from 'utils/adminAxios';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function PriceConfig() {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(''); // Initial value for Price Per kiloMeter input
    const [discount, setDiscount] = React.useState(''); // Initial value for Discount percentage input

    const handleChangePrice = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    };

    const handleChangeDiscount = (event) => {
        const discountValue = event.target.value;
        setDiscount(discountValue);
    };
    const token = window.localStorage.getItem('userServiceToken');
    const url = window.location.pathname;
    const id = parseInt(url.split('/').pop(), 10);
    const handleStore = async () => {
        try {
            const response = await adminAxios.post(`/add-car-price/${id}`, { token, value, discount });
            navigate(`/admin/car/AddCar/image/${response.data}`);
        } catch (error) {
            console.error(error);
        }
    };

    const data = [
        {
            month: '3 Months',
            value1: 829 * value * (1 - discount / 100),
            value2: 899 * value * (1 - discount / 100),
            value3: 1029 * value * (1 - discount / 100),
            value4: 1199 * value * (1 - discount / 100)
        },
        {
            month: '6 Months',
            value1: 749 * value * (1 - discount / 100),
            value2: 809 * value * (1 - discount / 100),
            value3: 939 * value * (1 - discount / 100),
            value4: 1199 * value * (1 - discount / 100)
        },
        {
            month: '12 Months',
            value1: 829 * value * (1 - discount / 100),
            value2: 719 * value * (1 - discount / 100),
            value3: 1029 * value * (1 - discount / 100),
            value4: 1199 * value * (1 - discount / 100)
        },
        {
            month: '24 Months',
            value1: 599 * value * (1 - discount / 100),
            value2: 699 * value * (1 - discount / 100),
            value3: 709 * value * (1 - discount / 100),
            value4: 899 * value * (1 - discount / 100)
        },
        {
            month: '36 Months',
            value1: 569 * value * (1 - discount / 100),
            value2: 899 * value * (1 - discount / 100),
            value3: 1029 * value * (1 - discount / 100),
            value4: 1199 * value * (1 - discount / 100)
        }
    ];

    return (
        <>
            <MainCard container content={false} title="Add Car Pricing">
                <SubCard content={false}>
                    <Grid container spacing={2} style={{ paddingTop: '20px' }}>
                        <Grid item xs={12} sm={6} style={{ marginBottom: '5px' }}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Price Per kiloMeter"
                                variant="outlined"
                                defaultValue={value}
                                onChange={handleChangePrice}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} style={{ marginBottom: '5px' }}>
                            <TextField
                                fullWidth
                                id="discount"
                                label="Discount Percentage"
                                variant="outlined"
                                defaultValue={discount}
                                onChange={handleChangeDiscount}
                            />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Typography variant="h3" sx={{ p: 3 }}>
                            Price Configuration
                        </Typography>
                    </Grid>
                    <Grid container spacing={2} sx={{ p: 1.5 }}>
                        <Grid item xs={12} sm={2} md={2} lg={2}>
                            <Typography variant="h3">Months</Typography>
                        </Grid>
                        <Grid item xs={6} sm={2.5} md={2.5} lg={2.5}>
                            <Typography variant="h3">850km</Typography>
                        </Grid>
                        <Grid item xs={6} sm={2.5} md={2.5} lg={2.5}>
                            <Typography variant="h3">1250km</Typography>
                        </Grid>
                        <Grid item xs={6} sm={2.5} md={2.5} lg={2.5}>
                            <Typography variant="h3">1850km</Typography>
                        </Grid>
                        <Grid item xs={6} sm={2.5} md={2.5} lg={2.5}>
                            <Typography variant="h3">3250km</Typography>
                        </Grid>
                    </Grid>
                    <hr />

                    {data.map((data) => (
                        <>
                            <Grid container spacing={2} sx={{ pt: '20px', pl: '15px' }}>
                                <Grid item xs={12} sm={2} md={2} lg={2}>
                                    <Typography variant="h4">{data.month}</Typography>
                                </Grid>

                                <Grid item xs={6} sm={2.5} md={2.5} lg={2.5}>
                                    <Grid container spacing={2} style={{ padding: '5px' }}>
                                        <Grid item xs={7} style={{ padding: '0px' }} border="1px solid #C4C4C4">
                                            <Typography variant="h4" padding="10px 5px">
                                                {data.value1.toFixed('0')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} style={{ padding: '0px' }} border="1px solid #C4C4C4">
                                            <Checkbox defaultChecked />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sm={2.5} md={2.5} lg={2.5}>
                                    <Grid container spacing={2} style={{ padding: '5px' }}>
                                        <Grid item xs={7} style={{ padding: '0px' }} border="1px solid #C4C4C4">
                                            <Typography variant="h4" padding="10px 5px">
                                                {data.value2.toFixed('0')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} style={{ padding: '0px' }} border="1px solid #C4C4C4">
                                            <Checkbox defaultChecked />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sm={2.5} md={2.5} lg={2.5}>
                                    <Grid container spacing={2} style={{ padding: '5px' }}>
                                        <Grid item xs={7} style={{ padding: '0px' }} border="1px solid #C4C4C4">
                                            <Typography variant="h4" padding="10px 5px">
                                                {data.value3.toFixed('0')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} style={{ padding: '0px' }} border="1px solid #C4C4C4">
                                            <Checkbox defaultChecked />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} sm={2.5} md={2.5} lg={2.5}>
                                    <Grid container spacing={2} style={{ padding: '5px' }}>
                                        <Grid item xs={7} style={{ padding: '0px 0px' }} border="1px solid #C4C4C4">
                                            <Typography variant="h4" padding="10px 5px">
                                                {data.value4.toFixed('0')}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} style={{ padding: '0px' }} border="1px solid #C4C4C4">
                                            <Checkbox defaultChecked />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <hr />
                        </>
                    ))}
                    <Grid container sx={{ justifyContent: 'space-between', padding: '20px' }}>
                        <Grid>
                            <AnimateButton>
                                <Button variant="contained" size="large" onClick={() => navigate(`/admin/car/AddCar/price/${id}`)}>
                                    Back
                                </Button>
                            </AnimateButton>
                        </Grid>
                        <Grid>
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
