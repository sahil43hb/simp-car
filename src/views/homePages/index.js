// material-ui
import { useTheme, styled } from '@mui/material/styles';

// project imports
import AppBar from 'ui-component/extended/AppBar';
import HeaderSection from './HeaderSection';
import CardSection from './CardSection';
import FeatureSection from './FeatureSection';
import FooterSection from './FooterSection';
import GoogleReview from './GoogleReview';
import TabsSection from './TabsSection';
import SliderRateSection from './SliderRateSection';
import WhatWeDoSection from './WhatWeDoSection';
import ImageSection from './ImageSection';
import bgShape from 'assets/images/landing/shape.png';
import BlogSection from './BlogSection';
// import Customization from 'layout/admin/Customization';

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

const Landing = () => {
    const theme = useTheme();

    return (
        <>
            {/* 1. header and hero section */}
            <HeaderWrapper id="home" className='bgBannerImg'  >
                <AppBar />
                <HeaderSection />
            </HeaderWrapper>

            {/* 2. google review section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <GoogleReview />
            </SectionWrapper> 

            {/* 3. card section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default',paddingTop:'0px' }}>
                <CardSection />
            </SectionWrapper>

            {/* 5. feature detail section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <FeatureSection />
            </SectionWrapper>

            {/* 4. tabs card section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <TabsSection />
            </SectionWrapper>

            

            {/* 6. Slider rating section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default',paddingTop:'0px' }}>
                <SliderRateSection />
            </SectionWrapper>

            {/* 7. blog section 
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <BlogSection />
            </SectionWrapper> */}
            {/* 8. what we do  section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <WhatWeDoSection />
            </SectionWrapper>

            {/* 8. image and google Playy and App store  section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <ImageSection />
            </SectionWrapper>

            {/* 8. iamage and google Playy and App store  section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <FooterSection />
            </SectionWrapper>
      
           
        </>
    );
};   

export default Landing;
