import React, { useEffect, useState } from 'react';
import { Grid, Card } from '@mui/material';
import Header from 'views/user/Book-a-car/HeaderTabs';
import BannerSection from './BannerSection';
import CarInfo from './CarInfo';
import myAxios from 'utils/myAxios';


export default function ProductDetail() {
    const token = window.localStorage.getItem('adminServiceToken');
    const url = window.location.pathname;
    const id = parseInt(url.split("/").pop(), 10);
    const [carDetail, setCarDetail] = useState([]);
    const [carCompany, setCarCompany] = useState([]);
    const [carType, setCarType] = useState([]);
    const [carFurnishing, setCarFurnishing] = useState([]);
    const handleOpen = async () => {
        try {
            const response = await myAxios.post(`/car/${id}`, { token });
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
    },[]);

    const data = carDetail;
    return (
        <Grid>
            <Header />
            <Card style={{ marginTop: '20px' }}>

                <BannerSection speed={`${data.power === null ? 'N/A' : data.power} ps`} 
                transmition={data.transmission === null ? 'N/A' : data.transmission} 
                fuel={data.fuel === null ? 'N/A' : data.fuel}
                company={carCompany === null ? 'N/A' : carCompany.name} 
                model={data.name === null ? 'N/A' : data.name}
                price={data.price === null ? 'N/A' : data.price}
                perMonth='Per Month'
                />

                <CarInfo company={carCompany === null ? 'N/A' : carCompany.name}
                model={data.name === null ? 'N/A' : data.name}
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
            </Card>
        </Grid>
    );
}
