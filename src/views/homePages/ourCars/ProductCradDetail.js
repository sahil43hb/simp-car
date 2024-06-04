// material-ui
import { Container, Grid, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import cardBgImg from 'assets/images/landing/offerbg.png';
// =============================|| LANDING - CARD SECTION ||============================= //

export default function ProductCradDetail() {
    return (
        <Grid
            sx={{
                margin: '0px 0px 0 0px',
                backgroundImage: `url(${cardBgImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '14px',
                padding: '30px 51px',
                width: {xs:'90vw',sm:"41vw",md:"42vw",lg:"23vw",xl:'100%'},
               
            }}
        >
            
                <Typography variant="body2" style={{ fontSize: '22px', color: 'white', textAlign: 'left' }}>
                    Rundum-sorglos-Paket
                </Typography>
                <Grid style={{ display: 'flex', marginTop: '10px', height: '30px' }}>
                    <CheckCircleIcon style={{ color: 'white', fontSize: '26px' }} />
                    <Typography variant="body2" style={{ color: 'white', margin: '3px 14px' }}>
                        Versicherung
                    </Typography>
                </Grid>

                <Grid style={{ display: 'flex', marginTop: '10px', height: '30px' }}>
                    <CheckCircleIcon style={{ color: 'white', fontSize: '26px' }} />
                    <Typography variant="body2" style={{ color: 'white', margin: '3px 14px' }}>
                        Steuern
                    </Typography>
                </Grid>

                <Grid style={{ display: 'flex', marginTop: '10px', height: '30px' }}>
                    <CheckCircleIcon style={{ color: 'white', fontSize: '26px' }} />
                    <Typography variant="body2" style={{ color: 'white', margin: '3px 14px' }}>
                        Service und Wartung
                    </Typography>
                </Grid>

                <Grid style={{ display: 'flex', marginTop: '10px', height: '30px' }}>
                    <CheckCircleIcon style={{ color: 'white', fontSize: '26px' }} />
                    <Typography variant="body2" style={{ color: 'white', margin: '3px 14px' }}>
                        Bereifung
                    </Typography>
                </Grid>

                <Grid style={{ display: 'flex', marginTop: '10px', height: '30px' }}>
                    <CheckCircleIcon style={{ color: 'white', fontSize: '26px' }} />
                    <Typography variant="body2" style={{ color: 'white', margin: '3px 14px' }}>
                        Zulassung
                    </Typography>
                </Grid>

                <Grid style={{ display: 'flex', marginTop: '10px', height: '30px' }}>
                    <CheckCircleIcon style={{ color: 'white', fontSize: '26px' }} />
                    <Typography variant="body2" style={{ color: 'white', margin: '3px 14px' }}>
                        Vignette (jedes Jahr)
                    </Typography>
                </Grid>

                <Grid style={{ display: 'flex', marginTop: '10px', height: '30px' }}>
                    <CheckCircleIcon style={{ color: 'white', fontSize: '26px' }} />
                    <Typography variant="body2" style={{ color: 'white', margin: '3px 14px' }}>
                        Mehrfahrer
                    </Typography>
                </Grid>
            </Grid>
        
    );
}
