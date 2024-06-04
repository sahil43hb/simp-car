// material-ui
import { Container, Grid, Typography } from '@mui/material';

// assets
import cricleImg from 'assets/images/landing/cricle.png';
import arrowImg from 'assets/images/landing/arrrow-1.png';
import arrowImgRotate from 'assets/images/landing/arrow-2.png';
import LandImg1 from "assets/images/landing/landimg1.png"
import LandImg2 from "assets/images/landing/landimge2.png"
import LandImg3 from "assets/images/landing/landimge3.png"
import LandImg4 from "assets/images/landing/landimg4.png"
import Car from "assets/images/landing/AutoCar.png"
// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeatureSection = () => (
    <Container>
        <Grid container spacing={7.5} justifyContent="center">
            <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
                <Grid container spacing={1.5}>
                <Grid item xs={12}>
            <img  alt='not' src={Car} />
                </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" sx={{ fontSize: { xs: '22px', sm: '30px' } }}>

                        Das<span style={{ color: '#92BD44' }}>Auto im Abo. </span> So funktionierts:
                        </Typography>
                        <Typography fontSize="16px">In wenigen Schritten unbekümmert Auto fahren</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid
                    container
                    justifyContent="center"
                    spacing={5}
                    sx={{ '&> .MuiGrid-root > div': { height: '100%' } }}
                    style={{ position: 'relative' }}
                >
                    <Grid item md={3} sm={6} style={{ textAlign: 'center', position: 'relative' }}>
                        <img src={LandImg1} alt="img" style={{ width: '160px' ,border:"1px solid #76A81B",borderRadius:"100px"}} />
                        <img src={arrowImg} alt="img" className="arrowImg" />
                        <Typography variant="h6" style={{ fontSize: '18px' }}>
                        Auto auswählen
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px' }}>
                        Nutze die Suchfunktion und finde das Auto, das zu dir und deinem Budget passt.
                        </Typography>
                    </Grid>

                    <Grid item md={3} sm={6} className="mt_0Res" style={{ textAlign: 'center', marginTop: '60px', position: 'relative' }}>
                        <img src={LandImg2} alt="img" style={{ width: '160px' ,border:"1px solid #76A81B",borderRadius:"100px"}} />
                        <img src={arrowImgRotate} alt="img" className="arrowImg" />
                        <Typography variant="h6" style={{ fontSize: '18px' }}>
                        Abo konfigurieren
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px' }}>
                        Stelle deine Abo-Leistungen zusammen und wählen aus verschiedenen Optionen.
                        </Typography>
                    </Grid>

                    <Grid item md={3} sm={6} style={{ textAlign: 'center', position: 'relative' }}>
                        <img src={LandImg3} alt="img" style={{ width: '160px' ,border:"1px solid #76A81B",borderRadius:"100px"}} />
                        <img src={arrowImg} alt="img" className="arrowImg" />
                        <Typography variant="h6" style={{ fontSize: '18px' }}>
                        Online buchen
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px' }}>
                        Buche dein Wunschauto online und profitiere von digitalen Prozessen.
                        </Typography>
                    </Grid>

                    <Grid item md={3} sm={6} className="mt_0Res" style={{ textAlign: 'center', marginTop: '60px' }}>
                        <img src={LandImg4} alt="img" style={{ width: '160px' ,border:"1px solid #76A81B",borderRadius:"100px"}} />
                        <Typography variant="h6" style={{ fontSize: '18px' }}>
                        Auto kommt zu dir
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: '14px' }}>
                        Sobald alle Formalitäten erledigt sind, kannst du einsteigen und losfahren!
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
);

export default FeatureSection;
