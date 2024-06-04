import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { InputLabel, FormControl, Select, MenuItem, TextField, Typography, Grid, IconButton } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FiChevronRight } from 'react-icons/fi';
// project imports
import Chip from 'ui-component/extended/Chip';

import car from 'assets/images/car.png';

const data = [{ car }, { car }, { car }, { car }, { car }, { car },  { car }, { car }];

export default function Bilder() {
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
                {data.map((data) => (
                    <Grid item xs={6} sm={6} md={3} lg={3} style={{ paddingTop: '0px' }}>
                        <img src={data.car} alt="not" style={{width:"80%"}}/>
                    </Grid>
                ))}
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12}>
        <button
            
            type="button"
            style={{
                color: '#76A81B',
                backgroundColor: '#FFFF',
                marginTop: '30px',
                borderRadius: '6px',
                border: '1px solid #76A81B',
                cursor: 'pointer',
                padding:"10px",
                textAlign: 'center'
            }}
        >
            + Manage Images
        </button>
        </Grid>
        </>
    );
}
