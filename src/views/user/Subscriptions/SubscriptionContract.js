import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import {
   
    OutlinedInput,
    FormControl,
  
    Typography,
   
    Button,
    Grid
} from '@mui/material';
import { BsFillEyeFill } from 'react-icons/bs';
 

// project imports
import { IconSearch } from '@tabler/icons';
import pdf from 'assets/images/pdf.png';
// assets

export default function SubscriptionContract() {
    const [state, setState] = React.useState([
        { img: pdf, name: 'Lease Signed' },
        { img: pdf, name: 'ID Copy' },
        { img: pdf, name: 'Lease Signed' }
    ]);

    const handleClick1=(e)=> console.log(e)
    return (
        <>
        <Grid container sx={{padding:"10px"}}>
        <Grid item xs={12}>
            <Grid textAlign={{ sm: 'right', lg: 'right' }}>
                <FormControl variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        placeholder="Search"
                        endAdornment={<IconSearch />}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight'
                        }}
                    />
                </FormControl>
            </Grid></Grid>
            {state.map((num) => (
                <Grid container spacing={2} marginTop="10px" borderBottom="1px solid #DCDCDC">
                    <Grid item xs={8} display="flex">
                        <img src={num.img} alt="not" style={{ height: '27px', width: '20px' }} />
                        <Typography style={{ paddingTop: '6px', paddingLeft: '20px' }}>{num.name}</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                        <Button>
                            <BsFillEyeFill style={{ fontSize: '25px' }} />
                        </Button>
                        
                    </Grid>
                </Grid>
            ))}

          <Typography variant='h5' paddingTop="20px">To Upload Documents</Typography>
          <Grid container spacing={3} style={{border:"1px solid #FAFAFA",marginTop:"10px",marginLeft:"-10px",background:"#FAFAFA",borderRadius:"30px",height:"60px"}}>
          {state.map((i)=>
            <Grid item xs={1} style={{padding:"15px"}}>
          <img src={i.img} alt="not" style={{width:"30px",}} />
          </Grid>
          )}
         
       
        </Grid>
            </Grid>
        </>
    );
}
