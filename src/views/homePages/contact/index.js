// material-ui
import { useTheme, styled } from '@mui/material/styles';

// project imports

import AppBar from 'ui-component/extended/AppBar';
import FooterSection from '../FooterSection';
// import ProductCard from './ProductCard';

import HeaderSection from './HeaderSection';
import { Grid } from '@mui/material';
import Forms from './Forms';

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

const Contact = () => {
    const theme = useTheme();

    return (
        <>
            {/* 1. header and hero section */}
            <HeaderWrapper id="home" style={{ backgroundColor: '#edf3e1' }}>
                <AppBar />
                <HeaderSection />
            </HeaderWrapper>

            {/* 1. Product card section  */}
            <Grid >
                <Forms/>
            </Grid>

            {/* . fotter  section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <FooterSection />
            </SectionWrapper>

            {/* <Customization /> */}
            {/* <SidebarModal /> */}
        </>
    );
};

export default Contact;
