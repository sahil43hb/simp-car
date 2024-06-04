import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Button, Card, Chip, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import Avatar from '../extended/Avatar';
import { gridSpacing } from 'store/constant';

// assets
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const avatarImage = require.context('assets/images/users', true);

// styles
const FacebookWrapper = styled(Button)({
    padding: 8,
    background: 'rgba(66, 103, 178, 0.2)',
    '& svg': {
        color: '#4267B2'
    },
    '&:hover': {
        background: '#4267B2',
        '& svg': {
            color: '#fff'
        }
    }
});

const TwitterWrapper = styled(Button)({
    padding: 8,
    background: 'rgba(29, 161, 242, 0.2)',
    '& svg': {
        color: '#1DA1F2'
    },
    '&:hover': {
        background: '#1DA1F2',
        '& svg': {
            color: '#fff'
        }
    }
});

const LinkedInWrapper = styled(Button)({
    padding: 8,
    background: 'rgba(14, 118, 168, 0.12)',
    '& svg': {
        color: '#0E76A8'
    },
    '&:hover': {
        background: '#0E76A8',
        '& svg': {
            color: '#fff'
        }
    }
});

// ==============================|| USER SIMPLE CARD ||============================== //

const UserSimpleCard = ({ avatar, name,btnName, url }) => {
    const theme = useTheme();
    const avatarProfile = avatar && avatarImage(`./${avatar}`);

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card
            sx={{
                p: 2,
                background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
                border: '1px solid',
                borderColor: theme.palette.mode === 'dark' ? 'transparent' : theme.palette.grey[100],
                '&:hover': {
                    border: `1px solid${theme.palette.primary.main}`
                }
            }}
        >
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Grid item xs zeroMinWidth>
                                <Avatar alt={name} src={avatarProfile} sx={{ width: 72, height: 72 }} />
                            </Grid>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid item xs zeroMinWidth padding="10px">
                                <Typography variant="h2">{name}</Typography>
                                <button
                                    onClick={url}
                                    type="button"
                                    style={{
                                        color: '#FFFF',
                                        backgroundColor: '#76A81B',
                                        marginTop: '7px',
                                        borderRadius: '6px',
                                        border: '1px solid #76A81B',
                                        cursor: 'pointer',
                                        padding:"7px 15px",
                                        
                                        textAlign: 'center'
                                    }}
                                >
                              {btnName}
                                </button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

UserSimpleCard.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
};

export default UserSimpleCard;
