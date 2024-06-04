import * as React from 'react';
import { useNavigate } from 'react-router-dom';
// material-ui
import { Typography, Grid, IconButton } from '@mui/material';
import { FiChevronRight } from 'react-icons/fi';
// project imports
import Chip from 'ui-component/extended/Chip';
import car from 'assets/images/car.png';

export default function Subscriptions(props) {
    const { sub } = props;
    const navigate = useNavigate();

    return (
        <>
            {sub && Array.isArray(sub) && sub.length > 0 ? (
                sub.map((subscription) => (
                    <Grid
                        key={subscription.id ?? '1'}
                        container
                        spacing={3}
                        style={{
                            background: '#FAFAFA',
                            borderRadius: '10px',
                            border: '1px solid rgb(151 151 151 / 38%)',
                            marginLeft: '0px',
                            marginBottom: '45px',
                            marginTop: '-30px'
                        }}
                    >
                        <Grid
                            container
                            spacing={3}
                            style={{
                                background: '#FAFAFA',
                                borderRadius: '10px',
                                border: '1px solid #979797',
                                marginLeft: '-13px',
                                paddingBottom: '10px'
                            }}
                        >
                            <Grid item xs={6} sm={6} md={1} lg={1} style={{ paddingTop: '25px' }}>
                                <img src={car} alt="not" style={{ width: '50px' }} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3} sx={{ textAlign: 'center' }}>
                                <Typography>
                                    {subscription.sub.car.car_company === null ? 'N/A' : subscription.sub.car.car_company.name} {subscription.sub.car === null ? 'N/A' : subscription.sub.car.name}
                                </Typography>
                                <Typography>
                                    {subscription.sub.car === null ? 'N/A' : subscription.sub.car.transmission} – {subscription.sub.car === null ? 'N/A' : subscription.sub.car.fuel}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2} lg={2}>
                                <Typography>Started:</Typography>
                                <Typography sx={{ color: '#7BB31A' }}> {subscription.sub=== null ? 'N/A' : subscription.sub.start_date}</Typography>
                                <Typography>
                                    Duration: <span style={{ color: '#7BB31A' }}>
                                        {subscription.sub === null ? 'N/A' : subscription.sub.rent_period}
                                    </span>
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2} lg={2}>
                                <Typography>{subscription.sub.car === null ? 'N/A' : subscription.sub.car.price}/Month</Typography>
                                <Typography>{subscription.sub === null ? 'N/A' : subscription.sub.milage_plan} KM</Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={2} lg={2}>
                                <Chip
                                    style={{
                                        color: `${subscription === null ? 'N/A' : `${subscription.status === '0' ? 'red' : '#76A81B'}`}`,
                                        backgroundColor: `${subscription === null ? 'N/A' : `${subscription.status === '0' ? '#FFDAD8' : '#B9F6CA'}`}`
                                    }}
                                    label={subscription === null ? 'N/A' : `${subscription.status === '0' ? 'UnPaid' : 'Paid'}`}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={2} lg={2} sx={{ paddingBottom: { xs: '20px', lg: '0px' } }}>
                                <IconButton sx={{ background: '#909090', borderRadius: '10px' }}>
                                    <FiChevronRight
                                        color="#FFFF"
                                        onClick={() => navigate(`/admin/particular-invoice/${subscription.id}`)}
                                    />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                ))
            ) : (
                <Grid>
                    <Typography colSpan={8} style={{ textAlign: 'center' }}>
                        No Subscription found.
                    </Typography>
                </Grid>
            )}
        </>
    );
}
