// material-ui
import { Container, Grid, Typography } from '@mui/material';

// assets
import cricleImg from 'assets/images/landing/cricle.png';
import arrowImg from 'assets/images/landing/arrrow-1.png';
import checkImg from 'assets/images/landing/simpcar-check.webp';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const WhatWeDoSection = () => (
    <Container>
        <Grid container spacing={7.5} justifyContent="center">
            <Grid item xs={12} md={12} sx={{ textAlign: 'left' }}>
                <Grid container spacing={1.5}>
                    <Grid item xs={12}>
                        <Typography variant="body2" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>
                        PLUSPUNKT AUTO ABO
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body2" sx={{ fontSize: { xs: '22px', sm: '30px' } }}>
                        Starte durch – mit deinem <span style={{ color: '#92BD44' }}> Auto-Abo </span> von simpcar!
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={5} sx={{ '&> .MuiGrid-root > div': { height: '100%' } }}>
                    <Grid item md={3} sm={6} style={{ textAlign: 'left' }}>
                        <img src={checkImg} alt="img" style={{ width: '40px' }} />
                        <Typography variant="h6" style={{ fontSize: '18px', marginTop: '20px' }}>
                        Flexibel
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px', marginTop: '10px' }}>
                        Nach der Mindestlaufzeit monatlich kündbar oder jederzeit auf ein anderes Auto umsteigen.
                        </Typography>
                    </Grid>

                    <Grid item md={3} sm={6} style={{ textAlign: 'left' }}>
                        <img src={checkImg} alt="img" style={{ width: '40px' }} />
                        <Typography variant="h6" style={{ fontSize: '18px', marginTop: '20px' }}>
                        Vorteilhaft
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px', marginTop: '10px' }}>
                        Die Monatsrate deckt sämtliche Kosten rund um das Auto ab. Anschaffungskosten und Risiko entfallen.                        </Typography>
                    </Grid>

                    <Grid item md={3} sm={6} style={{ textAlign: 'left' }}>
                        <img src={checkImg} alt="img" style={{ width: '40px' }} />
                        <Typography variant="h6" style={{ fontSize: '18px', marginTop: '20px' }}>
                        Unkompliziert
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px', marginTop: '10px' }}>
                        Abo in wenigen Schritten online buchbar, mit Lieferung auf Wunsch bis vor die Haustür.
                        </Typography>
                    </Grid>

                    <Grid item md={3} sm={6} style={{ textAlign: 'left' }}>
                        <img src={checkImg} alt="img" style={{ width: '40px' }} />
                        <Typography variant="h6" style={{ fontSize: '18px', marginTop: '20px' }}>
                        Transparent
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px', marginTop: '10px' }}>
                        Keine bösen Überraschungen und hohen Nachzahlungen nach Aboende. 
                        </Typography>
                    </Grid>

                    {/* <Grid item md={3} sm={6} style={{ textAlign: 'left' }}>
                        <img src={checkImg} alt="img" style={{ width: '40px' }} />
                        <Typography variant="h6" style={{ fontSize: '18px', marginTop: '20px' }}>
                            Transparent
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px', marginTop: '10px' }}>
                            Keine bösen Überraschungen und hohen Nachzahlungen nach Aboende.
                        </Typography>
                    </Grid> */}
                </Grid>
            </Grid>
        </Grid>
    </Container>
);

export default WhatWeDoSection;
