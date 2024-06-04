// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, LinearProgress, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ===========================|| WIDGET STATISTICS - PROJECT TASK CARD ||=========================== //

const TotalReceive = () => {
    const theme = useTheme();
    return (
        <MainCard>
            <Grid container spacing={2} sx={{p:{xs:1,sm:0}}}>
                <Grid xs={12} sx={{ pt: '20px', pl: '14px' }}>
                    <Typography variant="h4">Total Receivable: $18,250</Typography>
                </Grid>
                <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="h4" align="left" color="#76A81B">
                                Current
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="left">
                                $2850
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <LinearProgress
                                variant="determinate"
                                value={70}
                                sx={{
                                    bgcolor: '#ECF3DF',
                                    '& .MuiLinearProgress-bar': { bgcolor: '#76A81B' }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography align="left">
                                <span style={{ color: '#76A81B', fontSize: '16px', fontWeight: 'bold' }}> Overdue</span> (1-15 days)
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="left">
                                $4250
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {/** had wrong colour, colour is an enum not string */}
                            <LinearProgress
                                variant="determinate"
                                value={50}
                                sx={{
                                    bgcolor: '#B9F6CA',
                                    '& .MuiLinearProgress-bar': { bgcolor: '#00C853' }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography align="left">(15-30 days)</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="left">
                                $3450
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {/** had wrong colour, colour is an enum not string */}
                            <LinearProgress
                                variant="determinate"
                                value={60}
                                sx={{
                                    bgcolor: '#FBE9E7',
                                    '& .MuiLinearProgress-bar': { bgcolor: '#FFAB91' }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={3} sm={6}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography align="left">Above 30 days</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="left">
                                $2020
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <LinearProgress
                                variant="determinate"
                                value={70}
                                sx={{
                                    bgcolor: '#FFAB91',
                                    '& .MuiLinearProgress-bar': { bgcolor: '#D84315' }
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default TotalReceive;
