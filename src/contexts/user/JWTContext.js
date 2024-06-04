import PropTypes from 'prop-types';
import React, { createContext, useEffect, useReducer } from 'react';


// third-party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/user/accountReducer';

// project imports
import Loader from 'ui-component/Loader';
import myAxios from 'utils/myAxios';

const chance = new Chance();

// constant
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

const setSession = (adminServiceToken) => {
    if (adminServiceToken) {
        localStorage.setItem('adminServiceToken', adminServiceToken);
        myAxios.defaults.headers.common.Authorization = `Bearer ${adminServiceToken}`;
    } else {
        localStorage.removeItem('adminServiceToken');
        delete myAxios.defaults.headers.common.Authorization;
    }
};

const verifyToken = (adminServiceToken) => {
    if (!adminServiceToken) {
        return false;
    }
    const decoded = jwtDecode(adminServiceToken);
    /**
     * Property 'exp' does not exist on type '<T = unknown>(token, options?: JwtDecodeOptions | undefined) => T'.
     */
    return decoded.exp > Date.now() / 1000;
};



// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const JWTContext = createContext(null);

export const JWTProvider = ({ children, email, password, phone }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);
    const setUserSession = (user) => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));   
        } else {
            localStorage.removeItem('user');
        }
    };
    useEffect(() => {
        const init = async () => {
            try {
                const adminServiceToken = window.localStorage.getItem('adminServiceToken');
 
                // if (adminServiceToken && verifyToken(adminServiceToken)) {
                if (adminServiceToken) {
                    setSession(adminServiceToken);
                    const response = await myAxios.post('/me',adminServiceToken);
                    const user = response.data;
                    setUserSession(user);
                    dispatch({
                        type: LOGIN,
                        payload: {
                            isLoggedIn: true,
                            user
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
        const response = await myAxios.post('/login', { 
            email, 
            password
        });

        const user  = response.data.user;
        const adminServiceToken = response.data.token;
        setSession(adminServiceToken);
        setUserSession(user);
        dispatch({
            type: LOGIN,
            payload: {
                isLoggedIn: true,
                user
            },
        });
    };


    const register = async (email, password, firstName, lastName, phone) => {
        // todo: this flow need to be recode as it not verified
        const id = chance.bb_pin();
        const response = await myAxios.post('/signup',
        {
            id,
            firstName,
            lastName,
            password,
            email,
            phone,
        });
        const users = response.data;
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
                        register,
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
