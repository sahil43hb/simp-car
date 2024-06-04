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
        setData(setUser);
    }, [setUser]);

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
                                            {user.first_name}
                                        </Typography>
                                    </Grid>
                                    <Grid item component="span">
                                        <Typography component="span" variant="subtitle2">
                                            {/* {user.lastMessage} */}
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
                                            {user.user_team}
                                        </Typography>
                                    </Grid>
                                    <Grid item component="span">
                                        {user.unReadChatCount !== 0 && (
                                            <Chip
                                                label='2'
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
