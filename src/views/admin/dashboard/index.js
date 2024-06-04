import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import LineChart from './LineChart';
import MainCard from 'ui-component/cards/MainCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import SecondChart from './SecondChart';
import SatisfactionChartCard from '../pieChart/SatisfactionChartCard';
import { useTheme } from '@mui/material/styles';
import useConfig from 'hooks/useConfig';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import Cash from "assets/images/Cash.png";
import Payment from "assets/images/Payment.png";

// third party
import ApexCharts from 'apexcharts';
import IconNumberCard from 'ui-component/cards/IconNumberCard';
import chartData from '../pieChart/chart-data';
import { textAlign } from '@mui/system';
import TotalReceive from './TotalReceive';
import SalesAndExpensesChart from './SalesAndExpensesChart';
import LastRRegisterTable from './LastRRegisterTable';
import SliderComp from './Slider';


const Main = () => {
    const theme = useTheme();
    const { navType } = useConfig();

    const backColor = theme.palette.background.paper;
    const secondary = theme.palette.secondary.main;
    const error = theme.palette.error.main;
    const primary = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;
    const orange = theme.palette.orange.main;
    const orangeDark = theme.palette.orange.dark;

    useEffect(() => {
        const newSatisfactionChartCardData = {
            ...chartData.SatisfactionChartCardData.options,
            theme: {
                monochrome: {
                    color: orangeDark
                }
            },
            stroke: {
                colors: [backColor]
            }
        };

        ApexCharts.exec(`satisfaction-chart`, 'updateOptions', newSatisfactionChartCardData);
    }, [navType, backColor, secondary, error, primary, successDark, orange, orangeDark]);

    return (
        <>
            <Grid container spacing={2}>
           
                <Grid item xs={12} md={6} lg={6}>
                    <MainCard title="Transfer Statistics">
                        <LineChart />
                    </MainCard>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <TotalGrowthBarChart />
                </Grid>

                <Grid item xs={12} md={6} lg={6} sx={{ marginTop: { xs: '0px', sm: '0px', md: '-130px', lg: '-130px' } }}>
                    <MainCard title="Customer Satisfaction">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={9}>
                                <SatisfactionChartCard chartData={chartData.SatisfactionChartCardData} />
                            </Grid>
                            <Grid item xs={12} sm={2} container spacing={2} sx={{ textAlign: 'right', marginTop: '25px',justifyContent:{xs:"left",sm:"right"} }}>
                               
                            
                            <Grid item sx={{display:"block",}}>
                            <Typography variant="body2" sx={{ fontSize: '14px',paddingTop:{xs:"10px",sm:"0px"} }}>
                                    <FiberManualRecordIcon style={{ fontSize: '10px', color: '#92BD44' }} /> 30 days
                                </Typography>
                                <Typography variant="body2" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '12px' }}>
                                    0
                                </Typography>
                                </Grid>
                                <Grid item  sx={{display:"block"}}>
                                <Typography variant="body2" style={{ fontSize: '14px', marginTop: '10px' }}>
                                    <FiberManualRecordIcon style={{ fontSize: '10px', color: '#BCE179' }} /> 15 days
                                </Typography>
                                <Typography variant="body2" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '12px' }}>
                                    0
                                </Typography>
                                </Grid>

                                <Grid item  sx={{display:"block"}}>
                                <Typography variant="body2" style={{ fontSize: '14px', marginTop: '10px' }}>
                                    <FiberManualRecordIcon style={{ fontSize: '10px', color: '#D4ECA9' }} /> 7 days
                                </Typography>
                                <Typography variant="body2" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '12px' }}>
                                    0
                                </Typography>
                                </Grid>

                                <Grid item  sx={{display:"block"}}>
                                <Typography variant="body2" style={{ fontSize: '14px', marginTop: '10px' }}>
                                    <FiberManualRecordIcon style={{ fontSize: '10px', color: '#ECF3DF' }} /> 1 days
                                </Typography>
                                <Typography variant="body2" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '12px' }}>
                                    0
                                </Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        
                    </MainCard>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <SecondChart />
                </Grid>
              

            <Grid item xs={12} lg={3} sm={6}>
            <IconNumberCard title="Total Income: $30,820" primary="15310" secondary="Total Sales" price="35.45%" color="#76A81B" bgcolor="#ECF3DF" iconPrimary={Cash} />
        </Grid>
        <Grid item xs={12} lg={3} sm={6}>
        <IconNumberCard title="Total Income: $18,250" primary="984" secondary="New Orders"  price="10.25%" color="#34C73B" bgcolor="#e5f5e4" iconPrimary={Payment} />
    </Grid>
    <Grid item xs={12} lg={6}>
    <TotalReceive />
</Grid>

<Grid item xs={12} md={12} lg={12}>
<MainCard title="Sales and Expenses">
    <SalesAndExpensesChart />
</MainCard>
</Grid>
<Grid item xs={12} md={12} lg={12}>
<LastRRegisterTable />
</Grid>

 </Grid>
        </>
    );
};

export default Main;
