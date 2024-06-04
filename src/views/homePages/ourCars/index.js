// material-ui
import { useTheme, styled } from '@mui/material/styles';

// project imports

import AppBar from 'ui-component/extended/AppBar';
import FooterSection from './FooterSection';
import ProductCard from './ProductCard';

import HeaderSection from './HeaderSection';
import { Grid } from '@mui/material';

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
            <HeaderWrapper id="home" style={{ backgroundColor: '#f4f5f8' }}>
                <AppBar />
                <HeaderSection />
            </HeaderWrapper>

            {/* 1. Product card section 
            <Grid style={{ backgroundColor: '#f4f5f8',zIndex:0 }}>
                <ProductCard />
            </Grid> */}

            {/* . fotter  section */}
            <Grid sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <FooterSection />
            </Grid>

            {/* <Customization /> */}
            {/* <SidebarModal /> */}
        </>
    );
};

export default Landing;
