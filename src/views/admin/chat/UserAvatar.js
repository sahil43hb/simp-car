import PropTypes from 'prop-types';

// material-ui
import { Avatar, Badge, Grid, AvatarGroup } from '@mui/material';

// project imports
import AvatarStatus from './AvatarStatus';
import Avatar1 from 'assets/images/users/user-1.png';
import Avatar2 from 'assets/images/users/user-2.png';

// assets
const avatarImage = require.context('assets/images/users', true);
// ==============================|| CHAT USER AVATAR WITH STATUS ICON ||============================== //

const UserAvatar = ({ user }) => (
    <Badge
        overlap="circular"
        badgeContent={<AvatarStatus status='available' />}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }}
    >
        {/* <Avatar alt={user.name} src={user.avatar && avatarImage(`./${user.avatar}`)} /> */}
        <Grid container style={{marginLeft: '-25px'}}>
            <AvatarGroup
                max={4}
                sx={{
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        fontSize: '1rem'
                    }
                }}
            >
                <Avatar alt={user.name} src={user.avatar && Avatar1} />
                <Avatar alt={user.name} src={user.avatar && avatarImage(`./${user.avatar}`)} />
            </AvatarGroup>
        </Grid>
    </Badge>
);

UserAvatar.propTypes = {
    user: PropTypes.object
};

export default UserAvatar;
