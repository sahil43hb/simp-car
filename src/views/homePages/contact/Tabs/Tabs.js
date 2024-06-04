import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/system';
import News from './News';
import Recall from './Recall';
import Return from './Return';
import CarChange from './CarChange';

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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

const tabsOption = [
    {
        label: 'Nachricht',

        caption: 'Allgemeine Bedenken'
    },
    {
        label: 'Abrufen',

        caption: 'Persönliches Gespräch'
    },
    {
        label: 'Zurückkehren',

        caption: 'Abonnementvertrag kündigen'
    },
    {
        label: 'Autowechsel',

        caption: 'Abonnementvertrag ändern'
    }
];

export default function TabsComp() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
       
            <Box sx={{ width: '100%' }}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{ background: '#ffffff', padding: '30px  15px', borderRadius: '50px', boxShadow: '0 6px 3px -6px #00000069' }}
                    >
                        {tabsOption.map((tab, index) => (
                            <Tab
                                key={index}
                                sx={{ paddingRight: '50px', borderRight: '1px solid #909090' }}
                                label={
                                    <Grid container direction="column">
                                        <Typography color="inherit" fontSize="18px" textAlign="left">
                                            {tab.label}
                                        </Typography>
                                        <Typography component="div" variant="caption" fontSize="13px" sx={{ textTransform: 'capitalize' }}>
                                            {tab.caption}
                                        </Typography>
                                    </Grid>
                                }
                                {...a11yProps(index)}
                            />
                        ))}
                    </Tabs>
                </Box>
                </Container>

                <CustomTabPanel value={value} index={0} >
                    <News />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Recall />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Return />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <CarChange />
                </CustomTabPanel>
            </Box>
      
    );
}
