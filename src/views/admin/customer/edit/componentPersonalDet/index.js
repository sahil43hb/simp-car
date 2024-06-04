import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// material-ui
import { Box, Typography, Tab, Tabs } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import PersonalDetail from './PersonalDetail';
import AddressDetail from './AddressDetail';
import UploadDoc from 'ui-component/our-component/UploadDoc';
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

export default function PersonalDet(props) {
    const [value, setValue] = React.useState(0);
    const { user, address } = props;
    const [loading, setLoading] = useState(true);
    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };
    if (address === null) {
        return (
            <MainCard content={false}>
                <SubCard content={false}>
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
                            <Tab component={Link} to="#" label="Personal Details" {...a11yProps(0)} />
                            <Tab component={Link} to="#" label="Address" {...a11yProps(1)} />
                            <Tab
                                component={Link}
                                to="#"
                                // icon={<PeopleAltTwoToneIcon sx={{ fontSize: '1.3rem' }} />}
                                label="Credit Details"
                                {...a11yProps(2)}
                            />
                            <Tab component={Link} to="#" label="Documents" {...a11yProps(3)} />
                        </Tabs>

                        <TabPanel value={value} index={0}>
                            <PersonalDetail user={user} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                                <Typography>No Address Found</Typography>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <h1>Under-Construction</h1>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <UploadDoc />
                        </TabPanel>
                    </Box>
                </SubCard>
            </MainCard>
        );
    }

    return (
        <MainCard content={false}>
            <SubCard content={false}>
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
                        <Tab component={Link} to="#" label="Personal Details" {...a11yProps(0)} />
                        <Tab component={Link} to="#" label="Address" {...a11yProps(1)} />
                        <Tab
                            component={Link}
                            to="#"
                            // icon={<PeopleAltTwoToneIcon sx={{ fontSize: '1.3rem' }} />}
                            label="Credit Details"
                            {...a11yProps(2)}
                        />
                        <Tab component={Link} to="#" label="Documents" {...a11yProps(3)} />
                    </Tabs>

                    <TabPanel value={value} index={0}>
                        <PersonalDetail user={user} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {address === null ? (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                                <Typography>No Address Found</Typography>
                            </div>
                        ) : (
                            <AddressDetail address={address} />
                        )}
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <h1>Under-Construction</h1>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <UploadDoc />
                    </TabPanel>
                </Box>
            </SubCard>
        </MainCard>
    );
}
