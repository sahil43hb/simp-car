import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// routes

import authRotes from './AuthRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import Loadable from 'ui-component/Loadable';

const HomePage = Loadable(lazy(() => import('views/homePages')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([{ path: '/', element: <HomePage /> },LoginRoutes, authRotes, MainRoutes]);
}
