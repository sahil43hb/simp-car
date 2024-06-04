import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Stack, CardMedia } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';

// assets
import Icon1 from 'assets/images/landing/offer/icon-1.png';
import Icon2 from 'assets/images/landing/offer/icon-2.png';
import Icon3 from 'assets/images/landing/offer/icon-3.png';
import Icon4 from 'assets/images/landing/offer/icon-4.png';
import Icon5 from 'assets/images/landing/offer/icon-5.png';
import Icon6 from 'assets/images/landing/offer/icon-6.png';

const OfferCard = ({ title, caption, image }) => {
    const theme = useTheme();
    const AvaterSx = { background: 'transparent', color: theme.palette.secondary.main, width: 56, height: 56 };
    return (
        <FadeInWhenVisible>
            <SubCard
                sx={{
                    bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.100',
                    borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.divider,
                    '&:hover': { boxShadow: 'none' },
                    height: '100%',
                    padding: '30px 0',
                    backgroundColor: 'white !important',
                    boxShadow: 'rgb(221, 221, 221) 0px 0px 10px'
                }}
            >
                <Stack spacing={4}>
                    <Avatar variant="rounded" sx={AvaterSx} style={{ margin: '0 auto' }}>
                        <CardMedia component="img" src={image} alt="Beautiful User Interface" />
                    </Avatar>
                    <Stack spacing={2}>
                        <Typography variant="h3" sx={{ fontWeight: 500 }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                            {caption}
                        </Typography>
                    </Stack>
                </Stack>
            </SubCard>
        </FadeInWhenVisible>
    );
};

OfferCard.propTypes = {
    title: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.string
};

// =============================|| LANDING - CARD SECTION ||============================= //

const CardSection = () => {
    const theme = useTheme();
    const cardSX = {
        overflow: 'hidden',
        position: 'relative',
        border: 'none',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: 150,
            height: 150,
            border: `35px solid ${theme.palette.background.paper}`,
            opacity: theme.palette.mode === 'dark' ? 0.1 : 0.4,
            borderRadius: '50%',
            top: -72,
            right: -63
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: 150,
            height: 150,
            border: `2px solid ${theme.palette.background.paper}`,
            opacity: theme.palette.mode === 'dark' ? 0.05 : 0.21,
            borderRadius: '50%',
            top: -97,
            right: -3
        },
        '& .MuiCardContent-root': {
            padding: '20px 38px 20px 30px'
        }
    };
    return (
        <Container>
            <Grid container spacing={7.5} justifyContent="center">
                <Grid item xs={12} md={10} sx={{ textAlign: 'center' }}>
                    <Grid container spacing={1.5}>
                        <Grid item xs={12}>
                            <Typography variant="p" sx={{ fontSize: { md: '33px', sm: '28px' } }}>
                                Dein <span style={{ color: '#92BD44' }}> Auto-Abo</span> im Rundum-sorglos-Paket
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" sx={{ fontSize: { md: '18px', sm: '14px' } }}>
                                Bei simpcar ist alles mit dabei, ausser der Treibstoff.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" sx={{ fontSize: { md: '18px', sm: '14px' } }}>
                                Geniesse grenzenlose Freiheit, Flexibilität und eine neue Art des Autoerlebnisses. Bei simpcar abonnierst du
                                dein eigenes Auto im Rundum-sorglos-Paket und musst dich, ausser dem Fahren und Tanken, um nichts kümmern.
                                Auto, Laufzeit und das Kilometer-Paket bestimmst du. Extrakosten gibts bei uns nicht und auch halten wir
                                keine Überaschungen bei Aboende parat. Überzeug dich selbst von den Vorteilen unseres Auto-Abos.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        justifyContent="center"
                        textAlign="center"
                        spacing={5}
                        sx={{ '&> .MuiGrid-root > div': { height: '100%' } }}
                        marginRight="0px"
                    >
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <OfferCard
                                title="Versicherung"
                                caption="Das Fahrzeug ist gegen Schäden vollkaskoversichert und rundum geschützt."
                                image={Icon1}
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <OfferCard title="Steuern" caption="Wir bezahlen die gesetzliche Motorfahrzeugsteuer in deinem Wohnkanton." image={Icon2} />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <OfferCard
                                title="Service und Wartung"
                                caption="Wir kümmern und übernehmen sämtliche Service- und Wartungsarbeiten."
                                image={Icon3}
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <OfferCard
                                title="Bereifung"
                                caption="Sommer wie Winter bist du mit unserem Reifenpaket immer sicher unterwegs."
                                image={Icon4}
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <OfferCard
                                title="Zulassung"
                                caption="Wir organisieren die Nummernschilder und den Fahrzeugausweis."
                                image={Icon5}
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <OfferCard
                                title="Vignette"
                                caption="Jedes Jahr aufs Neue stellen wir die Autobahnvignette bereit."
                                image={Icon6}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CardSection;
