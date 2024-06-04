import { useNavigate } from 'react-router-dom';

import { Container, Grid, Stack, Toolbar, Typography } from '@mui/material';

// project imports
import Logo from 'ui-component/Logo';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Header() {
    const navigate = useNavigate();

    return (
        <Container>
            <Toolbar sx={{ py: 2.5, px: `0 !important` }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={4} md={4} sm={12}>
                        <Typography
                            component="div"
                            sx={{ flexGrow: 0.7, textAlign: { xs: 'center', sm: 'center', lg: 'left' } }}
                            onClick={() => navigate('/landing')}
                        >
                            <Logo />
                        </Typography>
                    </Grid>

                    <Grid item xs={12} lg={4} md={4} sm={12} style={{ textAlign: 'center' }}>
                        <Stack direction="row" sx={{ display: { xs: 'block', sm: 'block', flexGrow: 0.7 } }} spacing={{ xs: 1.5, md: 2.5 }}>
                            <Typography variant="body2" style={{ fontSize: '16px', marginTop: '7px' }}>
                                Online Auto-Abo buchen
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} lg={4} md={4} sm={12} style={{ textAlign: 'right' }}>
                        <Stack
                            direction="row"
                            // style={{ display: 'flex', justifyContent: 'end' }}
                            sx={{
                                display: { xs: 'flex', sm: 'flex' },
                                justifyContent: { xs: 'center', sm: 'center', lg: 'end' },
                                marginTop: { xs: '10px', sm: '8px', lg: '8px' }
                            }}
                            spacing={{ xs: 1.5, md: 2.5 }}
                        >
                            <ArrowBackIosIcon style={{ color: '#92BD44', marginTop: '0px' }} />
                            <Typography variant="body2" style={{ fontSize: '16px', margin: '0 0 0 0' }}>
                                zurück zum Auto
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Toolbar>
        </Container>
    );
}
