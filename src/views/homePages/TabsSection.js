import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import TabsCards from './TabsCards';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function TabsSection() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth={false} style={{ background: '#F4F5F8',padding: '0' }}>
            
                <Grid xs={12} style={{ textAlign: 'center', paddingTop: '90px' }}>
                    <Typography variant="p" sx={{ fontSize: { xs: '20px', md: '28px' } }} style={{ fontWeight: '400' }}>
                    Auto Abo – klar mit <span style={{ color: '#92BD44' }}>Simpcar</span>
                    </Typography>
                </Grid>

                <Grid xs={12} style={{ textAlign: 'center', padding: '10px 0' }}>
                    <Typography variant="p" sx={{ fontSize: { xs: '14px', md: '16px' } }}>
                    Hier findest du den Einstieg in die Auswahl unserer Abo-Fahrzeuge.
                    </Typography>
                </Grid>
                <Box sx={{ width: '100%', marginTop: '20px' }} >
                    <Box sx={{ borderBottom: 0, borderColor: 'none',textAlign:'center',display:"flex",justifyContent:"center" }} >
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  className='mainTab'  variant="scrollable" >
                            <Tab component={Link} label="Limousine" {...a11yProps(0)} className='tabsWhite'/>
                            <Tab label="Kleinwagen" {...a11yProps(1)} className='tabsWhite'/>
                            <Tab label="SUV" {...a11yProps(2)} className='tabsWhite'/>
                            <Tab label="Kombi" {...a11yProps(3)} className='tabsWhite'/>

                        </Tabs>
                    </Box> </Box>
                    <TabPanel value={value} index={0}>
                        <TabsCards />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <TabsCards />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <TabsCards />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <TabsCards />
                    </TabPanel>
               
            </Container>
      
    );
}
