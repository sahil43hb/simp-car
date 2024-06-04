import PropTypes from 'prop-types';
import { cloneElement, useState } from 'react';

import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from 'assets/images/landing/logoLanding.png';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger,
    Grid
} from '@mui/material';

// project imports
// import Logo from 'ui-component/Logo';

// assets
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';
import Language from './Language';

// elevation scroll
function ElevationScroll({ children, window }) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    return cloneElement(children, {
        elevation: trigger ? 1 : 0,
        style: {
            backgroundColor: theme.palette.mode === 'dark' && trigger ? theme.palette.dark[800] : theme.palette.background.default,
            color: 'theme.palette.text.dark'
        }
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node,
    window: PropTypes.object
};

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = useState(false);
    const navigate = useNavigate();

    const drawerToggler = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    return (
        <ElevationScroll {...others}>
            <MuiAppBar>
                <Container >
                    <Toolbar sx={{ py: 3, px: `0 !important`, }}>
                        <Grid container spacing={2}>
                            <Grid item xs={2} sx={{marginRight:{xs:"20px",sm:"43px",md:"38px",lg:"88px"}}}>
                                <Typography
                                    component="div"
                                    sx={{ flexGrow: { xs: 0.1, sm: 1.1 }, textAlign: 'left' }}
                                    className="logo"
                                    onClick={() => navigate('/landing')}
                                >
                                    <img alt="not" src={logo} width="150" />
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack
                                    direction="row"
                                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                                   
                                    className="navBar"
                                >
                                    <Button color="inherit" component={Link} onClick={() => navigate('/our-car')} className="nav-item">
                                    Unsere Autos
                                    </Button>

                                    <Button color="inherit" component={Link} onClick={() => navigate('/how-work')} className="nav-item">
                                    So funktioniert’s
                                    </Button>

                                    <Button
                                        color="inherit"
                                        component={Link}
                                        onClick={() => navigate('/about-simpcar')}
                                        target="_blank"
                                        className="nav-item"
                                    >
                                        Über simpcar
                                    </Button>

                                    <Button
                                        color="inherit"
                                        component={Link}
                                        onClick={() => navigate('/faqs')}
                                        target="_blank"
                                        className="nav-item"
                                    >
                                        FAQ
                                    </Button>
                                    <Button
                                        color="inherit"
                                        component={Link}
                                        onClick={() => navigate('/contact')}
                                        target="_blank"
                                        className="nav-item"
                                    >
                                        Kontakt
                                    </Button>
                                </Stack>
                            </Grid>
                           <Grid  item xs={3}>
                          <Grid container spacing={2}>
                            <Grid  item xs={5} sm={5} md={8} sx={{display:"flex",justifyContent:"center"}}>
                                <Language />
                            </Grid>
                            <Grid item xs={4} sm={7} md={4}>
                                <Stack
                                    direction="row"
                                    sx={{ flexGrow: 0.3, textAlign: 'right', display: { xs: 'none', sm: 'flex' } }}
                                    spacing={{ xs: 1.5, md: 2.5 }}
                                >
                           {/*         <Button
                                        component={Link}
                                        disableElevation
                                        variant="contained"
                                        color="secondary"
                                        style={{ color: 'white', borderRadius: '30px', padding: '8px 15px', backgroundColor: '#7BB31A' }}
                                    >
                                        Contact
                           </Button> */}

                                    <Button
                                        component={Link}
                                        disableElevation
                                        variant="contained"
                                        color="secondary"
                                        style={{ color: 'white', borderRadius: '30px', padding: '9px 70px', backgroundColor: '#7BB31A' }}
                                        onClick={() => navigate('/login')}
                                    >
                                        Anmeldung
                                    </Button>
                                </Stack>
                            </Grid>
                            </Grid>
                            </Grid>
                        </Grid>

                        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                {drawerToggle && (
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={drawerToggler(false)}
                                        onKeyDown={drawerToggler(false)}
                                    >
                                        <List>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => navigate('/our-car')}>
                                                <ListItemButton component="a">
                                                    <ListItemText primary="Our Cars" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => navigate('/how-work')}>
                                                <ListItemButton component="a">
                                                    <ListItemText primary="How It Works" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => navigate('/about-simpcar')}>
                                                <ListItemButton component="a">
                                                    <ListItemText primary="About Simpcar" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => navigate('/faqs')}>
                                                <ListItemButton component="a">
                                                    <ListItemText primary="FAQ" />
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => navigate('/contact')}>
                                                <ListItemButton component="a">
                                                    <ListItemText primary=" Contact" />
                                                </ListItemButton>
                                            </Link>

                                            <Link style={{ textDecoration: 'none' }} onClick={() => navigate('/login')}>
                                                <ListItemButton component="a">
                                                    <ListItemText primary="Login" />
                                                </ListItemButton>
                                            </Link>
                                            
                                        </List>
                                    </Box>
                                )}
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
