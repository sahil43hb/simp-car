// material-ui
import { Container, Grid, Typography, Button } from '@mui/material';
import carImageCover from 'assets/images/landing/car-cover-img.png';
// import SidebarModal from './SidebarModal';
 
// =============================|| LANDING - CARD SECTION ||============================= //

export default function EmptyProductCard() {
    return (
       
            <Grid
                item
                md={12}
                sm={12}
                sx={{
                    border: '1px solid',
                    borderRadius: '8px',
                   
                    padding: '0 24px',
                    width: {xs:'90vw',sm:"41vw",md:"30vw",lg:"23vw",xl:'100%'},
                }}
            >
                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '25px' }}>
                    Haben wir kein passendes Auto im Abo für dich?
                </Typography>

                <img src={carImageCover} alt="" style={{ marginTop: '30px', width: '100%' }} />

                <Typography variant="body2" style={{ marginTop: '30px' }}>
                    Dann fülle dieses Formular aus und wir organisieren dir dein Wunschauto.
                </Typography>
                <Button
                target="_blank"
                size="large"
                style={{
                    backgroundColor: '#757575',
                    color: 'white',
                    borderRadius: '30px',
                    padding: '10px 25px',
                    width: '100%',
                    margin:'25px 0px'
                }}
            >
                Find Out Form
            </Button>
            </Grid>
      
    );
}
