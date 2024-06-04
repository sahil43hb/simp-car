import React,{useState} from 'react';
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { IconBell } from '@tabler/icons';
import { formatDistanceToNow } from 'date-fns'; // Import the date-fns function


import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  CircularProgress
} from '@mui/material';

// assets
import User1 from 'assets/images/users/user-round.svg';

// styles
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

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = ({ notification }) => {
  const theme = useTheme();
  const [loader, setLoader] = useState(true);

  const getHumanReadableTime = (timestamp) => {
    const date = new Date(timestamp);
    const distance = formatDistanceToNow(date, { includeSeconds: false, addSuffix: true });
  
    // Remove the word "about" if present at the beginning
    return distance.startsWith('about ') ? distance.slice(6) : distance;
  };
  
  if (!notification) {
    // Display the loader when notification data is loading
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </div>
    );
  }
    return (
        <List
          sx={{
            width: '100%',
            maxWidth: 330,
            py: 0,
            borderRadius: '10px',
            [theme.breakpoints.down('md')]: {
              maxWidth: 300
            },
            '& .MuiListItemSecondaryAction-root': {
              top: 22
            },
            '& .MuiDivider-root': {
              my: 0
            },
            '& .list-container': {
              pl: 7
            }
          }}
        >
          {notification.length === 0 ? (
            <ListItemWrapper key="no-data" style={{width: '320px'}}>
              <Typography colSpan={6} style={{ textAlign: 'center' }}>
                No Notification found
              </Typography>
            </ListItemWrapper>
          ) : (
            notification.map((row) => (
              <React.Fragment key={row.id}>
                <ListItemWrapper style={{width: '350px'}}>
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <Avatar variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
                            color: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.secondary.dark,
                            '&[aria-controls="menu-list-grow"],&:hover': {
                                background: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.secondary.dark,
                                color: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.secondary.light
                            }
                        }}
                        aria-haspopup="true"
                        color="inherit">
                      <IconBell stroke={1.5} size="20px" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={row.name} />
                    <ListItemSecondaryAction>
                      <Grid container justifyContent="flex-end" marginTop='-7px' >
                        <Grid item xs={12}>
                          <Typography variant="caption" display="block" gutterBottom>
                            {getHumanReadableTime(row.created_at)}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Grid container direction="column" className="list-container">
                    <Grid item xs={12} sx={{ pb: 2 }}>
                      <Typography variant="subtitle2">
                        {row.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItemWrapper>
                <Divider />
              </React.Fragment>
            ))
          )}
        </List>
      );
};

export default NotificationList;
