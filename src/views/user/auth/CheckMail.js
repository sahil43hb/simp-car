import { Link,useNavigate } from 'react-router-dom';


// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button,Grid, Typography, useMediaQuery,Stack } from '@mui/material';

// project imports
import AuthWrapper1 from './wrapper/AuthWrapper1';
import AuthCardWrapper from './wrapper/AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AuthForgotPassword from './auth-forms/AuthForgotPassword';
import AuthFooter from 'ui-component/cards/AuthFooter';
import useAuth from 'hooks/user/useAuth';
import AnimateButton from 'ui-component/extended/AnimateButton';

// ============================|| AUTH3 - FORGOT PASSWORD ||============================ //

const CheckEmail = () => {
    const theme = useTheme();
    const navigate = useNavigate();
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
                                                    Check Mail
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
                                       Avoid getting locked out.
                                        </Typography>
                                    </Grid>

                                <Grid item xs={12}>
                                                <Typography variant="caption" fontSize="16px" textAlign="center">
                                                    We have send a password recover instractions to your email.
                                                </Typography>
                                            </Grid>
                                            <Grid  item xs={12}>
                                            <Box sx={{ mt: 2 }}>
                                            <AnimateButton>
                                                <Button
                                                    disableElevation
                                                   
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                   style={{color:"#FFFF"}}
                                                   onClick={()=>navigate('/otp/code-verification')}
                                                >
                                                Open Email
                                                </Button>
                                            </AnimateButton>
                                        </Box>
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

export default CheckEmail;
