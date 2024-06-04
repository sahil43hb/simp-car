import React, { useState } from 'react';

// material-ui
import { HelpCenter } from '@mui/icons-material';
import { FormControlLabel, Grid, Typography, Card, Checkbox, Radio, TextField, RadioGroup } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import ErrorIcon from '@mui/icons-material/Error';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { fontWeight } from '@mui/system';


// ==============================|| FORM WIZARD - BASIC  ||============================== //

export default function AddressForm(props) {
    const [valueBasic, setValueBasic] = React.useState(new Date());
    const { company, model, price, inputDate, inputMethod} = props;

    const [date1, setDate1] = useState(new Date());
    const date = date1.getDate();
    const month = date1.getMonth() + 1;
    const year = date1.getFullYear();
    const fulldate = `${month < 10 ? `0${month}` : `${month}`}${'/'}${date}${'/'}${year}`;
    const handleInputChange = (newData, newRadio) => {
        setDate1(newData)
        inputDate(fulldate);
        inputMethod(newRadio)
      };

    

    return (
        <>
            <Grid container spacing={3} style={{ justifyContent: 'center' }}>
                <Grid item xs={12} sm={10} md={10} lg={8}>
                    <Typography variant="body2" style={{ fontSize: '22px', textAlign: 'center', fontWeight: 'bold' }}>
                        Delivery of your Car
                    </Typography>

                    <Typography variant="body2" style={{ fontSize: '16px', textAlign: 'center', marginTop: '20px' }}>
                        You can pick up your car from us in Säriswil (Canton Bern) on weekdays, or you can opt for home delivery and we will
                        bring the car to you for a fee of CHF 180. At the handover you will be thoroughly familiarized with the car.
                    </Typography>

                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue={inputMethod} onChange={(event) => inputMethod(event.target.value)} name="radioButton">
                        <Grid container spacing={2} style={{ justifyContent: 'center', margin: '20px 0' }}>
                            <Grid item xs={12} sm={6} md={6} lg={6} >
                                <Card style={{ background: '#F4F5F8', textAlign: 'center', padding: '40px 0' }}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Radio />}
                                            value="company"
                                            style={{ justifyContent: 'center', margin: '0' }}
                                        />
                                        <Typography variant="body2" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                            Pick up from Company
                                        </Typography>
                                        <Typography variant="body2" style={{ fontSize: '14px' }}>
                                            (for free)
                                        </Typography>
                                    </FormGroup>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Card style={{ background: '#F4F5F8', textAlign: 'center', padding: '40px 0' }}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Radio />}
                                            value="home"
                                            style={{ justifyContent: 'center', margin: '0' }}
                                        />
                                        <Typography variant="body2" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                            Home Delivery
                                        </Typography>
                                        <Typography variant="body2" style={{ fontSize: '14px' }}>
                                            (once CHF 180.-)
                                        </Typography>
                                    </FormGroup>
                                </Card>
                            </Grid>
                        </Grid>
                    </RadioGroup>

                    <Grid style={{ textAlign: 'center' }}>
                        <Typography variant="body2" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                            Your desired delivery date
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px', marginTop: '10px' }}>
                            The selected{' '}
                            <span style={{ fontWeight: '500', fontSize: '17px' }}>
                                {company} {model}
                            </span>{' '}
                            will be available on <span style={{ fontWeight: '600' }}>{fulldate}</span>
                        </Typography>

                        <Grid item xs={12} md={8} lg={12} style={{ marginTop: '20px' }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12} lg={8} style={{ margin: '0 auto' }}>
                                        <DatePicker
                                            label="Select Delivery Date"
                                            // onChange={(newValue) => setDate1(newValue)}
                                            onChange={(newDate) => inputDate(newDate)}
                                            renderInput={(params) => <TextField fullWidth {...params} />}
                                        />
                                    </Grid>
                                </Grid>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
