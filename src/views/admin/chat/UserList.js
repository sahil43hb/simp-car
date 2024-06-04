import PropTypes from 'prop-types';
import { useEffect, useState, Fragment } from 'react';

// material-ui
import { Chip, Divider, Grid, List, ListItemButton, ListItemAvatar, ListItemText, Typography } from '@mui/material';

// project imports
import UserAvatar from './UserAvatar';

import { useDispatch, useSelector } from 'store';
import { getUsers } from 'store/slices/chat';


const users = [
    {
        id: 1,
        name: 'Alene',
        company: 'ABC Pvt Ltd',
        role: 'Sr. Customer Manager',
        work_email: 'alene_work@company.com',
        personal_email: 'alene@company.com',
        work_phone: '380-293-0177',
        personal_phone: '380-293-0177',
        location: 'Port Narcos',
        avatar: 'user-1.png',
        status: 'Technical Department',
        lastMessage: '2h ago',
        birthdayText: 'happy Birthday Alene',
        unReadChatCount: 2,
        online_status: 'available'
    },
    {
        id: 2,
        name: 'Keefe',
        company: 'ABC Pvt Ltd',
        role: 'Dynamic Operations Officer',
        work_email: 'keefe_work@gmil.com',
        personal_email: 'keefe@gmil.com',
        work_phone: '253-418-5940',
        personal_phone: '253-418-5940',
        location: 'Afghanistan',
        avatar: 'user-2.png',
        status: 'Support Executive',
        lastMessage: '1:20 AM',
        birthdayText: 'happy Birthday Keefe',
        unReadChatCount: 3,
        online_status: 'available'
    },
    {
        id: 3,
        name: 'Lazaro',
        company: 'ABC Pvt Ltd',
        role: 'Resource Investigator',
        work_email: 'lazaro_work@gmil.com',
        personal_email: 'lazaro@gmil.com',
        work_phone: '283-029-1364',
        personal_phone: '283-029-1364',
        location: 'Albania',
        avatar: 'user-3.png',
        status: 'Resource Investigator',
        lastMessage: 'Yesterday',
        birthdayText: 'happy Birthday Lazaro',
        unReadChatCount: 1,
        online_status: 'available'
    },
    {
        id: 4,
        name: 'Hazle',
        company: 'ABC Pvt Ltd',
        role: 'Teamworker',
        work_email: 'hazle_work@gmil.com',
        personal_email: 'hazle@gmil.com',
        work_phone: '380-293-0177',
        personal_phone: '380-293-0177',
        location: 'Algeria',
        avatar: 'user-4.png',
        status: 'Teamworker',
        lastMessage: '4/25/2021',
        birthdayText: 'happy Birthday Hazle',
        unReadChatCount: 0,
        online_status: 'do_not_disturb'
    },
    // {
    //     id: 5,
    //     name: 'Herman Essertg',
    //     company: 'ABC Pvt Ltd',
    //     role: 'Co-ordinator',
    //     work_email: 'herman_essertg_work@gmil.com',
    //     personal_email: 'herman_essertg@gmil.com',
    //     work_phone: '253-418-5940',
    //     personal_phone: '253-418-5940',
    //     location: 'Andorra',
    //     avatar: 'user-5.png',
    //     status: 'Co-ordinator',
    //     lastMessage: '4/25/2021',
    //     birthdayText: 'happy Birthday Herman',
    //     unReadChatCount: 0,
    //     online_status: 'do_not_disturb'
    // },
    // {
    //     id: 6,
    //     name: 'Wilhelmine Durrg',
    //     company: 'ABC Pvt Ltd',
    //     role: 'Monitor Evaluator',
    //     work_email: 'wilhelmine_durrg_work@gmil.com',
    //     personal_email: 'wilhelmine_durrg@gmil.com',
    //     work_phone: '380-293-0177',
    //     personal_phone: '380-293-0177',
    //     location: 'Angola',
    //     avatar: 'user-6.png',
    //     status: 'Monitor Evaluator',
    //     lastMessage: '4/25/2021',
    //     birthdayText: 'happy Birthday Wilhelmine',
    //     unReadChatCount: 0,
    //     online_status: 'available'
    // },
    // {
    //     id: 7,
    //     name: 'Agilulf Fuxg',
    //     company: 'ABC Pvt Ltd',
    //     role: 'Specialist',
    //     work_email: 'agilulf_fuxg_work@gmil.com',
    //     personal_email: 'agilulf_fuxg@gmil.com',
    //     work_phone: '253-418-5940',
    //     personal_phone: '253-418-5940',
    //     location: 'Antigua and Barbuda',
    //     avatar: 'user-7.png',
    //     status: 'Specialist',
    //     lastMessage: '4/25/2021',
    //     birthdayText: 'happy Birthday Agilulf',
    //     unReadChatCount: 0,
    //     online_status: 'available'
    // },
    // {
    //     id: 8,
    //     name: 'Adaline Bergfalks',
    //     company: 'ABC Pvt Ltd',
    //     role: 'Shaper',
    //     work_email: 'adaline_bergfalks_work@gmil.com',
    //     personal_email: 'adaline_bergfalks@gmil.com',
    //     work_phone: '253-118-5940',
    //     personal_phone: '253-118-5940',
    //     location: 'Argentina',
    //     avatar: 'user-6.png',
    //     status: 'Shaper',
    //     lastMessage: '4/25/2021',
    //     birthdayText: 'happy Birthday Adaline',
    //     unReadChatCount: 0,
    //     online_status: 'offline'
    // },
    // {
    //     id: 9,
    //     name: 'Eadwulf Beckete',
    //     company: 'ABC Pvt Ltd',
    //     role: 'Implementer',
    //     work_email: 'eadwulf_beckete_work@gmil.com',
    //     personal_email: 'eadwulf_beckete@gmil.com',
    //     work_phone: '153-418-5940',
    //     personal_phone: '153-418-5940',
    //     location: 'Armenia',
    //     avatar: 'user-1.png',
    //     status: 'Implementer',
    //     lastMessage: '4/25/2021',
    //     birthdayText: 'happy Birthday Eadwulf',
    //     unReadChatCount: 0,
    //     online_status: 'offline'
    // },
    // {
    //     id: 10,
    //     name: 'Midas',
    //     company: 'ABC Pvt Ltd',
    //     role: 'Leader',
    //     work_email: 'midas_work@gmil.com',
    //     personal_email: 'midas@gmil.com',
    //     work_phone: '252-418-5940',
    //     personal_phone: '252-418-5940',
    //     location: 'Australia',
    //     avatar: 'user-2.png',
    //     status: 'Leader',
    //     lastMessage: '4/25/2021',
    //     birthdayText: 'happy Birthday Midas',
    //     unReadChatCount: 0,
    //     online_status: 'offline'
    // },
    // {
    //     id: 11,
    //     name: 'Uranus',
    //     company: 'ABC Pvt Ltd',
    //     role: 'Facilitator',
    //     work_email: 'uranus_work@gmil.com',
    //     personal_email: 'uranus@gmil.com',
    //     work_phone: '253-218-5940',
    //     personal_phone: '253-218-5940',
    //     location: 'Austria',
    //     avatar: 'user-3.png',
    //     status: 'Facilitator',
    //     lastMessage: '4/25/2021',
    //     birthdayText: 'happy Birthday Uranus',
    //     unReadChatCount: 0,
    //     online_status: 'available'
    // },
    // {
    //     id: 12,
    //     name: 'Peahen',
    //     company: 'ABC Pvt Ltd',
    //     role: 'Coach',
    //     work_email: 'peahen_work@gmil.com',
    //     personal_email: 'peahen@gmil.com',
    //     work_phone: '253-418-1940',
    //     personal_phone: '253-418-1940',
    //     location: 'Azerbaijan',
    //     avatar: 'user-4.png',
    //     status: 'One of the Graces.',
    //     lastMessage: '4/25/2021',
    //     birthdayText: 'happy Birthday Peahen',
    //     unReadChatCount: 0,
    //     online_status: 'do_not_disturb'
    // },
    // {
    //     id: 13,
    //     name: 'Menelaus',
    //     company: 'ABC Pvt Ltd',
    //     role: 'Facilitator',
    //     work_email: 'menelaus_work@gmil.com',
    //     personal_email: 'menelaus@gmil.com',
    //     work_phone: '053-418-5940',
    //     personal_phone: '053-418-5940',
    //     location: 'Bahamas',
    //     avatar: 'user-5.png',
    //     status: 'To stay',
    //     lastMessage: '4/25/2021',
    //     birthdayText: 'happy Birthday Menelaus',
    //     unReadChatCount: 0,
    //     online_status: 'offline'
    // }
];

