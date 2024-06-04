import React from 'react'
import { Container, Grid,Card,Typography } from '@mui/material';

export default function Header() {
  return (
    <Container maxWidth={false} style={{padding:'0'}}>
      <Card style={{padding:'10px 0'}}>
        <Grid sx={{display:{xs:'block',sm:"flex"},justifyContent:'center'}}>
          <Grid><Typography variant='body2' style={{ padding: '5px 30px', background: '#76A81B', borderRadius: '35px',color: 'white'}}>All</Typography></Grid>  
            <Typography variant='body2' style={{paddingLeft:'25px',marginTop:'5px'}}>Our Cars</Typography>
            <Typography variant='body2' style={{paddingLeft:'25px',marginTop:'5px'}}>How it Works</Typography>
            <Typography variant='body2' style={{paddingLeft:'25px',marginTop:'5px'}}>About Simpcar</Typography>

        </Grid>
      </Card>
 </Container>
  )
}
