import { useEffect, useState } from 'react';

// material-ui

// import { Typography } from '@mui/material';

import { Grid } from '@mui/material';

// project imports
import TotalLineChartCard from 'ui-component/cards/TotalLineChartCard';
import TotalSubscription from './TotalSubscription';
import myAxios from 'utils/myAxios';

// ==============================|| SAMPLE PAGE ||============================== //

const Subscription = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    const token = window.localStorage.getItem('adminServiceToken');
    const [subData, setSubData] = useState([]);
    const [percentage1, setPercentage1] = useState([]);
    const [percentage2, setPercentage2] = useState([]);
    const [percentage3, setPercentage3] = useState([]);
    const [percentage4, setPercentage4] = useState([]);
    const [chartMonth, setChartMonth] = useState([]);
    const [chartMonth1, setChartMonth1] = useState([]);
    const [chartMonth2, setChartMonth2] = useState([]);
    const [chartMonth3, setChartMonth3] = useState([]);
    const handleOpen = async () => {
        try {
            const response = await myAxios.post('/sub', { token });
            // console.log(response.data);
            setSubData(response.data);
            setPercentage1(response.data.totalPercentage);
            setPercentage2(response.data.status0Percentage);
            setPercentage3(response.data.status1Percentage);
            setPercentage4(response.data.status2Percentage);
            setChartMonth(response.data.monthlyData);
            setChartMonth1(response.data.monthlyDataStatus0);
            setChartMonth2(response.data.monthlyDataStatus1);
            setChartMonth3(response.data.monthlyDataStatus2);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleOpen();
    }, []);

const chartData = {
    type: 'area',
    height: 100,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#fff'],
        fill: {
            type: 'solid',
            opacity: 0.4
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        yaxis: {
            min: 0,
            max: 10
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: () => 'Total Status'
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
            data: chartMonth
        }
    ]
};
const chartData1 = {
    type: 'area',
    height: 100,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#fff'],
        fill: {
            type: 'solid',
            opacity: 0.4
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        yaxis: {
            min: 0,
            max: 10
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: () => 'Total Status'
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
            data: chartMonth2
        }
    ]
};
const chartData2 = {
    type: 'area',
    height: 100,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#fff'],
        fill: {
            type: 'solid',
            opacity: 0.4
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        yaxis: {
            min: 0,
            max: 10
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: () => 'Total Status'
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
            data: chartMonth3
        }
    ]
};
const chartData3 = {
    type: 'area',
    height: 100,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#fff'],
        fill: {
            type: 'solid',
            opacity: 0.4
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        yaxis: {
            min: 0,
            max: 10
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: () => 'Total Status'
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
            data: chartMonth1
        }
    ]
};



    return (
        <>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        bgColor="#76A81B"
                        chartData={chartData}
                        value={subData.count}
                        title="Total Subscriptions"
                        percentage={`${percentage1}%`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        chartData={chartData1}
                        bgColor="#57DC52"
                        value={subData.active}
                        title="Active Subscriptions "
                        percentage={`${percentage4}%`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        chartData={chartData2}
                        bgColor="#606060"
                        value={subData.cancelled}
                        title="Cancelled Subscriptions"
                        percentage={`${percentage3}%`}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TotalLineChartCard
                        chartData={chartData3}
                        bgColor="#00994C"
                        value={subData.pending}
                        title="In Process Subscriptions"
                        percentage={`${percentage2}%`}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ marginTop: '30px' }}>
                    <TotalSubscription sub={subData} />
                </Grid>
            </Grid>
        </>
    );
};

export default Subscription;