// ==============================|| CHAT USER LIST ||============================== //

const UserList = ({ setUser }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    // const { users } = useSelector((state) => state.chat);

    useEffect(() => {
        dispatch(getUsers());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setData(users);
    }, [users]);

    return (
        <List component="nav">
            {data.map((user) => (
                <Fragment key={user.id}>
                    <ListItemButton
                        onClick={() => {
                            setUser(user);
                        }}
                    >
                    <ListItemAvatar>
                            <UserAvatar user={user} />
                        </ListItemAvatar>
                       
                        <ListItemText
                            primary={
                                <Grid container alignItems="center" spacing={1} component="span">
                                    <Grid item xs zeroMinWidth component="span">
                                        <Typography
                                            variant="h5"
                                            color="inherit"
                                            component="span"
                                            sx={{
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                display: 'block'
                                            }}
                                        >
                                            {user.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item component="span">
                                        <Typography component="span" variant="subtitle2">
                                            {user.lastMessage}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            }
                            secondary={
                                <Grid container alignItems="center" spacing={1} component="span">
                                    <Grid item xs zeroMinWidth component="span">
                                        <Typography
                                            variant="caption"
                                            component="span"
                                            sx={{
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                display: 'block'
                                            }}
                                        >
                                            {user.status}
                                        </Typography>
                                    </Grid>
                                    <Grid item component="span">
                                        {user.unReadChatCount !== 0 && (
                                            <Chip
                                                label={user.unReadChatCount}
                                                component="span"
                                            
                                                sx={{
                                                    width: 20,
                                                background:"#92BD44",
                                                    height: 20,
                                                    '& .MuiChip-label': {
                                                        px: 0.5
                                                    }
                                                }}
                                            />
                                        )}
                                    </Grid>
                                </Grid>
                            }
                        />
                    </ListItemButton>
                    <Divider />
                </Fragment>
            ))}
        </List>
    );
};

UserList.propTypes = {
    setUser: PropTypes.func
};

export default UserList;
