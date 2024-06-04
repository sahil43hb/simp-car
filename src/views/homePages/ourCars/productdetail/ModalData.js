// material-ui

import { Container, Grid, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ThemeButton from 'ui-component/ThemeButton';
import carImg from 'assets/images/landing/mask-bmw.png';
import speedIcon from 'assets/images/landing/speed-iconW.png';
import manualIcon from 'assets/images/landing/manual-iconW.png';
import diselIcon from 'assets/images/landing/diesel-iconW.png';
// =============================|| LANDING - CARD SECTION ||============================= //

export default function ModalData() {
    return (
        <Container maxWidth={false} style={{ padding: '0' }}>
            <Grid style={{ padding: '0' }}>
                <Grid container spacing={2} style={{ backgroundColor: '#92BD44', padding: '15px 15px' }}>
                    <Grid item xs={10}>
                        <Typography variant="body2" style={{ fontSize: '18px', color: 'white' }}>
                            Offerte und Datenblatt zum BMW 188i anfordern
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px', color: 'white', marginTop: '15px' }}>
                            Gerne senden wir dir eine unverbindliche Offerte mit weiteren Informationen und den Mietpreisen. Unsere Offerte
                            und Beratung sind für dich kostenlos.
                        </Typography>
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'right' }}>
                        <CancelIcon style={{ color: 'white' }} />
                    </Grid>
                </Grid>

                <Typography variant="body2" style={{ fontSize: '18px', marginTop: '20px', paddingLeft: '15px' }}>
                    BMW 118i
                </Typography>

                <Grid container spacing={2} style={{ padding: '15px 15px' }}>
                    <Grid item xs={4}>
                        <img src={carImg} alt="" />
                    </Grid>

                    <Grid item xs={4} style={{ marginTop: '20px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Grid style={{ display: 'flex' }}>
                                    <img src={speedIcon} alt="" style={{ width: '40px' }} />
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                        130 PS
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid style={{ display: 'flex' }}>
                                    <img src={manualIcon} alt="" style={{ width: '40px' }} />
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                    Manuell
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid style={{ display: 'flex' }}>
                                    <img src={diselIcon} alt="" style={{ width: '40px' }} />
                                    <Typography variant="body2" style={{ fontSize: '12px', margin: '12px 0 0 7px' }}>
                                    Diesel
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={4} style={{borderLeft:'2px solid #92BD44',    height: '88px',margin: '43px 0 0 0'}}>
                        <Typography variant="body2" style={{ fontSize: '18px', marginTop: '20px', color: '#92BD44' }}>
                            Abo-Preis ab
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '18px', marginTop: '0px', }}>
                            CHF 310.- <span style={{fontSize:'14px'}}>/ Monat</span>
                        </Typography>
                    </Grid>
                </Grid>

                <Typography variant="body2" style={{ fontSize: '18px', marginTop: '5px', paddingLeft: '15px' }}>
                    Deine Kontaktangaben
                </Typography>

                <FormControl style={{ paddingLeft: '15px' }}>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                        <FormControlLabel value="Herr" control={<Radio />} label="Herr" />
                        <FormControlLabel value="Frau" control={<Radio />} label="Frau" />
                        <FormControlLabel value="Firma" control={<Radio />} label="Firma" />
                    </RadioGroup>
                </FormControl>

                <Grid container spacing={2} style={{ padding: '15px 15px' }}>
                    <Grid item xs={6}>
                        <TextField fullWidth required id="filled-required" label="Vorname" defaultValue="Muster" variant="filled" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth required id="filled-required" label="Vorname" defaultValue="Max" variant="filled" />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth required id="filled-required" label="Adresse" defaultValue="Gehweg 43a" variant="filled" />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    required
                                    id="filled-required"
                                    label="Postleitzahl"
                                    defaultValue="3019"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <TextField fullWidth required id="filled-required" label="Ortschaft" defaultValue="Bern" variant="filled" />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            required
                            id="filled-required"
                            label="E-Mail Adresse"
                            defaultValue="hansi@bluewin.ch"
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            required
                            id="filled-required"
                            label="Telefonnummer"
                            defaultValue="079 890 11 09"
                            variant="filled"
                            style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: '#8D8E93'
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="filled-required"
                            label="Deine Nachricht (optional)"
                            defaultValue="..............."
                            variant="filled"
                            multiline
                            rows={4}
                        />
                    </Grid>

                    <ThemeButton title="Formular einsenden" style={{ marginTop: '10px' }} />

                    <Typography variant="body2" style={{ margin: '30px 0 0 20px', color: '#909090',cursor:'pointer' }}>
                        Abbrechen
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
