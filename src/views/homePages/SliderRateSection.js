// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Container, Link, Stack, Typography, Grid } from '@mui/material';

// third-party
import Slider from 'react-slick';

// project imports
import SubCard from 'ui-component/cards/SubCard';

import StarIcon from '@mui/icons-material/Star';

export const frameworks = [
    {
        title: 'Vielen Dank für die angenehme Zusammenarbeit, die kompetetnte Beratung und dasoptimale wohlfühl Rundumpacket. Sie werden unsere erste wahl bleiben für die weitere Zukunft. Gerne empfehlen wir sie weiter! Vielen herzlichen Dank!',
        ratingName: 'Agnes Hämmerli',
        ratingSubName: 'Bellach',
        rating: '5'
    },
    {
        title: 'Ich habe schon seit längerer Zeit unsere Firmenautos als Auto Abo bei der simpcar. Dies ist die passende Lösung für unsere Flotte. Zudem war dass Angebot der simpcar einfach das Beste. Ich kann die Firma nur empfehlen.',
        ratingName: 'Robert Fankhauser',
        ratingSubName: 'Bern',
        rating: '4'
    },
    {
        title: 'Super sache, bin sehr zufrieden.',
        ratingName: 'Christian Egger',
        ratingSubName: 'Zürich',
        rating: '5'
    }
];

// =============================|| LANDING - FRAMWORK SECTION ||============================= //

const SliderRateSection = () => {
    const theme = useTheme();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Container maxWidth={false} style={{ backgroundColor: '#F2FBE1', padding: '50px 0' }}>
                <Container sx={{ mb: 1 }} style={{ padding: '0' }}>
                    <Stack spacing={0.25} alignItems="center">
                        <Typography variant="body2" align="center" sx={{ fontSize: { xs: '22px', sm: '24px', md: '32px' } }}>
                        Was Kunden über <span style={{ color: '#92BD44' }}>SimpCar</span>sagen
                        </Typography>
                        <Typography variant="body2" align="center" sx={{ pt: 1, fontSize: { xs: '14px', sm: '14px', md: '16px' } }}>
                        Wir messen unseren Erfolg an der Zufriedenheit unserer Kunden.
                        </Typography>
                    </Stack>

                    <Box
                        style={{ marginTop: '50px' }}
                        sx={{
                            overflow: 'hidden',
                            div: {
                                textAlign: 'center'
                            },
                            '.slick-track': {
                                display: { xs: 'flex', xl: 'inherit' }
                            },
                            '& .slick-dots': {
                                position: 'initial',
                                mt: 4,
                                '& li button:before': {
                                    fontSize: '0.75rem'
                                },
                                '& li.slick-active button:before': {
                                    opacity: 1,
                                    color: 'primary.main'
                                }
                            }
                        }}
                    >
                        <Slider {...settings}>
                            {frameworks.map((item, index) => (
                                <SubCard
                                    content={false}
                                    sx={{
                                        width: '500px !important',
                                        height: 200,
                                        // boxShadow: '0px 4px 15px 0px rgba(3, 99, 242, 0.15)',
                                        border: 'none',
                                        display: 'inline-flex !important',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        my: 1,
                                        borderRadius: 2,
                                        cursor: 'pointer',
                                        backgroundColor: '#FFFFFF',
                                        bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.100',
                                        '&:hover': {
                                            bgcolor: theme.palette.mode === 'dark' ? 'primary.main' : 'primary.light'
                                        }
                                    }}
                                >
                                    <Box
                                        component={Link}
                                        target="_blank"
                                        underline="none"
                                        sx={{
                                            flex: 1,
                                            height: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        style={{ backgroundColor: 'white' }}
                                    >
                                        <Stack spacing={2} alignItems="center">
                                            {/* <Stack sx={{ width: 'auto', height: 48 }} alignItems="center" justifyContent="center">
                                           
                                            <p>{item.title}</p>
                                        </Stack> */}

                                            <Typography
                                                variant="body2"
                                                sx={{ fontSize: '14px', textAlign: 'left', padding: {xs:'20px 175px 0 5px',sm:'20px 25px 0 25px'} }}
                                            >
                                                {item.title}
                                            </Typography>

                                            <Grid container spacing={2} style={{ padding: '0 18px' }}>
                                                <Grid item xs={2} style={{ paddingTop: '0' }}>
                                                    <Grid className="ratingSec">
                                                        <StarIcon style={{ color: '#FBBD05', fontSize: '16px' }} />
                                                        <Typography variant="body2" style={{ fontSize: '14px' }}>
                                                            {item.rating}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={10} style={{ paddingTop: '0', textAlign: 'left' }}>
                                                    <Typography variant="body2" style={{ marginTop: '5px' }}>
                                                        {item.ratingName}
                                                    </Typography>
                                                    <Typography variant="body2" style={{ color: '#333333' }}>
                                                        {item.ratingSubName}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </Box>
                                </SubCard>
                            ))}
                        </Slider>
                    </Box>
                </Container>
            </Container>
        </>
    );
};

export default SliderRateSection;
