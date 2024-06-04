import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project imports
import useConfig from 'hooks/useConfig';
import value from 'assets/scss/_themes-vars.module.scss';

// chart options
const areaChartOptions = {
    chart: {
        height: 350,
        type: 'area'
    },
    colors: ["red", "green"],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'text',
        categories: ["mon",  ]
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

// ==============================|| AREA CHART ||============================== //

const LineChart = () => {
    const theme = useTheme();
    const { navType } = useConfig();

    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const grey200 = theme.palette.grey[200];

    const [series] = useState([
        {
            name: 'Series 1',
            data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
            name: 'Series 2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }
    ]);

    const [options, setOptions] = useState(areaChartOptions);
    React.useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: ["#71D875", theme.palette.primary.main],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary]
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
    }, [navType, primary, darkLight, grey200, theme]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    );
};

export default LineChart;
