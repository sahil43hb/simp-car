// material-ui
import { Container, Grid, Typography, Button } from '@mui/material';
import carImageCover from 'assets/images/landing/car-cover-img.png';
import SidebarModal from './SidebarModal';
 
// =============================|| LANDING - CARD SECTION ||============================= //

export default function EmptyProductCard() {
    return (
        <Grid
            lg={12}
            style={{
                border: '1px solid blue transparent',
                padding: '0  0 0 2px',
                margin: '0px 0px 0 0'
            }}
        >
            <Grid
                item
                md={12}
                sm={12}
                style={{
                    border: '1px solid',
                    borderRadius: '8px',
                    marginRight: '11px',
                    padding: '0 24px'
                }}
            >
                <Typography variant="body2" style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '25px' }}>
                    Haben wir kein passendes Auto im Abo für dich?
                </Typography>

                <img src={carImageCover} alt="" style={{ marginTop: '30px', width: '100%' }} />

                <Typography variant="body2" style={{ marginTop: '30px' }}>
                    Dann fülle dieses Formular aus und wir organisieren dir dein Wunschauto.
                </Typography>

                <SidebarModal />
            </Grid>
        </Grid>
    );
}
