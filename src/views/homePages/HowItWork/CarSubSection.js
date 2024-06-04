import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

import Howcar from 'assets/images/landing/Howcar.png';
import I1 from 'assets/images/landing/i1.png';
import I2 from 'assets/images/landing/i2.png';
import I3 from 'assets/images/landing/i3.png';
import I4 from 'assets/images/landing/i4.png';
import I5 from 'assets/images/landing/i5.png';
import I6 from 'assets/images/landing/i6.png';
import MainCar from 'assets/images/landing/HowSpec.png';

const data = [
    { heading: 'Versicherung', sub: 'Eventuelle Schäden am Auto sind bei uns Vollkasko versichert.', img: I1 },
    { heading: 'Steuern', sub: 'Wir übernehmen die Kfz-Steuer.', img: I2 },
    { heading: 'Service und Wartung', sub: '    Wir kümmern uns um sämtliche Service- und Wartungsarbeiten.', img: I3 }
];
const data2 = [
    { heading: 'Reifen', sub: '    Sommer wie Winter sind Sie mit unserem Reifenpaket immer sicher unterwegs.', img: I4 },
    { heading: 'Erlauben', sub: '    Wir organisieren die Nummernschilder und den Fahrzeugschein.', img: I5 },
    { heading: 'Vignette', sub: '    Die Autobahnvignette stellen wir jedes Jahr aus.', img: I6 }
];

// ==============================|| LANDING - HEADER PAGE ||============================== //

const CarSubSection = () => {
    const navigate = useNavigate();

    const headerSX = {
        fontSize: { xs: '21px', sm: '21px', md: '34', lg: '34px' },
        lineHeight: { lg: '40px', md: '38px', sm: '42px', xs: '45px' }
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0 }}>
            <Grid sx={{ mt: { xs: 13, sm: 6, md: 10 } }}>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={Howcar} alt="not" style={{ objectFit: 'cover', width: '80px' }} />
                </Grid>
                <Grid sx={{ textAlign: 'center', }}>
                    <Typography sx={headerSX} fontWeight="bold">
                        
Günstiges Auto-Abo statt teurem Kauf
                    </Typography>
                    <Typography fontSize="16px">Sparen Sie Kosten mit simpcar!</Typography>
                </Grid>
                <Grid sx={{ textAlign: 'center',padding:"15px" }}>
                    <p>
                    Mit dem Auto-Abo von simpcar haben Sie eine flexible und günstige Alternative zum Autokauf oder -leasing.
                    Es bietet Menschen in der Schweiz die Möglichkeit, ein Auto für einen bestimmten Zeitraum unbesorgt zu nutzen
                    über die mit dem Auto verbundenen Kosten.
                    </p>
                    <p>
                    Das Auto-Abo ist eine moderne Mobilitätslösung mit einer großen Auswahl an Fahrzeugen. Wir haben das richtige Auto dafür
                    jeden Geschmack und jedes Budget im Abonnement. Vom Kleinwagen über das Familienfahrzeug bis hin zum Luxusauto – bei uns werden Sie fündig
                    Finden Sie das Fahrzeug, das perfekt zu Ihnen passt. Und das Beste: Sie können jederzeit das Auto wechseln, wenn sich Ihre Bedürfnisse ändern.
                    </p>
                </Grid>
                <Grid sx={{ textAlign: 'center', paddingTop: '40px' }}>
                    <Button
                        // component={Link}
                        disableElevation
                        variant="contained"
                        color="secondary"
                        style={{ color: 'white', borderRadius: '25px', padding: '11px 30px', backgroundColor: '#7BB31A' }}
                        onClick={()=>navigate("/our-car")} 
                    >
                    Zu den Autos
                    </Button>
                </Grid>

                <Grid container spacing={2} sx={{ paddingTop: '100px' }}>
                    <Grid item xs={11} sm={3} md={3} sx={{ marginLeft: { xs: '10px', sm: '0px' } }}>
                        {data.map((data) => (
                            <Grid container spacing={2} sx={{ display: 'flex', paddingBottom: '20px' }}>
                                <Grid item xs={4}>
                                    <img src={data.img} alt="not" style={{ width: '80%', paddingRight: '10px' }} />
                                </Grid>
                                <Grid item xs={8}>
                                    <span style={{ fontSize: '18px' }}>{data.heading}</span>
                                    <Typography sx={{ paddingTop: '10px' }}>{data.sub}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={11} sm={6} md={6}>
                        <img src={MainCar} alt="not" style={{ width: '100%', paddingLeft: '21px', paddingTop: '30px' }} />
                    </Grid>
                    <Grid item xs={10} sm={3} md={3} sx={{ marginLeft: { xs: '10px', sm: '0px' } }}>
                    {data2.map((data) => (
                        <Grid container spacing={2} sx={{ display: 'flex', paddingBottom: '20px' }}>
                            <Grid item xs={4}>
                                <img src={data.img} alt="not" style={{ width: '80%', paddingRight: '10px' }} />
                            </Grid>
                            <Grid item xs={8}>
                                <span style={{ fontSize: '18px' }}>{data.heading}</span>
                                <Typography sx={{ paddingTop: '10px' }}>{data.sub}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                   
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CarSubSection;
