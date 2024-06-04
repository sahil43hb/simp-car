import * as React from 'react';

// material-ui
import { Grid, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
// ==============================|| FORM WIZARD - BASIC  ||============================== //



export default function Review(props) {
    const {company, model, price, firstName, lastName, street, no,transmission,fuel, town, postCode, nationality, permit, birthDate, employment, phone, email, gender } = props;
    return (
        <>
            

            <Grid container spacing={3} style={{ justifyContent: 'center' }}>
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <Typography variant="body2" style={{ fontSize: '18px', textAlign: 'center' }}>
                        Deine persönlichen Angaben
                    </Typography>

                    <Typography variant="body2" style={{ fontSize: '14px', textAlign: 'center', marginTop: '20px' }}>
                        Bitte trage deine persönlichen Daten ein, damit wir dein Abo eröffnen und prüfen können. Damit du bei uns ein
                        Auto-Abo abschliessen kannst musst du volljährig sein und über eine akzeptable Bonitätsauskunft verfügen.
                    </Typography>

                    <Grid container spacing={2} style={{ marginTop: '20px' }}>
                        <Grid item>
                            <Typography variant="body2" style={{ fontSize: '14px' }}>
                                <DoneIcon style={{ fontSize: '12px', color: '#92BD44' }} /> Versicherung
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="body2" style={{ fontSize: '14px' }}>
                                <DoneIcon style={{ fontSize: '12px', color: '#92BD44' }} /> Service und Wartung
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="body2" style={{ fontSize: '14px' }}>
                                <DoneIcon style={{ fontSize: '12px', color: '#92BD44' }} /> Zulassung
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="body2" style={{ fontSize: '14px' }}>
                                <DoneIcon style={{ fontSize: '12px', color: '#92BD44' }} /> Mehrfahrer
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="body2" style={{ fontSize: '14px' }}>
                                <DoneIcon style={{ fontSize: '12px', color: '#92BD44' }} /> Steuern
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="body2" style={{ fontSize: '14px' }}>
                                <DoneIcon style={{ fontSize: '12px', color: '#92BD44' }} /> Vignette (jedes Jahr)
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="body2" style={{ fontSize: '14px' }}>
                                <DoneIcon style={{ fontSize: '12px', color: '#92BD44' }} /> Bereifung
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid style={{ background: '#F4F5F8', borderRadius: '5px', marginTop: '30px', padding: '20px 20px' }}>
                        <Typography variant="body2" style={{ fontSize: '18px' }}>
                        Information about the tenant
                        </Typography>

                        <Grid container spacing={2} style={{ marginTop: '10px' }}>
                            <Grid item xs={12} sm={6} lg={4}>
                                <Typography variant="body2" style={{ fontSize: '10px' }}>
                                Salutation
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {gender}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={4}>
                                <Typography variant="body2" style={{ fontSize: '10px' }}>
                                    First Name
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {firstName}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={4}>
                                <Typography variant="body2" style={{ fontSize: '10px' }}>
                                    Family Name
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {lastName}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={4}>
                                <Typography variant="body2" style={{ fontSize: '10px' }}>
                                    Address
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {street} {no}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={4}>
                                <Typography variant="body2" style={{ fontSize: '10px' }}>
                                    PLZ / Ort
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {postCode}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={4}>
                                <Typography variant="body2" style={{ fontSize: '10px' }}>
                                    Nationality
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {nationality}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={4}>
                                <Typography variant="body2" style={{ fontSize: '10px' }}>
                                Residence Permit
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {permit}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={4}>
                                <Typography variant="body2" style={{ fontSize: '10px' }}>
                                    Date of birth
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {birthDate}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={4}>
                                <Typography variant="body2" style={{ fontSize: '10px' }}>
                                Employment Relationship
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {employment}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={4}>
                                <Typography variant="body2" style={{ fontSize: '10px' }}>
                                    Phone Number
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {phone}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} lg={4}>
                                <Typography variant="body2" style={{ fontSize: '10px' }}>
                                    E-Mail
                                </Typography>

                                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {email}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid>
                            <Typography variant="body2" style={{ fontSize: '18px', marginTop: '20px' }}>
                                Cost Summary
                            </Typography>

                            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                <Grid xs={8} sm={8} lg={8} style={{ paddingLeft: '16px' }}>
                                    <Typography variant="body2" style={{ fontSize: '14px' }}>
                                        {company} {model} – {transmission} – {fuel}
                                    </Typography>

                                    <Typography variant="body2" style={{ fontSize: '12px' }}>
                                        Mindestmietdauer: 36 Monate. Monatlicher Mietpreis.
                                    </Typography>
                                </Grid>

                                <Grid xs={4} sm={4} lg={4}>
                                    <Typography variant="body2" style={{ fontSize: '14px', textAlign: 'right' }}>
                                        CHF {price}.00
                                    </Typography>
                                </Grid>

                                <Box style={{ borderBottom: '1px solid #707070', width: '100% ', margin: '10px 0 10px 16px' }} />

                                <Grid xs={8} sm={8} lg={8} style={{ paddingLeft: '16px' }}>
                                    <Typography variant="body2" style={{ fontSize: '14px' }}>
                                        Autolieferung (einmalig)
                                    </Typography>
                                </Grid>

                                <Grid xs={4} sm={4} lg={4}>
                                    <Typography variant="body2" style={{ fontSize: '14px', textAlign: 'right' }}>
                                        CHF {price}.00
                                    </Typography>
                                </Grid>

                                <Box style={{ borderBottom: '1px solid #707070', width: '100% ', margin: '10px 0 10px 16px' }} />

                                <Grid xs={8} sm={8} lg={8} style={{ paddingLeft: '16px' }}>
                                    <Typography variant="body2" style={{ fontSize: '14px' }}>
                                        Anfangspauschale (einmalig)
                                    </Typography>
                                </Grid>

                                <Grid xs={4} sm={4} lg={4}>
                                    <Typography variant="body2" style={{ fontSize: '14px', textAlign: 'right' }}>
                                        CHF {price}.00
                                    </Typography>
                                </Grid>

                                <Box style={{ borderBottom: '1px solid #707070', width: '100% ', margin: '10px 0 10px 16px' }} />

                                <Grid lg={8} style={{ paddingLeft: '16px' }}>
                                    <Typography variant="body2" style={{ fontSize: '14px' }}>
                                        Total
                                    </Typography>
                                </Grid>

                                <Grid lg={4}>
                                    <Typography variant="body2" style={{ fontSize: '14px', textAlign: 'right' }}>
                                        CHF {price}.00
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid style={{display:'flex',marginTop:'20px'}}>
                        <CancelIcon style={{ color: '#92BD44' }} />
                        <Typography variant="body2" style={{ fontSize: '14px',paddingLeft:'10px' }}>
                            Ja, ich möchte online ein Auto-Abo bei SimpCar AG abschliessen und bestätige, die Allgemeinen
                            Vertragsbedingungen (AVB) sowie die Datenschutzbestimmungen gelesen zu haben und erkläre mich damit
                            einverstanden.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            
        </>
    );
}
