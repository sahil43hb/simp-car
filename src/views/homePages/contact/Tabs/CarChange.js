import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

// material-ui
import {
    FormControl,
    TextField,
    Grid,
    Typography,
    Container,
    Card,
    FormLabel,
    Checkbox,
    Button,
    FormControlLabel,
    FormHelperText,
    Radio,
    RadioGroup,
    Stack
} from '@mui/material';
import { IoIosArrowForward } from 'react-icons/io';

// project imports
import ReCAPTCHA from 'react-google-recaptcha';
import FadeInWhenVisible from 'views/homePages/Animation';
// third-party

// material-ui

// ==============================|| LANDING - HEADER PAGE ||============================== //

const CarChange = () => {
    const headerSX = {
        fontSize: { xs: '2rem', sm: '2rem', md: '2rem', lg: '1.75rem' },
        textAlign: { xs: 'left', sm: 'center' }
    };

    const handleOnChange = () => {};

    return (
        
            <Grid sx={{ mt: { xs: 1.75, sm: 3.75, md: 3.75 }, mb: { xs: 13, sm: 12.75, md: 12.75 } }}>
            <FadeInWhenVisible>
            <Container> <Grid sx={{paddingBottom:"30px"}}>
                    <Typography sx={headerSX} fontWeight="400px" textAlign="center">
                    Mieten Sie ein neues Auto
                    </Typography>
                    <Typography fontSize="16px" textAlign="center" sx={{ padding: { xs: '10px 0px', sm: '25px 85px',md:"25px 185px" },textAlign: { xs: 'left', sm: 'center' } }}>
                    Möchten Sie ein neues Auto ausprobieren? Gerne gestalten wir Ihren Vertrag nach Ihren Bedürfnissen neu. Sie können das initiieren
                    Stornierung mit den untenstehenden Informationen. Wir werden uns umgehend bei Ihnen melden.
                    </Typography>
                </Grid> </Container>
               
                <Container maxWidth="md">
                    <Grid sx={{ background: '#92bd44',padding: {xs:'5px 5px',sm:"34px 75px"}, borderRadius: '15px' }}>
                        <FormControl sx={{ paddingBottom: '20px' }}>
                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                <FormControlLabel
                                    value="Mister"
                                    control={
                                        <Radio
                                            sx={{
                                                color: '#FFFF',
                                                '&.Mui-checked': {
                                                    color: '#3e4143'
                                                }
                                            }}
                                        />
                                    }
                                    label="Herrin"
                                    color="success"
                                    sx={{
                                        color: '#FFFF'
                                    }}
                                />
                                <FormControlLabel
                                    value="Woman"
                                    control={
                                        <Radio
                                            color="default"
                                            sx={{
                                                color: '#FFFF',
                                                '&.Mui-checked': {
                                                    color: '#3e4143'
                                                }
                                            }}
                                        />
                                    }
                                    label="Frau"
                                    sx={{
                                        color: '#FFFF'
                                    }}
                                />
                            </RadioGroup>
                        </FormControl>

                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Familienname" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Vorname" />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Adresse" />
                            </Grid>

                            <Grid item xs={6} sm={2}>
                                <TextField fullWidth label="Postleitzahl" />
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <TextField fullWidth label="Lokalität" />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Telefonnummer" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="
                                E-Mail-Adresse" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Abonnementvertrag kündigen" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Auto in Frage" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Wunschauto" />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField fullWidth id="outlined-multiline-static" label="Ihre Nachricht" multiline rows={5} />
                            </Grid>
                        </Grid>
                        <Grid sx={{ padding: '20px 0px' ,marginRight:"30px",display:{xs:"",sm:"block"}}}>
                           
                            <ReCAPTCHA sitekey="6LdzqbcaAAAAALrGEZWQHIHUhzJZc8O-KSTdTTh_" onChange={handleOnChange}/>
                        </Grid>
                      
                    </Grid>
                </Container> </FadeInWhenVisible> 

                <Grid sx={{ paddingTop: '35px', textAlign: 'center' }}>
                    <Button
                        type="submit"
                        style={{
                            color: '#FFFF',
                            fontSize: '17px',
                            fontWeight: 500,
                            background: '#92bd44',
                            padding: '12px 25px',
                            borderRadius: '30px'
                        }}
                    >
                    Formular absenden
                        <IoIosArrowForward />
                    </Button>
                </Grid>
            </Grid>
     
    );
};

export default CarChange;
