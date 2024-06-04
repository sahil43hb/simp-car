import { Link ,useNavigate} from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper1 from './wrapper/AuthWrapper1';
import AuthCardWrapper from './wrapper/AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AnimateButton from 'ui-component/extended/AnimateButton';
import AuthCodeVerification from './auth-forms/AuthCodeVerification';
import AuthFooter from 'ui-component/cards/AuthFooter';

// assets

// ===========================|| AUTH3 - CODE VERIFICATION ||=========================== //


const CodeVerification = () => {
    const theme = useTheme();
    const navigate=useNavigate();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid container spacing={2} sx={{ padding: '20px' }}>
                                        <Grid item xs={6} sm={6} md={8} lg={8}>
                                            <Grid
                                                container
                                                direction={matchDownSM ? 'column-reverse' : 'row'}
                                                alignItems="left"
                                                justifyContent="left"
                                            >
                                                <Grid item>
                                                    <Typography sx={{fontSize:{xs:"15px",md:"30px"}}} >Verify your email</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={4} lg={4}>
                                            <Grid>
                                                <Link to="#">
                                                    <Logo />
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} style={{textAlign:"left",marginBottom:"60px" ,paddingLeft:"20px"}}><Typography variant="caption" fontSize="16px" >
                                    Place your code here to continue
                                </Typography>
                                </Grid>
                                    

                                    <Grid item xs={12}>
                                        <AuthCodeVerification />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={Link}
                                                to="#"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                                textAlign={matchDownSM ? 'center' : 'inherit'}
                                            >
                                                Did not receive the email? Check your spam filter, or
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AnimateButton>
                                            <Button
                                                disableElevation
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="outlined"
                                              
                                            
                                            >
                                                Resend Code
                                            </Button>
                                        </AnimateButton>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default CodeVerification;
