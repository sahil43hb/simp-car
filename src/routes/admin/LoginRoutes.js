import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/admin/GuestGuard';
import MinimalLayout from 'layout/admin/MinimalLayout';
import NavMotion from 'layout/admin/NavMotion';
import Loadable from 'ui-component/Loadable';
import { Outlet } from 'react-router-dom';
// login routing
const AuthLogin = Loadable(lazy(() => import('views/admin/auth/Login')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/admin',
    element: (
        <NavMotion>
            <GuestGuard>
                <Outlet />
            </GuestGuard>
        </NavMotion>
    ),
    children: [
        {
            path: '/admin',
            element: <AuthLogin />
        },
        {
            path: '/admin/login',
            element: <AuthLogin />
        }
    ]
};

export default LoginRoutes;
