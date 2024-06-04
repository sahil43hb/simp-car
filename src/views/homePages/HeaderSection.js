
import { useNavigate  } from "react-router-dom";
// material-ui

import { Box, Button, Grid, Stack, Typography, Container } from '@mui/material';
import Line from "assets/images/landing/Line.png"
// third party
import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';

// project imports

// assets

import carLocationImg from 'assets/images/landing/CarLanding.png';
import ThemeButton from 'ui-component/ThemeButton';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';

// import carLocationImg from 'assets/images/landing/simpcar-auto-abo-schweiz.png';


// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderSection = () => {

    const navigate = useNavigate();

    const headerSX = {
        fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '40px' },
        lineHeight: { lg: '40px', md: '38px', sm: '38px', xs: '30px' }
    };

    const bannerSX = {
        fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '18px' },
        lineHeight: { lg: '22px', md: '20px', sm: '20px', xs: '18px' }
     
    };
     
     

    return (
        <Container sx={{ height: {xs:'100vh',sm:"100vh" ,md:"100vh"}, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0 }}>
            <Grid
                container
               
                sx={{ mt: { xs: 10, sm: 6, md:0 }, mb: { xs: 2.5, md: 10 } }}
            >

                <Grid item xs={12}  md={8} sx={{ display: { xs: 'block',sm:'block',md: 'none',lg:'none' } }}>
                    <Box sx={{ position: 'relative', mt: {xs:4,sm:68,md:4}, zIndex: 9,display:'flex',justifyContent:'center' }}>
                        <img src={carLocationImg} alt="car-location-img"  className='imgCar' />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                            >
                        <Stack spacing={3}>
                                <Typography color="#a6a2bf" sx={{textAlign:{xs:"center",sm:'center',md:"left"},pt:1}}>Grüezi und herzlich willkommen</Typography>
                                    <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h1" sx={headerSX} style={{position:"relative"}}>
                                    Auto Abo. Klar mit <span style={{ color: '#92BD44' }}>Simpcar</span>. One Ein<span style={{width: '100%',position: 'absolute',  top: '52px'}}><img alt='not' src={Line}/></span> Preis , alles drin!
                                    </Typography>

                                    <Typography textAlign={{ xs: 'center', md: 'left' }} variant="p" color="#909090" sx={bannerSX}>
                                    Bleib flexibel und abonniere dein neues Auto bei simpcar anstelle eines teuren Kaufs oder Leasings. Bei uns profitierst du von fairen All-inclusive-Mietpreisen und simplen Prozessen.
                                    </Typography>
                                </Stack>
                            </motion.div>
                        </Grid>

                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
                            >
                                <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                   <Grid item sx={{width:{xs:"40%",md:'30%'}}}>
                                        <ThemeButton title="view cars" OnClick={()=>navigate("/our-car")} />
                                    </Grid>
                                    <Grid item style={{ display: 'flex' }}>
                                    <Avatar sx={{background:'#92BD44',cursor:"pointer"}} onClick={()=>navigate("/how-work")}>
                                            <EmojiObjectsOutlinedIcon style={{ color: '#FFFF', fontSize: '30px' }} />
                                            </Avatar>
                                        <p style={{ paddingLeft: '10px', marginTop: '16px' }}>Wie funktionierts? </p>
                                    </Grid>
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Box sx={{ position: 'relative', mt: 8.75, zIndex: 9 }}>
                        <img src={carLocationImg} alt="car-location-img" style={{ width: '91%' }} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderSection;
