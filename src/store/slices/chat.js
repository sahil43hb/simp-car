// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import myAxios from 'utils/myAxios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    chats: [],
    user: {},
    users: []
};

const slice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET USER
        getUserSuccess(state, action) {
            state.user = action.payload;
        },

        // GET USER CHATS
        getUserChatsSuccess(state, action) {
            // console.log(state,action,"sasasa")
            state.chats = action.payload;
        },

        // GET USERS
        getUsersSuccess(state, action) {
            state.users = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
const token = window.localStorage.getItem('adminServiceToken');

export function getUser(id) {
    return async () => {
        try {
            const response = await myAxios.post('/chat/users/id', { id,token });
            dispatch(slice.actions.getUserSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getUserChats(user) {
    return async () => {
        try {
            const response = await myAxios.post('/chat/filter', { user,token });
            dispatch(slice.actions.getUserChatsSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function insertChat(chat) {
    return async () => {
        try {
            await myAxios.post('/chat/insert', {chat,token});
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getUsers() {
    return async () => {
        try {
            const response = await myAxios.get('/chat/users',{token});
            dispatch(slice.actions.getUsersSuccess(response.data.users));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
