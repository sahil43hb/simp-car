import PropTypes from 'prop-types';
import React, { createContext, useEffect, useReducer } from 'react';


// third-party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/admin/accountReducer';

// project imports
import Loader from 'ui-component/Loader';
import adminAxios from 'utils/adminAxios';

const chance = new Chance();

// constant
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null,
    permissions: [],
};


const verifyToken = (userServiceToken) => {
    if (!userServiceToken) {
        return false;
    }
    const decoded = jwtDecode(userServiceToken);
    /**
     * Property 'exp' does not exist on type '<T = unknown>(token, options?: JwtDecodeOptions | undefined) => T'.
     */
    return decoded.exp > Date.now() / 1000;
};

const setSession = (userServiceToken) => {
    if (userServiceToken) {
        localStorage.setItem('userServiceToken', userServiceToken);
        adminAxios.defaults.headers.common.Authorization = `Bearer ${userServiceToken}`;
    } else {
        localStorage.removeItem('userServiceToken');
        delete adminAxios.defaults.headers.common.Authorization;
    }
};
const setAdminSession = (user) => {
    if (user) {
        localStorage.setItem('admin', JSON.stringify(user));   
    } else {
        localStorage.removeItem('admin');
    }
};


  
// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const JWTContext = createContext(null);

export const JWTProvider = ({ children, email, password, phone }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    useEffect(() => {
        const init = async () => {
            try {
                const userServiceToken = window.localStorage.getItem('userServiceToken');
 
                // if (userServiceToken && verifyToken(userServiceToken)) {
                if (userServiceToken) {
                    setSession(userServiceToken);
                    const response = await adminAxios.post('/me',userServiceToken);
                    const admin = response.data;
                    setAdminSession(admin);
                    dispatch({
                        type: LOGIN,
                        payload: {
                            isLoggedIn: true,
                            admin
                        }
                    });
                } else {
                    dispatch({
                        type: LOGOUT
                    });
                }
            } catch (err) {
                console.error('jwterror',err);
                dispatch({
                    type: LOGOUT
                });
            }
        };

        init();
    }, []);


    const login = async (email, password) => {
        const response = await adminAxios.post('/login', { 
            email, 
            password
        });

        const user  = response.data.data;
        const userServiceToken = response.data.token;
        const permissions = response.data.permission;
        console.log(permissions);
        setSession(userServiceToken);
        dispatch({
            type: LOGIN,
            payload: {
                isLoggedIn: true,
                user,
                permissions,
            },
        });
    };

    
      

    const logout = () => {
        setSession(null);
        dispatch({ type: LOGOUT });
    };

    const resetPassword = (email) => console.log(email);

    const updateProfile = () => { };

    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
    }

    return (
        <>
            {state.isInitialized ? (
                <JWTContext.Provider
                    value={{
                        ...state,
                        email,
                        phone,
                        password,
                        login,
                        logout,
                        resetPassword,
                        updateProfile,
                    }}
                >
                    {children}
                </JWTContext.Provider>
            ) : (
                <Loader />
            )}
        </>
    );
};


JWTProvider.propTypes = {
    children: PropTypes.node
};

export default JWTContext;
