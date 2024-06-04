// material-ui
import { Container, Grid, Typography } from '@mui/material';

// assets
import cricleImg from 'assets/images/landing/cricle.png';
import arrowImg from 'assets/images/landing/arrrow-1.png';
import arrowImgRotate from 'assets/images/landing/arrow-2.png';
import LandImg1 from 'assets/images/landing/landimg1.png';
import LandImg2 from 'assets/images/landing/landimge2.png';
import LandImg3 from 'assets/images/landing/landimge3.png';
import LandImg4 from 'assets/images/landing/landimg4.png';
import Car from 'assets/images/landing/AutoCar.png';
import SubCard from 'ui-component/cards/SubCard';
// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeatureSec = () => (
    <Container>
        <Grid container spacing={7.5} justifyContent="center">
            <Grid item xs={12} md={8} sx={{ textAlign: 'center', marginTop: { xs: '20px', sm: '90px' } }}>
                <Grid container spacing={1.5}>
                    <Grid item xs={12}>
                        <Typography variant="body2" sx={{ fontSize: { xs: '22px', sm: '31px' }, fontWeight: '500px' }}>
                            So funktioniert das Auto-Abo<span style={{ color: '#92BD44' }}> simpcar</span>
                        </Typography>
                        <Typography fontSize="18px">In wenigen Schritten sorgenfrei und günstig fahren</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid
                    container
                    justifyContent="center"
                    spacing={3}
                    sx={{ '&> .MuiGrid-root > div': { height: '100%' } }}
                    style={{ position: 'relative' }}
                >
                    <Grid item md={3} sm={6} style={{ textAlign: 'center', position: 'relative' }}>
                        <SubCard style={{ padding: '50px 40px' }}>
                            {' '}
                            <img src={LandImg1} alt="img" style={{ width: '160px', border: '1px solid #76A81B', borderRadius: '100px' }} />
                            <img src={arrowImg} alt="img" className="arrowImg" />
                            <Typography variant="h6" sx={{ fontSize: '18px', pb: '14px' }}>
                                Auto auswählen
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: '14px' }}>
                                Nutzen Sie die Suchfunktion und finden Sie das Auto, das zu Ihnen passt.
                            </Typography>{' '}
                        </SubCard>
                    </Grid>

                    <Grid item md={3} sm={6} className="mt_0Res" style={{ textAlign: 'center', marginTop: '60px', position: 'relative' }}>
                        <SubCard style={{ padding: '50px 20px' }}>
                            {' '}
                            <img src={LandImg2} alt="img" style={{ width: '160px', border: '1px solid #76A81B', borderRadius: '100px' }} />
                            <img src={arrowImgRotate} alt="img" className="arrowImg" />
                            <Typography variant="h6" sx={{ fontSize: '18px', pb: '14px' }}>
                                Abonnement konfigurieren
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: '14px' }}>
                                Stellen Sie Ihr Abo zusammen und wählen Sie aus verschiedenen Optionen.
                            </Typography>
                        </SubCard>
                    </Grid>

                    <Grid item md={3} sm={6} style={{ textAlign: 'center', position: 'relative' }}>
                        <SubCard style={{ padding: '50px 40px' }}>
                            {' '}
                            <img src={LandImg3} alt="img" style={{ width: '160px', border: '1px solid #76A81B', borderRadius: '100px' }} />
                            <img src={arrowImg} alt="img" className="arrowImg" />
                            <Typography variant="h6" sx={{ fontSize: '18px', pb: '14px' }}>
                                Online-Buchung
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: '14px' }}>
                                Senden Sie uns Ihre Bestellung und wir werden uns umgehend bei Ihnen melden
                            </Typography>
                        </SubCard>
                    </Grid>

                    <Grid item md={3} sm={6} className="mt_0Res" style={{ textAlign: 'center', marginTop: '60px' }}>
                        <SubCard style={{ padding: '50px 40px' }}>
                            {' '}
                            <img src={LandImg4} alt="img" style={{ width: '160px', border: '1px solid #76A81B', borderRadius: '100px' }} />
                            <Typography variant="h6" sx={{ fontSize: '18px', pb: '14px' }}>
                                Auto kommt zu dir
                            </Typography>
                            <Typography variant="body2" style={{ fontSize: '14px' }}>
                                Sobald alle Formalitäten erledigt sind, wird Ihnen Ihr Auto übergeben.
                            </Typography>
                        </SubCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
);

export default FeatureSec;
