import React, { useEffect, useState } from 'react';
import { Grid, Card } from '@mui/material';
import Header from './HeaderTabs';
import BannerSection from './BannerSection';
import Tabs from './Tabs';
import myAxios from 'utils/myAxios';

export default function CheckOutStep() {
    const token = window.localStorage.getItem('adminServiceToken');
    const url = window.location.pathname;
    const urlParts = url.split('/');

    const id = parseInt(urlParts[2], 10);
    const kiloMeter = parseInt(urlParts[3], 10);
    const monthly = parseInt(urlParts[4], 10);
    const calculatedPrice = parseInt(urlParts[5], 10);

    const [carDetail, setCarDetail] = useState([]);
    const [carCompany, setCarCompany] = useState([]);
    const [carType, setCarType] = useState([]);

    const handleOpen = async () => {
        try {
            const response = await myAxios.post(`/car/${id}`, { token });
            setCarDetail(response.data.car);
            setCarCompany(response.data.car.car_company);
            setCarType(response.data.car.car_type);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleOpen();
    }, []);
    const data = carDetail;

    return (
        <Grid>
            <Header />
            <Card style={{ marginTop: '20px' }}>
                <BannerSection
                    company={carCompany === null ? 'N/A' : carCompany.name}
                    model={data.name === null ? 'N/A' : data.name}
                    power={data.power === null ? 'N/A' : data.power}
                    transmission={data.transmission === null ? 'N/A' : data.transmission}
                    fuel={data.fuel === null ? 'N/A' : data.fuel}
                    price={data.price === null ? 'N/A' : data.price}
                    kiloMeter={kiloMeter === null ? 'N/A' : kiloMeter}
                    monthly={monthly === null ? 'N/A' : monthly}
                    calculatedPrice={calculatedPrice === null ? 'N/A' : calculatedPrice}
                />
                <Tabs
                    company={carCompany === null ? 'N/A' : carCompany.name}
                    model={data.name === null ? 'N/A' : data.name}
                    price={data.price === null ? 'N/A' : data.price}
                    transmission={data.transmission === null ? 'N/A' : data.transmission}
                    fuel={data.fuel === null ? 'N/A' : data.fuel}
                    kiloMeter={kiloMeter === null ? 'N/A' : kiloMeter}
                    monthly={monthly === null ? 'N/A' : monthly}
                    calculatedPrice={calculatedPrice === null ? 'N/A' : calculatedPrice}
                />
            </Card>
        </Grid>
    );
}
