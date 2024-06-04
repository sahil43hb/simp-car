import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, CircularProgress } from '@mui/material';

// third party
import ApexCharts from 'apexcharts';

// project imports

import useConfig from 'hooks/useConfig';

import SeoChartCard2 from 'ui-component/cards/SeoChartCard2';

import { gridSpacing } from 'store/constant';

// assets

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// ================================|| CHART ||================================ //

const SecondChart = (props) => {
    const { totalPrice, totalDueDays, totalDueInvoice, totalDue, monthlyInvoiceCount } = props;

    const chartData = {
        type: 'area',
        height: 125,

        options: {
            chart: {
                id: 'visit-chart',
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 0.3
            },
            markers: {
                size: 4,
                strokeWidth: 2,
                hover: {
                    size: 6
                }
            },
            stroke: {
                curve: 'straight',
                width: 3
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: () => 'Total :'
                    }
                },
                marker: {
                    show: false
                }
            }
        },
        series: [
            {
                name: 'series1',
                data: monthlyInvoiceCount
            }
        ]
    };

    const theme = useTheme();
    const { navType } = useConfig();
    const backColor = theme.palette.background.paper;
    const secondary = theme.palette.secondary.main;
    const error = theme.palette.error.main;
    const primary = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;
    const orange = theme.palette.orange.main;
    const orangeDark = theme.palette.orange.dark;

    React.useEffect(() => {
        const newSeoChartCardData1 = {
            ...chartData.options,
            colors: ['#92BD44', '#71D875'],
            tooltip: {
                theme: navType === 'dark' ? 'dark' : 'light'
            }
        };

        ApexCharts.exec(`visit-chart`, 'updateOptions', newSeoChartCardData1);
    }, [navType, backColor, secondary, error, primary, successDark, orange, orangeDark]);

    return (
        <Grid container spacing={gridSpacing} alignItems="center">
            <Grid item xs={12} sm={12} lg={12}>
                    <SeoChartCard2
                        chartData={chartData}
                        value="Invoices"
                        title={`CHF ${totalPrice}`}
                        totalDueDays={totalDueDays}
                        totalDueInvoice={totalDueInvoice}
                        totalDue={totalDue}
                        icon={<ArrowDropDownIcon color="error" />}
                    />
            </Grid>
        </Grid>
    );
};

export default SecondChart;
