import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// material-ui
import { Box, Select, FormControl, MenuItem, Typography, Stack, Grid , Tab, Tabs} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import Subscriptions from './Subscriptions';
// import PersonalDetail from './PersonalDetail';
// import EditSubTabs from './EditSubTabs';
// import { borderBottom } from '@mui/system';


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


export default function SubscriptionTabs(props) {
   
    const [value, setValue] = React.useState(0);
    const { invoice} = props;
    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MainCard
            content={false}>
            
             <SubCard content={false} >
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    variant="scrollable"
                    onChange={handleChangeTab}
                    textColor="secondary"
                    indicatorColor="secondary"
                    sx={{
                        mb: 3,
                        '& a': {
                            minHeight: 'auto',
                            minWidth: 10,
                            py: 1.5,
                            px: 1,
                            mr: 2.2,
                            color: '#616161',
                            display: 'flex',
                            flexDirection: 'row'
                        },
                        '& a.Mui-selected': {
                            color: '#76A81B'
                        },
                        '& a > svg': {
                            mb: '0px !important',
                            mr: 1.1
                        }
                    }}
                >
                    <Tab
                        component={Link}
                        to="#"
                        
                        label="Subscriptions"
                        {...a11yProps(0)}
                    />
                    <Tab
                        component={Link}
                        to="#"
                        // icon={<PeopleAltTwoToneIcon sx={{ fontSize: '1.3rem' }} />}
                        label="Transfers"
                        {...a11yProps(2)}
                    />
                    <Tab component={Link} to="#" label="Documents" {...a11yProps(3)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <Subscriptions sub={invoice === null ? 'N/A' : invoice}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                <h1>Under Construction</h1>
                </TabPanel>
                <TabPanel value={value} index={3}>
                <h1>Under Construction</h1>
                </TabPanel>
            </Box>
        </SubCard>
            
          
        </MainCard>
    );
}
