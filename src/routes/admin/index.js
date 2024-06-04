import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// routes
import AuthRotes from './AuthRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import Loadable from 'ui-component/Loadable';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([LoginRoutes, AuthRotes, MainRoutes]);
}