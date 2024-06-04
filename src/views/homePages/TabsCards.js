import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import myAxios from 'utils/myAxios';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Stack, CardMedia } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';



// assets
import carImage from 'assets/images/landing/offer/car-img.png';
import correctImg from 'assets/images/landing/offer/correct.png';
import speedImage from 'assets/images/landing/offer/speed-img.png';
import munallyImage from 'assets/images/landing/offer/manuelly-img.png';
import diselImage from 'assets/images/landing/offer/diesel-img.png';
import ThemeButton from 'ui-component/ThemeButton';
import { Box, width } from '@mui/system';

const OfferCard = ({
    icon,
    heading,
    title,
    caption,
    image,
    textDetail,
    name,
    detailPoint,
    monthPricetxt,
    mothPriceRange,
    perMonth,
    speedImg,
    speedTxt,
    manuallyImg,
    manuallyTxt,
    diselImg,
    diselTxt,
    buttonText,
    id,
}) => {
    const theme = useTheme();
    const AvaterSx = { background: 'transparent', color: theme.palette.secondary.main, width: '100%', height: '120px' };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product-detail-page1/${id}`);
      };
    return (
        <FadeInWhenVisible>
            <SubCard
                sx={{
                    bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.100',
                    borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.divider,
                    '&:hover': { boxShadow: 'none' },
                    height: '100%',
                    backgroundColor:'white !important',
                    boxShadow: 'rgb(221, 221, 221) 0px 0px 10px',
                   
                    width: {xs:'93vw',sm:"41vw",md:"42vw",lg:"23vw",xl:'100%'},
                    marginLeft: {xs:'-42px',sm:'0px',md:'0px',lg:'0px', xl:'0px'},
                    
                }}
                className="productCard"
               
            >
           
                <Stack spacing={2} onClick={handleClick}  >
                    <Stack spacing={2} style={{padding:'15px 10px'}}>
                        <Typography variant="p" sx={{ fontWeight: 500 }} style={{ display: 'flex' }}>
                            <img src={icon} alt="icon" style={{ width: '20px', marginRight: '10px' }} />
                            {heading}
                        </Typography>
                    </Stack>

                    <Avatar variant="rounded" sx={AvaterSx} style={{ margin: '0 auto',maxHeight:'150px' }}>
                        <CardMedia component="img" src={image} alt="Beautiful User Interface" className='mainImg'/>
                    </Avatar>

                    <Grid item xs={12} >
                        <Grid container spacing={2} className='cardTitleSec' >
                            <Grid item xs={6} style={{ textAlign: 'left' }}>
                                <Typography variant="caption" className='whiteColor' style={{ fontSize: '13px' }}>
                                    {textDetail}-{name} 
                                </Typography>
                                <Typography variant="h6" className='whiteColor' style={{ fontSize: '15px' }}>
                                    {detailPoint}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'right' }}>
                                <Typography variant="caption" className='whiteColor' style={{ fontSize: '19px' }}>
                                    {monthPricetxt}
                                    <span className='whiteColor' style={{ color: '#92BD44', marginLeft: '5px' }}>{mothPriceRange}</span>
                                </Typography>
                                <Typography variant="h6" className='whiteColor' style={{ fontSize: '13px' }}>
                                    {perMonth}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} style={{padding:'0px 10px'}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={4} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={speedImg} alt="appeed-img" />
                                <Typography variant="body2" style={{ fontSize: '12px', margin: '0 0  0 5px' }}>
                                    {speedTxt}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={4} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={manuallyImg} alt="munally-img" />
                                <Typography variant="body2" style={{ fontSize: '12px', margin: '0 0  0 5px' }}>
                                    {manuallyTxt}
                                </Typography>
                            </Grid>

                            <Grid item xs={6} sm={6} md={4} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={diselImg} alt="munally-img" />
                                <Typography variant="body2" style={{ fontSize: '12px', margin: '0 0  0 5px' }}>
                                    {diselTxt}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} style={{padding:'20px 20px'}}>
                        <ThemeButton title={buttonText} OnClick={handleClick}/>
                    </Grid>
                </Stack>
            </SubCard>
        </FadeInWhenVisible>
    );
};

OfferCard.propTypes = {
    icon: PropTypes.string,
    heading: PropTypes.string,
    title: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.string,
    textDetail: PropTypes.string,
    name: PropTypes.string,
    detailPoint: PropTypes.string,
    monthPricetxt: PropTypes.string,
    mothPriceRange: PropTypes,
    perMonth: PropTypes.string,
    speedImg: PropTypes.string,
    speedTxt: PropTypes.string,
    manuallyImg: PropTypes.string,
    manuallyTxt: PropTypes.string,
    diselImg: PropTypes.string,
    diselTxt: PropTypes.string,
    buttonText: PropTypes.string,
    id: PropTypes.number,
};

// =============================|| LANDING - CARD SECTION ||============================= //

const TabsCards = () => {
    const theme = useTheme();
    // const token = window.localStorage.getItem('adminServiceToken');
    const [carData, setCarData] = useState([]);
    const handleOpen = async () => {
        try {
            const response = await myAxios.get('/landing_cars');
            console.log(response.data);
            setCarData(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        handleOpen();
    },[]);
    // const cardSX = {
    //     overflow: 'hidden',
    //     position: 'relative',
    //     border: 'none',
    //     '&:after': {
    //         content: '""',
    //         position: 'absolute',
    //         width: 150,
    //         height: 150,
    //         border: `35px solid ${theme.palette.background.paper}`,
    //         opacity: theme.palette.mode === 'dark' ? 0.1 : 0.4,
    //         borderRadius: '50%',
    //         top: -72,
    //         right: -63
    //     },
    //     '&:before': {
    //         content: '""',
    //         position: 'absolute',
    //         width: 150,
    //         height: 150,
    //         border: `2px solid ${theme.palette.background.paper}`,
    //         opacity: theme.palette.mode === 'dark' ? 0.05 : 0.21,
    //         borderRadius: '50%',
    //         top: -97,
    //         right: -3
    //     },
    //     '& .MuiCardContent-root': {
    //         padding: '20px 38px 20px 30px'
    //     }
    // };
    return (
        <Container   justifyContent="center">
               <Grid container
                     xs={12}
                        
                        justifyContent="center"
                        textAlign="center"
                        spacing={5}
                        sx={{ '&> .MuiGrid-root > div': { height: '100%' }, }}
                    >
                        {carData.map((data, index) => (
                            <Grid item lg={4} md={5} sm={5} xs={12} key={index}  sx={{ marginRight:{xs:'-30px',sm:"50px",md:"75px",lg:"0px"}}}>
                                <OfferCard
                                    textDetail={data.car_company === null ? 'N/A' : data.car_company.name}
                                    name={data.name}
                                    icon={correctImg}
                                    heading="Verfügbar in 14 Tagen"
                                    buttonText="Angebot ansehen"
                                    image={carImage}
                                    speedImg={speedImage}
                                    manuallyImg={munallyImage}
                                    diselImg={diselImage}
                                    detailPoint={`GLC ${data.engine}`}
                                    monthPricetxt="ab"
                                    mothPriceRange={`${data.price}.-`}
                                    manuallyTxt={data.transmission}
                                    diselTxt={data.fuel}
                                    perMonth="Pro Monat"
                                    speedTxt={`${data.power} ps`}
                                    id={data.id}
                                    {...data}
                                />
                            </Grid>
                        ))}
                    </Grid>
                
         
        </Container>
    );
};

export default TabsCards;
