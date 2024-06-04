import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
// project imports
import AuthWrapper1 from './wrapper/AuthWrapper1';
import AuthCardWrapper from './wrapper/AuthCardWrapper';
import AuthLogin from './auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import useAuth from 'hooks/user/useAuth';

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
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
                                    <Grid container spacing={2} sx={{ paddingTop: '30px'}}>
                                        <Grid item xs={6} sm={8} md={8} lg={8}>
                                            <Grid
                                                container
                                                direction={matchDownSM ? 'column-reverse' : 'row'}
                                                alignItems="left"
                                                justifyContent="left"
                                            >
                                                <Grid item>
                                                    <Stack alignItems="left" justifyContent="left" spacing={1}>
                                                        <Typography
                                                            style={{ color: '#76A81B', paddingLeft: '25px' }}
                                                            gutterBottom
                                                            variant="h2"
                                                        >
                                                            Hi,
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={6} sm={4} md={4} lg={4}>
                                            <Grid>
                                                <Link to="/">
                                                    <Logo />
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Grid >
                                    <Grid item xs={12} justifyContent="left">
                                       <Typography variant="caption" fontSize="16px" >
                                            Login in to your account
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <AuthLogin />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" xs={12}>
                                            <Typography
                                                component={Link}
                                                to={isLoggedIn ? '/register/Register' : '/register'}
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none', textAlign: 'right', color: '#616161' }}
                                            >
                                                Don&apos;t have an account?
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

export default Login;
