// material-ui
import { Link, Typography, Stack, Grid } from '@mui/material';

// ==============================|| FOOTER - auth 2 & 3 ||============================== //

const AuthFooter = () => (
    <>
        <Grid container style={{ marginBottom: '-30px' }}>
            <Grid item xs={2} sm={8} md={2} lg={2} sx={{paddingBottom:{xs:"10px",md:"0px"}}} >
                <Typography sx={{ textAlign: 'left' }}>dashboard.Simpcar</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #76A81B',paddingBottom:{xs:"10px",md:"0px"} }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Typography>About</Typography>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Typography>Help </Typography>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Typography>Simpcar news</Typography>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Typography>Simpcar business</Typography>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Typography>Imprint & privacy</Typography>
                            </Grid>
                            <Grid item xs={4} sm={4} md={2} lg={2}>
                                <Typography>Terms & conditions</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} sx={{borderTop:{xs:"1px solid #76A81B",lg:" "}}}>
                <Typography sx={{ textAlign:{xs:"left",md:'right'} }}>@simpcar 2023</Typography>
            </Grid>
        </Grid>
    </>
);

export default AuthFooter;
