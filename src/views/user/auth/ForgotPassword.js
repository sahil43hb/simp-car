import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Typography, useMediaQuery,Stack } from '@mui/material';

// project imports
import AuthWrapper1 from './wrapper/AuthWrapper1';
import AuthCardWrapper from './wrapper/AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AuthForgotPassword from './auth-forms/AuthForgotPassword';
import AuthFooter from 'ui-component/cards/AuthFooter';
import useAuth from 'hooks/user/useAuth';

// ============================|| AUTH3 - FORGOT PASSWORD ||============================ //

const ForgotPassword = () => {
    const theme = useTheme();
    const { isLoggedIn } = useAuth();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                <Grid container spacing={2} sx={{paddingTop:"20px"}}>
                                <Grid item xs={6} sm={6} md={8} lg={8}>
                                    <Grid
                                        container
                                        direction={matchDownSM ? 'column-reverse' : 'row'}
                                        alignItems="left"
                                        justifyContent="left"
                                    >
                                        <Grid item>
                                            <Stack alignItems="left" justifyContent="left" spacing={1}>
                                                <Typography
                                                style={{color:"#76A81B" ,paddingLeft:"16px"}}
                                                    gutterBottom
                                                    variant='h2'
                                                >
                                                    Forgot password
                                                </Typography>
                                                
                                            </Stack>
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
                            
                            <Grid item xs={12} justifyContent="left">
                                       <Typography variant="caption" fontSize="16px" >
                                       Enter your credentials to continue
                                        </Typography>
                                    </Grid>

                                <Grid item xs={12}>
                                                <Typography variant="caption" fontSize="16px" textAlign="center">
                                                    Enter your email address below and we&apos;ll send you password reset OTP.
                                                </Typography>
                                            </Grid>

                                    <Grid item xs={12}>
                                        <AuthForgotPassword />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" sx={{textAlign:"right"}} xs={12}>
                                            <Typography
                                                component={Link}
                                                to={isLoggedIn ? '/login/Login' : '/login'}
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none',color:"#616161" }}
                                            >
                                                Already have an account?
                                            </Typography>
                                        </Grid>
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

export default ForgotPassword;
