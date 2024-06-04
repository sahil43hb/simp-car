import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import useConfig from 'hooks/useConfig';
import { CircularProgress, Grid } from '@mui/material';

const areaChartOptions = {
    chart: {
        height: 350,
        type: 'area'
    },
    colors: ['#92BD44', 'blue'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'text',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        }
    },
    legend: {
        show: true,
        fontFamily: `'Roboto', sans-serif`,
        position: 'bottom',
        offsetX: 10,
        offsetY: 10,
        labels: {
            useSeriesColors: false
        },
        markers: {
            width: 16,
            height: 16,
            radius: 5
        },
        itemMargin: {
            horizontal: 15,
            vertical: 8
        }
    }
};

const LineChart = ({ monthlyCount }) => {
    const [series, setSeries] = useState([
        {
            name: 'Total :',
            data: monthlyCount
        }
    ]);

    useEffect(() => {
        setSeries((prevState) => [
            {
                ...prevState[0],
                data: monthlyCount
            }
        ]);
    }, [monthlyCount]);

    if (!monthlyCount || monthlyCount.length === 0) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div id="chart">
            <ReactApexChart options={areaChartOptions} series={series} type="area" height={350} />
        </div>
    );
};

export default LineChart;
