import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';
import { AiFillCaretDown } from 'react-icons/ai';
// project import
import useConfig from 'hooks/useConfig';
import { Divider, Grid, Typography } from '@mui/material';

// chart options
const columnChartOptions = {
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Jan', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter(val) {
                return `$ ${val} thousands`;
            }
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
    },
    responsive: [
        {
            breakpoint: 600,
            options: {
                yaxis: {
                    show: false
                }
            }
        }
    ]
};

const data = [
    { name: 'Total Sales', price: '$30,820', color: '#00C853' },
    { name: 'Total Receipts', price: '$18,250', color: '#76A81B' },
    { name: 'Total Expenses', price: '$12,570', color: '#6A707E' }
];

// ==============================|| COLUMN CHART ||============================== //

const SalesAndExpensesChart = () => {
    const theme = useTheme();
    const { navType } = useConfig();

    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const grey200 = theme.palette.grey[200];

    const secondary = '#A6FF00';
    const primaryMain = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;

    const [series] = useState([
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 55, 44]
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 101, 78]
        },
        {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 45, 35]
        }
    ]);

    const [options, setOptions] = useState(columnChartOptions);

    React.useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: ['#A6FF00', primaryMain, successDark],
            xaxis: {
                labels: {
                    style: {
                        colors: ['primary', primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {
                borderColor: navType === 'dark' ? darkLight + 20 : grey200
            },
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            },
            legend: {
                labels: {
                    colors: 'grey.500'
                }
            }
        }));
    }, [navType, primary, darkLight, grey200, secondary, primaryMain, successDark]);

    return (
        <Grid container spacing={2}>
           
            <Grid item xs={12} sm={10}>
                <div id="chart">
                    <ReactApexChart options={options} series={series} type="bar" height={350} />
                </div>
            </Grid>
            <Grid item xs={2} sx={{display:{xs:"none",sm:"block"}}}>
                <Typography sx={{ textAlign: 'center', paddingBottom: '40px' }}>
                    Last 30 days <AiFillCaretDown />
                </Typography>
                {data.map((data) => (
                    <Grid sx={{ paddingLeft: {xs:'0px',sm:"0px",md:"70px"} }}>
                        <Typography sx={{ pt: '10px' }}>{data.name}</Typography>
                        <Typography color={data.color}>{data.price}</Typography>
                        <Divider sx={{ pt: '10px', pb: '10px' }} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default SalesAndExpensesChart;
