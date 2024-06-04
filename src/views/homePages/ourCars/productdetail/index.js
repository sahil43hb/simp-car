// material-ui
import { useTheme, styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import myAxios from 'utils/myAxios';

// project imports

import AppBar from 'ui-component/extended/AppBar';
import FooterSection from '../FooterSection';

import HeaderSection from '../HeaderSection';
import BannerSection from './BannerSection';
import CarInfo from './CarInfo';

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
    const id = parseInt(url.split("/").pop(), 10);
    const [carDetail, setCarDetail] = useState([]);
    const [carCompany, setCarCompany] = useState([]);
    const [carType, setCarType] = useState([]);
    const [carFurnishing, setCarFurnishing] = useState([]);
    const handleOpen = async () => {
        try {
            const response = await myAxios.post(`/landing_car/${id}`);
            setCarDetail(response.data.car);
            setCarCompany(response.data.car.car_company);
            setCarType(response.data.car.car_type);
            setCarFurnishing(response.data.furnishing);
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        handleOpen();
    },[id]);
    const data = carDetail;

    return (
        <>
            {/* 1. header and hero section */}
            <HeaderWrapper id="home" style={{ backgroundColor: '#f4f5f8' }}>
                <AppBar />
                {/* <BannerSection /> */}
                {/* <HeaderSection /> */}
            </HeaderWrapper>

            {/* . banner Slider  section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100' }}>
                <BannerSection speed={`${data.power === null ? 'N/A' : data.power} ps`} 
                transmition={data.transmission === null ? 'N/A' : data.transmission} 
                fuel={data.fuel === null ? 'N/A' : data.fuel}
                company={carCompany === null ? 'N/A' : carCompany.name} 
                model={data.name === null ? 'N/A' : data.name}
                price={data.price === null ? 'N/A' : data.price}
                perMonth='Per Month' 
                />
            </SectionWrapper>

            {/* . banner Slider  section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <CarInfo company={carCompany === null ? 'N/A' : carCompany.name}
                model={data.transmission === null ? 'N/A' : data.name}
                description={data.description === null ? 'N/A' : data.description}
                type={carType === null ? 'N/A' : carType.name}
                tranmission={data.transmission === null ? 'N/A' : data.transmission}
                engine={data.engine === null ? 'N/A' : data.engine}
                fuel={data.fuel === null ? 'N/A' : data.fuel}
                drive={data.drive === null ? 'N/A' : data.drive}
                seats={data.seats === null ? 'N/A' : data.seats}
                furnishing={carFurnishing === null ? 'N/A' : carFurnishing}
                id={id}
                />
            </SectionWrapper>

            {/* . fotter  section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <FooterSection />
            </SectionWrapper>
        </>
    );
};

export default ProductDetal;
