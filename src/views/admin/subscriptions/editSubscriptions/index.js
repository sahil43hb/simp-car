import * as React from 'react';

// material-ui
import { Box, Select, FormControl, MenuItem, Typography, Stack, Grid , Tab, Tabs} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// project imports
import MainCard from 'ui-component/cards/MainCard';


import PersonalDet from './componentSubscDet';
import SubscriptionTabs from './componentBills';
// import Note from './componentNotes';
import PriceConfig from '../../../../ui-component/our-component/PriceConfig';
import Note from 'ui-component/our-component/componentNotes';





export default function EditSubscritions() {
    const [age, setAge] = React.useState('Active');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    return (
        <MainCard
            content={false}>
            <Grid style={{ padding: '30px', borderBottom: '1px solid #DEF1BB' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <h3>A2301301 - Muster Hans</h3>
                            <Typography style={{ color: '#616161' }}>Created: 14.12.2022, 11:40 Updated: 21.12. 2022, 13.12</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={2} sm={2} md={7} lg={7}  style={{textAlign:"right"}}>
                                        <DeleteOutlineOutlinedIcon
                                            style={{ color: 'red', background: '#F2F1F0', borderRadius: '5px', fontSize: '30px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{ minWidth: 150, minHeight: 20 }}>
                                            <FormControl fullWidth size="small">
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={age}
                                                    defaultValue={age}
                                                    label=""
                                                    placeholder="Active"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>Active</MenuItem>
                                                    <MenuItem value={20}>Active</MenuItem>
                                                    <MenuItem value={30}>Active</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>



            <Grid container spacing={2} style={{ margin: '20px 0px', }}>
            <Grid item xs={11} sm={11} md={6} lg={6}>
            <PersonalDet/>
            </Grid>
            <Grid item xs={11}  sm={11} md={5.70} lg={5.70}>
            <SubscriptionTabs/>
            </Grid>
            <Grid item xs={11} sm={11} md={6} lg={6}>
            <Note/>
            </Grid>
            <Grid item xs={11} sm={11} md={11} lg={5.70}>
            <PriceConfig/>
            </Grid>
            
          </Grid>
        </MainCard>
    );
}
