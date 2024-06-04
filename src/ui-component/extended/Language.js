import { useEffect, useRef, useState } from 'react';
import Chaina from "assets/images/Chaina.png"
import Eng from "assets/images/Eng.png"
import france from "assets/images/france.png"
import Ger from "assets/images/Ger.png"
import Spanish from "assets/images/Spanish.png"

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    ClickAwayListener,
    Grid,
    List,
    ListItemButton,
    ListItemText,
    Paper,
    Popper,
    Typography,
    useMediaQuery
} from '@mui/material';

// project imports
import Transitions from 'ui-component/extended/Transitions';

// assets
import TranslateTwoToneIcon from '@mui/icons-material/TranslateTwoTone';
import useConfig from 'hooks/useConfig';
import { BsFillFlagFill } from 'react-icons/bs';
import { Stack } from '@mui/system';

// ==============================|| LOCALIZATION ||============================== //

const Language = () => {
    const { borderRadius, locale, onChangeLocale } = useConfig();

    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [language, setLanguage] = useState({img:Ger ,name:"German",code:"de"});
    const [show, setShow] = useState([
        {img:Eng ,name:"English",code:"en"},
        {img:Ger ,name:"German",code:"de"},
        {img:france,name:"French",code:"fr"},
        
    ]);

    const handleListItemClick = (event, lng) => {
        // console.log(lng)
        setLanguage(lng);
        onChangeLocale(lng.code);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);


    return (
        <>
       
                <Grid
                    variant="rounded"
                    sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                         marginTop: '10px' }}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    color="inherit"
                >
                    {language && <Grid sx={{display:"flex"}}><img src={language.img} alt='not available'   style={{padding:"0px 10px"}}/><Typography sx={{paddingTop:"3px" ,display:{xs:"none",md:"block"}}}>{language.name}</Typography></Grid>}
                </Grid>
          

            <Popper
                placement={matchesXs ? 'bottom-start' : 'bottom'}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                modifiers={[
                    {
                        name: 'offset',
                        options: {
                            offset: [matchesXs ? 0 : 0, 20]
                        }
                    }
                ]}
            >
                {({ TransitionProps }) => (
                    <ClickAwayListener onClickAway={handleClose}>
                        <Transitions position={matchesXs ? 'top-left' : 'top'} in={open} {...TransitionProps}>
                            <Paper elevation={16}>
                                {open && (
                                    <List
                                        component="nav"
                                        sx={{
                                            width: '100%',
                                            minWidth: 200,
                                            maxWidth: 280,
                                            bgcolor: theme.palette.background.paper,
                                            borderRadius: `${borderRadius}px`,
                                            [theme.breakpoints.down('md')]: {
                                                maxWidth: 250
                                            }
                                        }}
                                    >

                                       
                                    

                                {show.map((data,i) => (
                                    // console.log(data)
                                    <ListItemButton  onClick={(event) => handleListItemClick(event,data)}>
                                    <ListItemText
                                        primary={
                                            <Grid container>
                                            <img src={data.img} alt='not available'   style={{paddingRight:"13px"}}/>
                                                <Typography color="textPrimary">{data.name}</Typography>
                                                <Typography variant="caption" color="textSecondary" sx={{ ml: '8px' }}>
                                                    {data.code}
                                                </Typography>
                                            </Grid>
                                        }
                                    />
                                </ListItemButton>
                                ))}
                                </List>
                                )}
                            </Paper>
                        </Transitions>
                    </ClickAwayListener>
                )}
            </Popper>
        </>
    );
};

export default Language;
