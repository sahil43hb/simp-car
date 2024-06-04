// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Container, Link, Stack, Typography, Grid } from '@mui/material';

// third-party
import Slider from 'react-slick';

// project imports
import SubCard from 'ui-component/cards/SubCard';

import productImg from 'assets/images/landing/service-five.png';
import arrowGrater from 'assets/images/landing/icon-arrow.png';

export const frameworks = [
    {
        title: 'Car Loan provide low interest',
        description: 'Car Loan provide low interest many variations of passages of lorem ipsum available the majority have some.'
    },
    {
        title: 'Auto Abo einfach erklärt',
        description: 'Car Loan provide low interest many variations of passages of lorem ipsum available the majority have some.'
    },
    {
        title: 'Auto Abo einfach erklärt',
        description: 'Car Loan provide low interest many variations of passages of lorem ipsum available the majority have some.'
    },
    {
        title: 'Car Loan provide low interest',
        description: 'Car Loan provide low interest many variations of passages of lorem ipsum available the majority have some.'
    },
    {
        title: 'Car Loan provide low interest',
        description: 'Car Loan provide low interest many variations of passages of lorem ipsum available the majority have some.'
    }
];

// =============================|| LANDING - FRAMWORK SECTION ||============================= //

const BlogSection = () => {
    const theme = useTheme();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
            <Container maxWidth={false}>
                <Container sx={{ mb: 6 }} style={{ padding: '0' }}>
                    <Stack spacing={0.25} alignItems="center">
                        <Typography variant="body2" align="center" sx={{ fontSize: { xs: '22px', sm: '24px', md: '32px' } }}>
                            In our <span style={{ color: '#92BD44' }}>SimpCar</span> blog
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
                                        width: '350px !important',
                                        height: 370,
                                        // boxShadow: '0px 4px 15px 0px rgba(3, 99, 242, 0.15)',
                                        border: '1px solid #707070',
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
                                            justifyContent: 'center',
                                            backgroundColor: '#ffffff'
                                        }}
                                    >
                                        <Stack spacing={2} alignItems="center">
                                            <img
                                                src={productImg}
                                                alt="product-img"
                                                style={{ height: '175px', width: '100%', objectFit: 'cover' }}
                                            />

                                            <Grid style={{ textAlign: 'left', padding: '0 20px' }}>
                                                <Typography
                                                    variant="h5"
                                                    style={{ fontSize: '14px', marginBottom: '25px', marginTop: '10px' }}
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="p" style={{ color: '#000' }}>
                                                    {item.description}
                                                </Typography>
                                            </Grid>

                                            <Grid style={{ width: '100%', float: 'left', padding: '0 20px' }}>
                                                <img src={arrowGrater} alt="arrow" style={{ width: '35px' }} />
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

export default BlogSection;
