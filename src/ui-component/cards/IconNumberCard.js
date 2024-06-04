import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import {  Grid, Typography } from '@mui/material';
import Chip from 'ui-component/extended/Chip';
// project imports
import MainCard from './MainCard';

// =============================|| ICON NUMBER CARD ||============================= //

const IconNumberCard = ({ title, primary, color,bgcolor,secondary,price, iconPrimary }) => {
   
    const [first, setfirst] = useState()

    return (
        <MainCard>
            <Grid container spacing={2} sx={{padding:{xs:"5px",sm:"0px"}}} >
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between" >
                        <Grid item xs={8}>
                        <Grid>
                        <img  alt='not' src={iconPrimary}/>
                        </Grid>
                        <Grid>
                            <Typography variant="h5" color="inherit" sx={{paddingTop:"15px"}}>
                                {title}
                            </Typography></Grid>
                        </Grid>
                        <Grid item xs={4} sx={{textAlign:"center"}}>
                            <Typography variant="h3" color={color} >{primary}</Typography>
                            <Typography sx={{padding:"10px 0px"}} >{secondary}</Typography>
                           
                            <Typography bgcolor={bgcolor} color={color} sx={{padding:"3px 6px",borderRadius:"20px",textAlign:"center"}}>{price}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

IconNumberCard.propTypes = {
    title: PropTypes.string,
    primary: PropTypes.string,
    color: PropTypes.string,
    iconPrimary: PropTypes.object
};

export default IconNumberCard;
