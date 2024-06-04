import React, { useState } from 'react';

// material-ui
import { HelpCenter } from '@mui/icons-material';
import { FormControlLabel, Grid, Typography, Card, RadioGroup, Radio, TextField } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import ErrorIcon from '@mui/icons-material/Error';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import SubCard from 'ui-component/cards/SubCard';

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
                    Lieferung Ihres Autos
                    </Typography>

                    <Typography variant="body2" style={{ fontSize: '16px', textAlign: 'center', marginTop: '20px' }}>
                    Sie können Ihr Auto werktags bei uns in Säriswil (Kanton Bern) abholen oder sich für die Lieferung nach Hause entscheiden
                    Bringen Sie das Auto gegen eine Gebühr von CHF 180 zu Ihnen. Bei der Übergabe werden Sie umfassend mit dem Auto vertraut gemacht.
                    </Typography>

                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue={inputMethod} onChange={(event) => inputMethod(event.target.value)} name="radioButton">
                        <Grid container spacing={2} style={{ justifyContent: 'center', margin: '20px 0' }}>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Card style={{ background: '#F4F5F8', textAlign: 'center', padding: '40px 0' }}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Radio />}
                                            value="company"
                                            style={{ justifyContent: 'center', margin: '0' }}
                                        />
                                        <Typography variant="body2" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                        Abholung vom Unternehmen
                                        </Typography>
                                        <Typography variant="body2" style={{ fontSize: '14px' }}>
                                            
(kostenlos)
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
                                           
Hauslieferung
                                        </Typography>
                                        <Typography variant="body2" style={{ fontSize: '14px' }}>
                                        (einmalig CHF 180.-)
                                        </Typography>
                                    </FormGroup>
                                </Card>
                            </Grid>
                        </Grid>
                    </RadioGroup>

                    <Grid style={{ textAlign: 'center' }}>
                        <Typography variant="body2" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                      
Ihr gewünschter Liefertermin
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px', marginTop: '10px' }}>
                        Die gewählte{' '}
                            <span style={{ fontWeight: '500', fontSize: '17px' }}>
                                {company} {model}
                            </span>{' '}
                            
wird verfügbar sein<span style={{ fontWeight: '600' }}>{fulldate}</span>
                        </Typography>

                        <Grid item xs={12} md={8} lg={12} style={{ marginTop: '20px' }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12} lg={8} style={{ margin: '0 auto' }}>
                                        <DatePicker
                                            label="Wählen Sie das Lieferdatum aus"
                                            // onChange={(newValue) => setDate1(newValue)}
                                            onChange={(newDate) => inputDate(newDate) }
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
