import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, CardContent, ClickAwayListener, Grid, IconButton, Popper, TextField, Typography, useMediaQuery } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import EmojiPicker, { SkinTones } from 'emoji-picker-react';

// project imports

import ChartHistory from './ChartHistory';

import { openDrawer } from 'store/slices/menu';
import MainCard from 'ui-component/cards/MainCard';

import {  gridSpacing } from 'store/constant';
import { useDispatch,  } from 'store';
import { getUser,  insertChat } from 'store/slices/chat';

// assets
import AttachmentTwoToneIcon from '@mui/icons-material/AttachmentTwoTone';

import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import MoodTwoToneIcon from '@mui/icons-material/MoodTwoTone';

const chatHistories = [
    { id: 1, from: 'User1', to: 'Alene', text: `Hi Good Morning!`, time: '11:23 AM' },
    { id: 2, from: 'Alene', to: 'User1', text: `Hey. Very Good morning. How are you?`, time: '11:23 AM' }
];

//  drawer content element

// ==============================|| APPLICATION CHAT ||============================== //

const Notes = () => {
    const theme = useTheme();

    const dispatch = useDispatch();

    const scrollRef = useRef();

    useLayoutEffect(() => {
        if (scrollRef?.current) {
            scrollRef.current.scrollIntoView();
        }
    });

    const [user, setUser] = useState({});
    const [data, setData] = useState([]);

    useEffect(() => {
        // hide left drawer when email app opens
        dispatch(openDrawer(false));
        setData(chatHistories);
        dispatch(getUser(1));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // handle new message form
    const [message, setMessage] = useState('');
    const handleOnSend = () => {
        const d = new Date();
        setMessage('');
        const newMessage = {
            from: 'User1',
            to: user.name,
            text: message,
            time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setData((prevState) => [...prevState, newMessage]);
        dispatch(insertChat(newMessage));
    };

    const handleEnter = (event) => {
        if (event?.key !== 'Enter') {
            return;
        }
        handleOnSend();
    };

    // handle emoji
    const onEmojiClick = (event, emojiObject) => {
        console.log(emojiObject.emoji);
        setMessage(message + emojiObject.emoji);
    };

    const [anchorElEmoji, setAnchorElEmoji] = useState(); /** No single type can cater for all elements */
    const handleOnEmojiButtonClick = (event) => {
        setAnchorElEmoji(anchorElEmoji ? null : event?.currentTarget);
    };

    const emojiOpen = Boolean(anchorElEmoji);
    const emojiId = emojiOpen ? 'simple-popper' : undefined;
    const handleCloseEmoji = () => {
        setAnchorElEmoji(null);
    };

    if (!user) return <Typography>Loading...</Typography>;

    return (
        <Box sx={{ display: 'flex' }}>

            <Grid container spacing={gridSpacing}>
                <Grid item xs zeroMinWidth>
                    <MainCard
                        sx={{
                            bgcolor: '#FFFF'
                        }}
                    >
                        <Grid container spacing={gridSpacing}>
                            <PerfectScrollbar style={{ width: '100%', height: 'calc(100vh - 640px)', overflowX: 'hidden', minHeight: 225 }}>
                                <CardContent>
                                    <ChartHistory theme={theme} user={user} data={data} />
                                    <span ref={scrollRef} />
                                </CardContent>
                            </PerfectScrollbar>
                            <Grid item xs={12}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item>
                                        <IconButton
                                            ref={anchorElEmoji}
                                            aria-describedby={emojiId}
                                            onClick={handleOnEmojiButtonClick}
                                            size="large"
                                        >
                                            <MoodTwoToneIcon />
                                        </IconButton>
                                        <Popper
                                            id={emojiId}
                                            open={emojiOpen}
                                            anchorEl={anchorElEmoji}
                                            disablePortal
                                            modifiers={[
                                                {
                                                    name: 'offset',
                                                    options: {
                                                        offset: [-20, 20]
                                                    }
                                                }
                                            ]}
                                        >
                                            <ClickAwayListener onClickAway={handleCloseEmoji}>
                                                <MainCard elevation={8} content={false}>
                                                    <EmojiPicker
                                                        onEmojiClick={onEmojiClick}
                                                        defaultSkinTone={SkinTones.DARK}
                                                        autoFocusSearch={false}
                                                    />
                                                </MainCard>
                                            </ClickAwayListener>
                                        </Popper>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <TextField
                                            fullWidth
                                            label="Type a Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onKeyPress={handleEnter}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <IconButton size="large">
                                            <AttachmentTwoToneIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton color="primary" onClick={handleOnSend} size="large">
                                            <SendTwoToneIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </MainCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Notes;
