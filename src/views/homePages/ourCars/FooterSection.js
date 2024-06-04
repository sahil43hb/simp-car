// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, Grid, IconButton, Link, Stack, Typography } from '@mui/material'; // Divider

// project import
import Chip from 'ui-component/extended/Chip';
import { frameworks } from './FrameworkSection';

// assets
// import Dribble from 'assets/images/landing/footer-dribble.png';
// import Freepik from 'assets/images/landing/footer-freepik.png';
// import Awards from 'assets/images/landing/footer-awards.png';
import logo from 'assets/images/simcar-logo.png';
import phoneIcon from 'assets/images/landing/simpcar_telefon.png';
import address from 'assets/images/landing/simpcar_adresse.png';
import emailImg from 'assets/images/landing/simpcar_email.png';

import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ThemeButton from 'ui-component/ThemeButton';
import StarIcon from '@mui/icons-material/Star';
import GoogleImg from 'assets/images/landing/google.png';

// Link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.hint,
    '&:hover': {
        color: theme.palette.primary.main
    },
    '&:active': {
        color: theme.palette.primary.main
    }
}));

// =============================|| LANDING - FOOTER SECTION ||============================= //

const FooterSection = () => {
    const theme = useTheme();
    const textColor = theme.palette.mode === 'dark' ? 'text.secondary' : 'text.secondary';

    return (
        <>
            <Container maxWidth={false} style={{ background: '#3e4143', padding: '35px 0' }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={9} lg={10}>
                            <Typography variant="body2" sx={{ fontWeight: 500, color: 'white', fontSize: '20px', marginTop: '10px' }}>
                                Willst du mehr über das Auto-Abo wissen?
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} lg={2}>
                            <ThemeButton title="Kontaktiere uns!" style={{ width: '50%', float: 'right' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <Container sx={{ mb: 5 }}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Grid container spacing={8} style={{ marginTop: '0px' }}>
                            <Grid item xs={12} md={4}>
                                <Stack spacing={{ xs: 2, md: 5 }}>
                                    <img src={logo} alt="logo" style={{ width: '50%' }} />
                                    <Typography variant="body2" color={textColor}>
                                        <b>simpcar</b> ist eine flexible Alternative zum Kauf oder Leasing eines Fahrzeugs. Es bietet die
                                        Möglichkeit, ein Fahrzeug für einen festgelegten Zeitraum zu nutzen, ohne sich um die Kosten und die
                                        Wartung kümmern zu müssen.
                                    </Typography>
                                </Stack>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item xs={2}>
                                        <img src={phoneIcon} alt="phone-icon" style={{ width: '30px' }} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body2" style={{ fontSize: '16px', marginTop: '5px' }}>
                                            031 558 25 00
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <img src={address} alt="phone-icon" style={{ width: '30px' }} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body2" style={{ fontSize: '16px', marginTop: '5px' }}>
                                            Heidmoosweg 15 3049 Säriswil
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <img src={emailImg} alt="phone-icon" style={{ width: '30px' }} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body2" style={{ fontSize: '16px' }}>
                                            info@simpcar.ch
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Grid container spacing={{ xs: 5, md: 2 }}>
                                    <Grid item xs={6} sm={3} lg={4}>
                                        <Stack spacing={{ xs: 3, md: 5 }}>
                                            <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                                                Das Auto-Abo
                                            </Typography>
                                            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                                                <FooterLink href="#" target="_blank" underline="none" style={{ color: '#707070' }}>
                                                    So funktionierts
                                                </FooterLink>
                                                <FooterLink href="#" target="_blank" underline="none" style={{ color: '#707070' }}>
                                                    Autos entdecken
                                                </FooterLink>

                                                <FooterLink href="#" target="_blank" underline="none" style={{ color: '#707070' }}>
                                                    Häufige Fragen
                                                </FooterLink>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6} sm={3} lg={4}>
                                        <Stack spacing={{ xs: 3, md: 5 }}>
                                            <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                                                simpcar
                                            </Typography>
                                            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                                                <FooterLink
                                                    href="https://mui.com/store/license/"
                                                    target="_blank"
                                                    underline="none"
                                                    style={{ color: '#707070' }}
                                                >
                                                    Über uns
                                                </FooterLink>
                                                <FooterLink
                                                    href="https://mui.com/store/customer-refund-policy/"
                                                    target="_blank"
                                                    underline="none"
                                                    style={{ color: '#707070' }}
                                                >
                                                    Kontakt
                                                </FooterLink>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={4}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={2}>
                                                <img src={GoogleImg} alt="google-img" style={{ width: '40px', objectFit: 'cover' }} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <StarIcon style={{ fontSize: '18px', color: '#FBBD05' }} />
                                                <StarIcon style={{ fontSize: '18px', color: '#FBBD05' }} />
                                                <StarIcon style={{ fontSize: '18px', color: '#FBBD05' }} />
                                                <StarIcon style={{ fontSize: '18px', color: '#FBBD05' }} />
                                                <StarIcon style={{ fontSize: '18px', color: '#FBBD05' }} />
                                                <p style={{ margin: '0', fontSize: '12px' }}>From 53 reviews </p>
                                            </Grid>
                                            <Grid item xs={4} style={{ paddig: '0 !important' }}>
                                                <p style={{ margin: '0', fontSize: '10px', color: '#92BD44' }}>5 out of 5 stars </p>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ py: { xs: 3, sm: 3 } }} style={{ background: '#92bd44' }}>
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={{ xs: 1.5, sm: 1, md: 3 }}
                    >
                        <Typography style={{ color: '#fff' }}>
                            <Link href="https://codedthemes.com/" target="_blank" underline="hover" style={{ color: '#fff' }}>
                                Datenschutz – Impressum
                            </Link>
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={{ xs: 3, sm: 1.5, md: 2 }}>
                            <Typography color="text.secondary">
                                <Typography variant="body2" style={{ color: 'white' }}>
                                    © 2023 simpcar. Alle Rechte vorbehalten.
                                </Typography>
                            </Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default FooterSection;
