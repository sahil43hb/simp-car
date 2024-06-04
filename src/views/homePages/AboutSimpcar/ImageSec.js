import { useNavigate } from 'react-router-dom';
import React from 'react';
import AboutPic from 'assets/images/landing/AboutPic.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

import line from 'assets/images/landing/Line.png';




const data = [
    {
      
      label: 'Langjährige Erfahrung in der Automobilindustrie, Marketing und Vertrieb',
    },
    {
    
      label: 'Talentiertes Team mit großer Motivation für Veränderungen',
    },
    {
     
      label: 'Unkomplizierte und kundenfreundliche Abwicklung aller Prozesse',
    },
    {
      
      label: ' Einfache und digitale Prozesse und daraus resultierende faire Tarife',
    },
   
  ];
// ==============================|| LANDING - HEADER PAGE ||============================== //

const ImageSec = () => {
  const navigate = useNavigate();
    const headerSX = {
        fontSize: { xs: '2rem', sm: '2rem', md: '2rem', lg: '34px' },
        lineHeight: { lg: '40px', md: '38px', sm: '42px', xs: '45px' }
    };

    return (
        <Container>
            <Grid sx={{ mt: { xs: 13, sm: 32, md: 10.75 }, mb: { xs: 0, sm: 10, md: 10.75 } }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <img src={AboutPic} alt="not" width="100%" style={{borderRadius:"20px"}} />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Grid sx={{padding:{xs:"5px 0px",md:"30px 30px"}}}>
                      <Typography fontSize="26px" paddingBottom="10px" font-weight='500'>
                      simpcar – die einfache Mobilität der Zukunft</Typography>
                      <Typography fontSize="16px">Wir sind ein junges, dynamisches und digital versiertes Unternehmen, das sich mit Leidenschaft und Hingabe dem Auto-Abo-Modell verschrieben hat. Wir sind mittendrin und wollen Pionierarbeit leisten, wenn es darum geht, die Mobilität von morgen und die Art und Weise, wie Menschen Fahrzeuge nutzen, zu gestalten.</Typography>
                      
                      <Grid container spacing={2} style={{ marginTop: '1px' }}>
                                    {data.map((data) => (
                                        <Grid item lg={6} md={6} sm={6} xs={12} style={{ marginTop: '12px' }}>
                                            <Grid style={{ display: 'flex', }}>
                                                <CheckCircleIcon style={{ color: '#91bd44', fontSize: '200%' }} />
                                                <Typography style={{ paddingLeft: '10px', paddingTop: '3px',fontSize:"16px" }}>
                                                    {data.label}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>

                    <Grid sx={{paddingTop:"40px" }}>
                    <Button
                        // component={Link}
                        disableElevation
                        variant="contained"
                        color="secondary"
                        style={{ color: 'white', borderRadius: '25px', padding: '6px 35px', backgroundColor: '#7BB31A' }}
                        onClick={() => navigate('/how-work')}
                    >
                    So funktioniert es
                    </Button>
                </Grid>
                      
                      </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ImageSec;
