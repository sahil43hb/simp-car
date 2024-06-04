import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/user/GuestGuard';
import MinimalLayout from 'layout/user/MinimalLayout';
import NavMotion from 'layout/user/NavMotion';
import Loadable from 'ui-component/Loadable';
import CodeVerification from 'views/user/auth/CodeVerification';
import ForgotPassword from 'views/user/auth/ForgotPassword';
import CheckEmail from 'views/user/auth/CheckMail';
import ResetPassword from 'views/user/auth/ResetPassword';

// login routing
const AuthLogin = Loadable(lazy(() => import('views/user/auth/Login')));
const AuthRegister = Loadable(lazy(() => import('views/user/auth/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: (
        <NavMotion>
            <GuestGuard>
                <MinimalLayout />
            </GuestGuard>
        </NavMotion>
    ),
    children: [
        {
            path: '/',
            element: <AuthLogin />
        },
        {
            path: '/login',
            element: <AuthLogin />
        },
        {
            path: '/register',
            element: <AuthRegister />
        },
        {
            path: '/register/code-verification',
            element: <CodeVerification />
        },
        {
            path: '/forgot',
            element: <ForgotPassword />
        },
        {
            path: '/check-mail',
            element: <CheckEmail />
        },
        {
            path: '/otp/code-verification',
            element: <CodeVerification />
        },
        {
            path: '/reset-password',
            element: <ResetPassword />
        }
    ]
};

export default LoginRoutes;
