// material-ui
import { useTheme, styled } from '@mui/material/styles';

// project imports

import AppBar from 'ui-component/extended/AppBar';
import FooterSection from '../FooterSection';
// import ProductCard from './ProductCard';
import FeatureSection from '../FeatureSection';
import HeaderSection from './HeaderSection';
import { Grid } from '@mui/material';
import Question from './Question';
// import CarSubSection from './CarSubSection';
// import Upgrade from './Upgrade';
// import Questions from './Questions';
// import SliderComp from './SliderComp';

// custom stlye
const HeaderWrapper = styled('div')(({ theme }) => ({
    overflowX: 'hidden',
    overflowY: 'clip'
    // background: '#f4f5f8'
}));

const SectionWrapper = styled('div')({
    paddingTop: 100,
    paddingBottom: 100
});

// =============================|| LANDING MAIN ||============================= //

const FaQs = () => {
    const theme = useTheme();

    return (
        <>
            {/* 1. header and hero section */}
            <HeaderWrapper id="home" style={{ backgroundColor: '#edf3e1' }}>
                <AppBar />
                <HeaderSection />
            </HeaderWrapper>

            <SectionWrapper style={{ backgroundColor: '#FFFF' }}>
            <Question/>
        </SectionWrapper>

            {/* 1. Product card section 
            <Grid style={{ backgroundColor: '#FFFF' }}>
                <CarSubSection />
            </Grid>

            <SectionWrapper sx={{ backgroundColor: '#FFFF', paddingTop: '100px' }}>
                <Grid sx={{ paddingTop: '100px' }}>
                    <FeatureSection />
                </Grid>
            </SectionWrapper>

            <HeaderWrapper>
                <Upgrade />
            </HeaderWrapper>
            <Grid>
             
                <Questions />
            </Grid>

            <Grid>
                <SliderComp />
            </Grid> */}

            {/* . fotter  section */}
            <Grid sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default', marginTop: '40px' }}>
                <FooterSection />
            </Grid>

            
        </>
    );
};

export default FaQs;
