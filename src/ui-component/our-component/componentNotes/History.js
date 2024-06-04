import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { InputLabel, FormControl, Select, MenuItem, TextField, Typography, Grid, IconButton } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FaAngleRight } from 'react-icons/fa';
// project imports
import Chip from 'ui-component/extended/Chip';
import img from 'assets/images/users/user-8.png';
import img1 from 'assets/images/users/user-6.png';

const data = [
    { message: 'Changed the ZIP Code field from 3000 to 3012.' },
    { message: 'Changed the City field from Bern to Niederwangen.' },
    { message: 'Added an internal note.' },
   
];
const data1 = [
    { message: 'Created the customer.' },
  
   
];

export default function History() {
    const [dur, setDur] = React.useState('dfdghfgdh');
    const [pack, setPack] = React.useState('dfdghfgdh');

    const handleChange = (event) => {
        setDur(event.target.value);
    };
    const handleChangePack = (event) => {
        setPack(event.target.value);
    };
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={4} sm={1.5} md={1.5} lg={1.5} style={{ paddingTop: '25px' }}>
                    <img src={img} alt="not" style={{ width: '50px' }} />
                </Grid>
                <Grid item xs={8} sm={6} md={4} lg={4}>
                    <Typography variant="h4" fontSize="15px" sx={{ paddingTop: '14px' }}>
                        Nemanja Sobajic
                    </Typography>
                    <Typography fontSize="12px">Mo, 12.01.23, 13:12</Typography>
                </Grid>
            </Grid>
            <Grid>

            {data.map((data)=>(
                <Grid sx={{ display: 'flex', padding: { xs: '10px 0px', md: '10px 65px' } }}>
                    <FaAngleRight color="#76A81B" /> 
                    <Typography paddingLeft="5px">{data.message}</Typography>
                </Grid>
            ))}

                
            </Grid>
            <hr />
            <Grid container spacing={3} sx={{ marginTop: '10px' }}>
                <Grid item xs={4} sm={1.5} md={1.5} lg={1.5} style={{ paddingTop: '25px' }}>
                    <img src={img1} alt="not" style={{ width: '50px' }} />
                </Grid>
                <Grid item xs={8} sm={6} md={4} lg={4}>
                    <Typography variant="h4" fontSize="15px" sx={{ paddingTop: '14px' }}>
                        Nemanja Sobajic 
                    </Typography>
                    <Typography fontSize="12px">Mo, 12.01.23, 13:12</Typography>
                </Grid>
            </Grid>
           



            {data1.map((data)=>(
                <Grid sx={{ display: 'flex', padding: { xs: '10px 0px', md: '10px 65px' } }}>
                <FaAngleRight color="#76A81B" /> 
                <Typography paddingLeft="5px">{data.message}</Typography>
            </Grid>
            ))}
        </>
    );
}
