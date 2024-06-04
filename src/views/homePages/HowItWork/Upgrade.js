import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

import How from "assets/images/landing/How.png"
import SECCar from "assets/images/landing/SECCar.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import DoneIcon from '@mui/icons-material/Done';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const Upgrade = () => {
   
const navigate = useNavigate();
const headerSX = {
        fontSize: { xs: '21px', sm: '21px', md: '34', lg: '34px' },
        lineHeight: { lg: '40px', md: '38px', sm: '42px', xs: '45px' }
    };
    

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 8 }}>
            <Grid>

            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src={SECCar} alt="not" style={{ objectFit: 'cover', width: '80px' }} />
        </Grid>
            <Grid >
            <Typography sx={headerSX} textAlign="center" >Das Auto-Abo: Upgrade für die Mobilität in der Schweiz</Typography>
            <Typography fontSize="16px"  textAlign="center" pt="20px">Ein Auto-Abo in der Schweiz bietet viele Vorteile. Sie können ein Fahrzeug auswählen, das perfekt zu Ihren Bedürfnissen passt, und es so lange nutzen, wie Sie möchten. Sie zahlen eine monatliche Gebühr für unser All-Inclusive-Paket, das Folgendes abdeckt: Versicherung, Steuern, Service, Wartung, Reparaturen und sogar Reifenwechsel und die Autobahnvignette sind inklusive. Es gibt keine versteckten Kosten oder Überraschungen und wenn Sie das Fahrzeug nicht mehr benötigen, können Sie es einfach zurückgeben.</Typography>
            <Typography fontSize="16px" textAlign="center">
            Informieren Sie sich über unsere Autos und schließen Sie noch heute Ihr Auto-Abo bei simpcar ab.</Typography>
            </Grid>
           
            <Grid sx={{ textAlign: 'center',paddingTop:"40px" }}>
            <Button
               
                disableElevation
                variant="contained"
                color="secondary"
                style={{  fontSize:"18px",color: 'white', borderRadius: '25px', padding: '11px 30px', backgroundColor: '#7BB31A' }}
                onClick={()=>navigate("/our-car")} 
            >
               
Günstige Autos im Abo
            </Button>
        </Grid>
            </Grid>
        </Container>
    );
};

export default Upgrade;
