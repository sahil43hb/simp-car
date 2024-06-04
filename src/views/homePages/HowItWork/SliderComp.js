import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Container, Grid, useMediaQuery } from '@mui/material';

// project import
import MainCard from 'ui-component/cards/MainCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// third-party
import Slider from 'react-slick';
import Lightbox from 'react-18-image-lightbox';

// assets
import prod1 from 'assets/images/landing/Logo1.jpg';
import prod2 from 'assets/images/landing/Logo2.jpg';
import prod3 from 'assets/images/landing/Logo3.jpg';
import prod4 from 'assets/images/landing/Logo4.jpg';
import prod5 from 'assets/images/landing/Logo5.jpg';
import prod6 from 'assets/images/landing/Logo6.jpg';
import prod7 from 'assets/images/landing/Logo7.jpg';
import prod8 from 'assets/images/landing/Logo8.jpg';
import prod9 from 'assets/images/landing/Logo9.jpg';
import prod10 from 'assets/images/landing/Logo10.jpg';
import prod11 from 'assets/images/landing/Logo11.jpg';
import useConfig from 'hooks/useConfig';


// const prodImage = require.context('assets/images/e-commerce', true);

// ==============================|| PRODUCT DETAILS - IMAGES ||============================== //

const SliderComp = ({ product }) => {
    const theme = useTheme();
    const { borderRadius } = useConfig();
    const products = [ prod2,prod1, prod3, prod4, prod5, prod6, prod7, prod8,prod9,prod10,prod11];

    const matchDownLG = useMediaQuery(theme.breakpoints.up('md'));
    // const initialImage = product.image ? prodImage(`./${product.image}`) : '';

    const [selected, setSelected] = useState(prod1);
   

    const images = [prod2, prod1, prod3, prod4, prod5, prod6, prod7, prod8,prod9,prod10,prod11];

    const lgNo = matchDownLG ? 5 : 2;

    const settings = {
        dots: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '0px',
        slidesToShow: products.length > 3 ? lgNo : products.length
    };

    return (
       
        <Container sx={{ display: 'flex', justifyContent: 'center',  mb: { xs: 28, sm: 28, md: 28.75 },alignItems: 'center', p: 0 }} >
       
            <Grid container alignItems="center" justifyContent="center" spacing={gridSpacing}>
            <Grid  item xs={11} sm={12} md={12} lg={12} xl={12}>
            <p style={{fontSize:"21px" ,textAlign:"center"}}>
            Viele Automarken im Auto-Abo
            </p>
            </Grid>
                <Grid item xs={11} sm={7} md={9} lg={10} xl={8}>
                
                    <Slider {...settings}>
                        {products.map((item, index) => (
                            <Box >
                              
                                <img src={item} alt='not' style={{ margin: '0 auto', cursor: 'pointer' }}/>
                            </Box>
                        ))}
                    </Slider>
                </Grid>
            </Grid>
           
            </Container>
      
        
    );
};

SliderComp.propTypes = {
    // product: PropTypes.object
};

export default SliderComp;
