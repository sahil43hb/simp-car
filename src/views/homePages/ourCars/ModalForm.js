// material-ui

import { Container, Grid, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ThemeButton from 'ui-component/ThemeButton';

// =============================|| LANDING - CARD SECTION ||============================= //

export default function ModalForm() {
    return (
        <Container maxWidth={false} style={{ padding: '0' }}>
            <Grid style={{ padding: '0' }}>
                <Grid container spacing={2} style={{ backgroundColor: '#92BD44', padding: '15px 15px' }}>
                    <Grid item xs={10}>
                        <Typography variant="body2" style={{ fontSize: '18px', color: 'white' }}>
                            Teile uns mit, welches Auto du gern hättest
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px', color: 'white', marginTop: '5px' }}>
                            Unser Team macht sich auf die Suche nach dem gewünschten Auto. Hierbei nutzen wir unser Netzwerk und geben
                            alles, um dir das Auto-Abo anbieten zu können.
                        </Typography>
                    </Grid>
                    <Grid item xs={2} style={{ textAlign: 'right' }}>
                        <CancelIcon style={{ color: 'white' }} />
                    </Grid>
                </Grid>

                <Typography variant="body2" style={{ fontSize: '18px', marginTop: '20px', paddingLeft: '15px' }}>
                    Beschreibe uns dein Wunschauto
                </Typography>

                <Grid container spacing={2} style={{ padding: '15px 15px' }}>
                    <Grid item xs={6}>
                        <TextField fullWidth required id="filled-required" label="Marke" defaultValue="Mercedes-Benz" variant="filled" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            required
                            id="filled-required"
                            label="Modell"
                            defaultValue="z.B. C-Klasse 180 CDI"
                            variant="filled"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth required id="filled-required" label="Getriebe" defaultValue="Automatik" variant="filled" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth required id="filled-required" label="Treibstoff" defaultValue="Diesel" variant="filled" />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            required
                            id="filled-required"
                            label="Zustand"
                            defaultValue="Neu oder Occasion"
                            variant="filled"
                        />
                    </Grid>
                </Grid>

                <Typography variant="body2" style={{ fontSize: '18px', marginTop: '20px', paddingLeft: '15px' }}>
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
                </Grid>
            </Grid>
        </Container>
    );
}
