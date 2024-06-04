// material-ui
import { useTheme, styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
// project imports
import Header from './Header';
import BannerSection from './BannerSection';
import Tabs from './Tabs';
import myAxios from 'utils/myAxios';

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

const ProductDetal = () => {
    const theme = useTheme();
    const url = window.location.pathname;
    const id = parseInt(url.split('/').pop(), 10);
    const [carDetail, setCarDetail] = useState([]);
    const [carCompany, setCarCompany] = useState([]);
    const [carType, setCarType] = useState([]);

    const handleOpen = async () => {
        try {
            const response = await myAxios.post(`/landing_car/${id}`);
            setCarDetail(response.data.car);
            setCarCompany(response.data.car.car_company);
            setCarType(response.data.car.car_type);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleOpen();
    }, [id]);
    const data = carDetail;

    return (
        <>
            {/* 1. header and hero section */}
            <HeaderWrapper id="home" sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100' }}>
                <Header />
            </HeaderWrapper>

            {/* . banner  section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100' }}>
                <BannerSection
                    company={carCompany === null ? 'N/A' : carCompany.name}
                    model={data.name === null ? 'N/A' : data.name}
                    power={data.name === null ? 'N/A' : data.power}
                    transmission={data.transmission === null ? 'N/A' : data.transmission}
                    fuel={data.fuel === null ? 'N/A' : data.fuel}
                    price={data.price === null ? 'N/A' : data.price}
                />
            </SectionWrapper>

            {/* . Tabs  section */}
            <SectionWrapper>
                <Tabs company={carCompany === null ? 'N/A' : carCompany.name} 
                model={data.name === null ? 'N/A' : data.name} 
                price={data.price === null ? 'N/A' : data.price} 
                transmission={data.transmission === null ? 'N/A' : data.transmission} 
                fuel={data.fuel === null ? 'N/A' : data.fuel} 
                />
            </SectionWrapper>
        </>
    );
};

export default ProductDetal;
