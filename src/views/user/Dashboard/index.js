import React, { useEffect, useState } from 'react';
import UserList from './UserList';
import { CardContent, Grid, CircularProgress } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import LineChart from './LineChart';
import SecondChart from './SecondChart';
import myAxios from 'utils/myAxios';

const Dashboard = () => {
    const [subData, setSubData] = useState([]);
    const [totalPrice, setTotalPrice] = useState('');
    const [totalDuedays, setTotalDueDays] = useState('');
    const [totalDueInvoice, setTotalDueInvoice] = useState('');
    const [totalDue, setTotalDue] = useState('');
    const [monthlyCount, setMonthlyCount] = useState('');
    const [monthlyInvoiceCount, setMonthlyInvoiceCount] = useState('');
    const handleOpen = async () => {
        const token = window.localStorage.getItem('adminServiceToken');
        try {
            const response = await myAxios.get(`/dashboard`, { token });
            // console.log(response.data.totalDueInvoice);
            setTotalPrice(response.data.totalPrice);
            setTotalDueDays(response.data.totalDueDays);
            setTotalDueInvoice(response.data.totalDueInvoice);
            setTotalDue(response.data.totalDue);
            setMonthlyCount(response.data.monthlyCount);
            setMonthlyInvoiceCount(response.data.monthlyInvoiceCount);
            setSubData(response.data.invoice);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleOpen();
    }, []);
    console.log(monthlyInvoiceCount);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
                <MainCard title="Subscriptions Statistics">
                    <LineChart monthlyCount={monthlyCount} />
                </MainCard>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <MainCard title="Invoice Statistics ">
                    {monthlyInvoiceCount === 0 ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <SecondChart
                            totalPrice={totalPrice}
                            totalDueDays={totalDuedays}
                            totalDueInvoice={totalDueInvoice}
                            monthlyInvoiceCount={monthlyInvoiceCount}
                            totalDue={totalDue}
                        />
                    )}
                </MainCard>
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                <MainCard title="Recent Transaction Table" content={false}>
                    <CardContent sx={{ p: 0 }}>
                        <UserList subData={subData} />
                    </CardContent>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
