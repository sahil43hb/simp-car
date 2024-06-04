import PropTypes from 'prop-types';
import React, { forwardRef, useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
// material-ui
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Checkbox,
    Grid,
    Slide,
    Typography
} from '@mui/material';
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';
import CloseIcon from '@mui/icons-material/Close';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// animation
const Transition = forwardRef((props, ref) => <Slide direction="left" ref={ref} {...props} />);

// tags list & style





// ==============================|| PRODUCT ADD DIALOG ||============================== //

const Add = ({ open, handleCloseDialog, id, data }) => {
    const [selectedValues, setSelectedValues] = useState([]);
    const [loading, setLoading] = useState(false);
    // Function to handle checkbox change
    useEffect(() => {
        // Check if data is available before updating selectedValues state
        if (data && data.length > 0) {
            const routeIds = data.map((item) => item.route_id);
            setSelectedValues(routeIds);
        }
    }, [data]);

    // Function to handle checkbox change
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedValues((prevSelectedValues) =>
            prevSelectedValues.includes(value) ? prevSelectedValues.filter((item) => item !== value) : [...prevSelectedValues, value]
        );
    };
    const token = window.localStorage.getItem('userServiceToken');

    const handleOpen = async () => {
        setLoading(true);
        try {
            const response = await adminAxios.post(`/store-team-routes/${id}`, { token, selectedValues });
            if (response.data === 'success') {
                setLoading(false);
                handleCloseDialog();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleClearSelectedValues = () => {
        setSelectedValues('');
        handleCloseDialog();
    };
    console.log('Selected i=>', selectedValues);

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            sx={{
                '&>div:nth-of-type(3)': {
                    justifyContent: 'flex-end',
                    '&>div': {
                        m: 0,
                        borderRadius: '0px',
                        maxWidth: 450,
                        maxHeight: '100%'
                    }
                }
            }}
        >
            {open && (
                <>
                    <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography fontSize="21px">Permissions</Typography>{' '}
                        <Typography>
                            <CloseIcon onClick={handleClearSelectedValues} />
                        </Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container spacing={gridSpacing} sx={{ mt: 0.25 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox
                                        {...label}
                                        typeof="round"
                                        value="1"
                                        checked={selectedValues.includes('1')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Dashboard</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This option will give access the team member to dashboard
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox {...label} value="2" checked={selectedValues.includes('2')} onChange={handleCheckboxChange} />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Team Management</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This option will give access the team member to Team Management.
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox {...label} value="3" checked={selectedValues.includes('3')} onChange={handleCheckboxChange} />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Role & Permissions</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This Will allow the team member to access Role & Permissions Tab
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox {...label} value="4" checked={selectedValues.includes('4')} onChange={handleCheckboxChange} />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Customers</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This Will allow the team member to access Customers Tab
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox {...label} value="5" checked={selectedValues.includes('5')} onChange={handleCheckboxChange} />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Subscriptions</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This Will allow the team member to access Subscriptions Tab
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox {...label} value="6" checked={selectedValues.includes('6')} onChange={handleCheckboxChange} />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Messenger</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This Will allow the team member to access Messenger section
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox {...label} value="7" checked={selectedValues.includes('7')} onChange={handleCheckboxChange} />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Payments</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>This Will allow the team member to access Payments Tab</Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox {...label} value="8" checked={selectedValues.includes('8')} onChange={handleCheckboxChange} />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Transfer</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>This Will allow the team member to access Transfer Tab</Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox {...label} value="9" checked={selectedValues.includes('9')} onChange={handleCheckboxChange} />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Manual Email</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>This Will allow the team member to access Manual Email Tab</Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox {...label} value="10" checked={selectedValues.includes('10')} onChange={handleCheckboxChange} />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Calender</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>This Will allow the team member to access Calender Tab</Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox
                                        {...label}
                                        value="11"
                                        checked={selectedValues.includes('11')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Listing</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>This Will allow the team member to access Listing Tab</Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox
                                        {...label}
                                        value="12"
                                        checked={selectedValues.includes('12')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Car Sttings</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This Will allow the team member to access Car Settings Section
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox
                                        {...label}
                                        value="13"
                                        checked={selectedValues.includes('13')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Email Templates</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This Will allow the team member to access Email Templates Tab
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox
                                        {...label}
                                        value="14"
                                        checked={selectedValues.includes('14')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Invoice Template</Typography>
                                </Grid>

                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This Will allow the team member to access Invoice Template Tab
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox
                                        {...label}
                                        value="15"
                                        checked={selectedValues.includes('15')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Sms Template</Typography>
                                </Grid>
                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This Will allow the team member to access Sms Template Tab
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox
                                        {...label}
                                        value="16"
                                        checked={selectedValues.includes('16')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Company Settings</Typography>
                                </Grid>
                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This Will allow the team member to access Company Settings Tab
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox
                                        {...label}
                                        value="17"
                                        checked={selectedValues.includes('17')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Google Map</Typography>
                                </Grid>
                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This Will allow the team member to access Google Map Tab
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox
                                        {...label}
                                        value="18"
                                        checked={selectedValues.includes('18')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Plugins</Typography>
                                </Grid>
                                <Typography sx={{ paddingLeft: '70px' }}>This Will allow the team member to access Plugins Tab</Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ display: 'flex' }}>
                                    <Checkbox
                                        {...label}
                                        value="19"
                                        checked={selectedValues.includes('19')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Typography sx={{ paddingTop: '12px', fontWeight: 'bold' }}>Backup System</Typography>
                                </Grid>
                                <Typography sx={{ paddingLeft: '70px' }}>
                                    This Will allow the team member to access Backup System Tab
                                </Typography>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <AnimateButton>
                            {loading === true ? (
                                <CircularProgress />
                            ) : (
                                <Button variant="contained" onClick={handleOpen}>
                                    Save
                                </Button>
                            )}
                        </AnimateButton>
                        <Button variant="text" color="error" onClick={handleClearSelectedValues}>
                            Close
                        </Button>
                    </DialogActions>
                </>
            )}
        </Dialog>
    );
};

Add.propTypes = {
    open: PropTypes.bool,
    handleCloseDialog: PropTypes.func,
    id: PropTypes.number,
    data: PropTypes.array,
    clearSelectedValues: PropTypes.func
};

export default Add;
