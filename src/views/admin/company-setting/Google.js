import React, { useState } from 'react';
import { Grid, InputAdornment, OutlinedInput } from '@mui/material';
import { IconSearch } from '@tabler/icons';





// project imports
import MainCard from 'ui-component/cards/MainCard';

export default function GoogleMap() {
    const [first, setfirst] = useState("pakistan")
    const handleChange=(e)=>(
        setfirst(e.target.value) 
    );
    return (
    
        <>
        <Grid item xs={6} sm={6} md={6} lg={6} sx={{pb:4}}>
        <OutlinedInput
        fullWidth
            id="input-search-list-style2"
            placeholder="Search"
        onChange={handleChange}
            startAdornment={
                <InputAdornment position="start">
                    <IconSearch stroke={1.5} size="16px" />
                </InputAdornment>
            }
            size="large"
        />
    </Grid>

    <section style={{height:"100vh"}} >
        
      {/*  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7057640.799389221!2d63.70839918675815!3d30.262342254181146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1691404751394!5m2!1sen!2s" title="map1" width="600" height="450" border="0px" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
        
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d816047.7787479288!2d-119.00708612997212!3d36.96954025801871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80be29b9f4abb783%3A0x4757dc6be1305318!2sInyo%20National%20Forest!5e0!3m2!1sen!2s!4v1687950316560!5m2!1sen!2s"  title="map" width="100%" height="450" border="0px" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
        </>
        
    );
}
