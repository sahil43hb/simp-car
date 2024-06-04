import React from 'react';
import { Grid, Typography, Container, Button, TextField } from '@mui/material';
import loginImgCar from 'assets/images/landing/car-upper-map.png';
import logo from 'assets/images/simcar-logo.png';
import SubCard from 'ui-component/cards/SubCard';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ThemeButton from 'ui-component/ThemeButton';
import ThemeTransparentBtn from 'ui-component/ThemeTransparentBtn';

export default function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container maxWidth={false} style={{ padding: '0', background: '#F4F5F8', height: '102vh' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} md={6} style={{ margin: '10px 0px' }}>
                    <SubCard sx={{ padding: { xs: 1, sm: 2, md: 4, lg: 11 } }}>
                        <img src={logo} alt="" />
                        <Typography variant="body2" style={{ color: '#92BD44', fontSize: '20px', marginTop: '25px' }}>
                            Kundenlogin
                        </Typography>
                        <Typography variant="body2" style={{ color: '#707070', fontSize: '14px', marginTop: '10px' }}>
                            Willkommen im Kundenlogin von Simpcar, dem Online-Dashboard für die Verwaltung deines Auto-Abos. In diesem
                            geschützten Bereich kannst du alle Details rund um dein abo in Echtzeit abrufen, Rechnungen einsehen und online
                            bezahlen sowie an unserem Bonusprogramm teilnehmen.
                        </Typography>

                        <TextField fullWidth id="outlined-email-address" placeholder="Email Address" style={{ marginTop: '40px' }} />

                        <FormControl sx={{ marginTop: '20px', width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={6} md={6} sm={6}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Angemeldet bleiben" />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12} lg={6} md={6} sm={6}>
                                <Typography
                                    variant="body2"
                                    sx={{ textAlign: { xs: 'left', sm: 'right', md: 'right', lg: 'right' } }}
                                    style={{ fontSize: '14px', marginTop: '10px' }}
                                >
                                    Passwort vergessen
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} style={{ marginTop: '10px' }}>
                            <Grid item lg={4} md={5} sm={6} xs={12}>
                                <ThemeButton title="Login" />
                            </Grid>
                            <Grid item lg={4} md={5} sm={6} xs={12}>
                                <ThemeTransparentBtn title="Registrierung" />
                            </Grid>
                        </Grid>

                        <Typography variant="body2" style={{ marginTop: '10px', fontSize: '12px' }}>
                            Mit der Anmeldung in Geschützen Bereich erklärst du dich <br /> mit unseren <b>Datenschutzbestimmungen</b>{' '}
                            einverstanden.
                        </Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={6} container direction="row" justify="center" alignItems="center" alignContent="center">
                    <img src={loginImgCar} alt="" style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </Container>
    );
}
