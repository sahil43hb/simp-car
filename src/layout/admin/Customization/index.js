import { useState, useEffect } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Drawer, Fab, Grid, IconButton, Tooltip, Typography, Avatar } from '@mui/material';

import { BsSpeedometer } from 'react-icons/bs';
import { IconBell } from '@tabler/icons';
// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import adminAxios from 'utils/adminAxios';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import CancelIcon from '@mui/icons-material/Cancel';
import { formatDistanceToNow } from 'date-fns'; // Import the date-fns function

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
    const [data, setData] = useState([]);
    const handleOpen = async () => {
        const token = window.localStorage.getItem('userServiceToken');
        try {
            const response = await adminAxios.post(`/notification`, { token });
            // console.log(response.data.invoice);
            setData(response.data);
            console.log(response.data,"sahil");
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleOpen();
    }, []);
    const theme = useTheme();
    const ListItemWrapper = styled('div')(({ theme }) => ({
        cursor: 'pointer',
        padding: 16,
        '&:hover': {
          background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light
        },
        '& .MuiListItem-root': {
          padding: 0
        }
      }));

    // drawer on/off
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    const getHumanReadableTime = (timestamp) => {
        const date = new Date(timestamp);
        const distance = formatDistanceToNow(date, { includeSeconds: false, addSuffix: true });
      
        // Remove the word "about" if present at the beginning
        return distance.startsWith('about ') ? distance.slice(6) : distance;
      };
    return (
        <>
            {/* toggle button */}
            <Tooltip>
                <Fab
                    component="div"
                    onClick={handleToggle}
                    size="medium"
                    variant="circular"
                    sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderBottomRightRadius: '4px',
                        top: '25%',
                        position: 'fixed',
                        right: 10,
                        zIndex: 1200,
                        boxShadow: theme.customShadows.secondary,
                        color: '#FFFF'
                    }}
                >
                    <AnimateButton>
                        <IconButton style={{ background: '#76A81B', borderRadius: '10px' }} color="inherit" size="large" disableRipple onClick={handleOpen}>
                            <BsSpeedometer onClick={handleOpen} />
                        </IconButton>
                    </AnimateButton>
                </Fab>
            </Tooltip>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: { xs: 300, sm: 400, md: 500, lg: 450 }
                    }
                }}
            >
                {open && (
                    <PerfectScrollbar component="div">
                        <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                            <Grid item xs={12}>
                                {/* layout type
                                <Layout />  */}
                                <Grid container spacing={2} padding="10px 1px">
                                    <Grid item xs={10}>
                                        <Typography variant="h3" paddingTop="30px">
                                            Recent Activity
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} sx={{ textAlign: 'right' }}>
                                        <IconButton onClick={handleToggle}>
                                            <CancelIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                {data.length === 0 ? (
                                    <ListItemWrapper key="no-data" style={{ width: 'auto', marginTop: '40vh' }}>
                                        <Typography colSpan={6} style={{ textAlign: 'center' }}>
                                            No Activity found
                                        </Typography>
                                    </ListItemWrapper>
                                ) : (
                                    data.map((data) => (
                                        <>
                                            <Grid container spacing={3}>
                                                <Grid  item xs={2}  >
                                                    <Avatar
                                                        variant="rounded"
                                                        sx={{
                                                            ...theme.typography.commonAvatar,
                                                            ...theme.typography.mediumAvatar,
                                                            transition: 'all .2s ease-in-out',
                                                            background:
                                                                theme.palette.mode === 'dark'
                                                                    ? theme.palette.dark.main
                                                                    : theme.palette.secondary.light,
                                                            color:
                                                                theme.palette.mode === 'dark'
                                                                    ? theme.palette.warning.dark
                                                                    : theme.palette.secondary.dark,
                                                            '&[aria-controls="menu-list-grow"],&:hover': {
                                                                background:
                                                                    theme.palette.mode === 'dark'
                                                                        ? theme.palette.warning.dark
                                                                        : theme.palette.secondary.dark,
                                                                color:
                                                                    theme.palette.mode === 'dark'
                                                                        ? theme.palette.grey[800]
                                                                        : theme.palette.secondary.light
                                                            }
                                                        }}
                                                        aria-haspopup="true"
                                                        color="inherit"
                                                        marginTop='25px'
                                                        marginLeft='26px'
                                                    >
                                                        <IconBell stroke={1.5} size="20px" />
                                                    </Avatar>  
                                                    </Grid>
                                                    <Grid item xs={9}>
                                                        <Typography variant="h4">{data.name}</Typography>
                                                        <Typography variant="subtitle1">{data.description}</Typography>
                                                        <p>{getHumanReadableTime(data.created_at)}</p>
                                                    </Grid>
                                              
                                            </Grid>
                                            <hr color="#DEF1BB" />
                                        </>
                                    ))
                                )}
                            </Grid>
                        </Grid>
                    </PerfectScrollbar>
                )}
            </Drawer>
        </>
    );
};

export default Customization;
