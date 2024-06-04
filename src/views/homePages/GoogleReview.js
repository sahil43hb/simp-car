// material-ui
import { FunctionsSharp } from '@mui/icons-material';
import { Container, Grid } from '@mui/material';
import GoogleImg from 'assets/images/landing/google.png';
import StarIcon from '@mui/icons-material/Star';
// ==============================|| LANDING - HEADER PAGE ||============================== //

function GoogleReview() {
    return (
        <Container>
            <Grid
                
                 xs={2} md={6}
                justifyContent="space-between"
                alignItems="center"
                sx={{ display: 'flex', padding: '0', position: 'absolute', bottom: '10px', left:{xs:"0px",lg:'196px'} , width: '50%' }}
                spacing={{ xs: 1.5, sm: 2.5, md: 3, lg: 5 }}
                className='reviewSection'
            >
                <Grid item xs={12} md={6} sx={{ img: { width: '100%' } }} style={{ display: 'flex' }}>
                    <Grid>
                        <img src={GoogleImg} alt="google-img" style={{ width: '50px', objectFit: 'cover' }} />
                    </Grid>
                    <Grid style={{ marginLeft: '30px' }}>
                        <StarIcon style={{ fontSize: '18px', color: '#FBBD05' }} />
                        <StarIcon style={{ fontSize: '18px', color: '#FBBD05' }} />
                        <StarIcon style={{ fontSize: '18px', color: '#FBBD05' }} />
                        <StarIcon style={{ fontSize: '18px', color: '#FBBD05' }} />
                        <StarIcon style={{ fontSize: '18px', color: '#FBBD05' }} />
                        <p style={{ margin: '0' }}>From 53 reviews</p>
                    </Grid>
                    <p style={{ margin: '0' }}>5 out of 5 stars </p>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GoogleReview;
