import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Tab, Tabs, Typography, CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// project imports
import useConfig from 'hooks/useConfig';
// assets
import TemplatePage from './TemplatePage';
import adminAxios from 'utils/adminAxios';

// tab content
function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{
                        p: 0
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    };
}

// ================================|| UI TABS - VERTICAL ||================================ //

// ... (previously defined code)

export default function EmailTemp() {
    const theme = useTheme();
    const { borderRadius } = useConfig();
    const token = window.localStorage.getItem('userServiceToken');
    const [emailData, setEmailData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0); // Keep track of the selected tab index
    const [content, setContent] = useState(null); // Keep track of the content of the selected tab
    const [id, setId] = useState(); // Keep track of the content of the selected tab
    const [active, setActive] = useState(); // Keep track of the content of the selected tab
    const [success, setSuccess] = useState(false); // Keep track of the content of the selected tab
    const [templateKey, setTemplateKey] = useState(0); // Key to force re-render

    const handleOpen = async () => {
        try {
            const response = await adminAxios.get(`/invoice-templates`, { token });
            setEmailData(response.data);
            setLoading(false);
            setSuccess(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        handleOpen();
    }, []);

    const handleSuccess = (newSuccess) => {
        setSuccess(newSuccess);
        setTemplateKey(templateKey + 1); // Increment key to force re-render
    };
    console.log('Success=>', success);
    useEffect(() => {
        // Set the content of the first tab when emailData is available and not loading
        if (!loading && emailData.length > 0) {
            setContent(emailData[0]?.value || null);
            setId(emailData[0]?.id || null);
            setActive(emailData[0]?.status || null);
        }
    }, [loading, emailData]);

    const handleChange = (event, newValue) => {
        setValue(newValue); // Update the selected tab index
        setContent(emailData[newValue]?.value || null); // Set the content of the selected tab
        setId(emailData[newValue]?.id || null);
        setActive(emailData[newValue]?.status || null); // Set the content of the selected tab
    };
    useEffect(() => {
        if (success === true) {
            handleOpen();
            handleChange();
        }
    }, [success]);

    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={4} md={2} sx={{ paddingBottom: '20px' }}>
                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <Tabs
                            style={{ backgroundColor: '#FFFFFF', height: '100vh', marginRight: '16px' }}
                            value={value}
                            onChange={handleChange}
                            orientation="vertical"
                            variant="scrollable"
                        >
                            {emailData.map((row, index) => (
                                <Tab
                                    key={index}
                                    style={{ borderBottom: '1px solid #8A8A8A' }}
                                    label={
                                        <Grid container direction="column">
                                            <Typography
                                                style={{ textAlign: 'left', padding: '10px' ,fontSize:"16px" }}
                                                variant="subtitle1"
                                                color="inherit"
                                            >
                                                <b>{row.name} {row.status === '1' ? <CheckCircleIcon
                                                        sx={{ width: 14, height: 14 }}
                                                        style={{ color:  '#92bd44' }}
                                                    /> : ' ' }</b>
                                            </Typography>
                                        </Grid>
                                    }
                                    {...a11yProps(index)}
                                />
                            ))}
                        </Tabs>
                    )}
                </Grid>
                <Grid item xs={12} sm={8} md={10}>
                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <TabPanel value={value} index={value}>
                            {content !== null ? ( // Check if content is available before rendering TemplatePage
                                <TemplatePage id={id} row={content} status={active} successCallback={handleSuccess} />
                            ) : (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                                    <Typography sx={{ fontWeight: 500 }}>No content available for this tab.</Typography>
                                </div>
                            )}
                        </TabPanel>
                    )}
                </Grid>
            </Grid>
        </>
    );
}
