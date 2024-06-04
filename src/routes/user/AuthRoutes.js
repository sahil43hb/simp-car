import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/user/MinimalLayout';

// maintenance routing

// const PagesLanding = Loadable(lazy(() => import('views/homePages')));
// const OurCarsPage = Loadable(lazy(() => import('views/homePages/ourCars')));
const ProductDetail1 = Loadable(lazy(() => import('views/homePages/ourCars/productdetail/index')));
// const LoginPage = Loadable(lazy(() => import('views/auth/Login/LoginPage')));
const ChekoutStep = Loadable(lazy(() => import('views/homePages/chekoutStep')));

// ==============================|| auth ROUTING ||============================== //

const AuthRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        // {
        //     path: '/landing',
        //     element: <PagesLanding />
        // },
        {
            path: '/check-out-step1/:id',
            element: <ChekoutStep />
        },
        {
            path: `/product-detail-page1/:id`,
            element: <ProductDetail1 />
        },

    ]
};

export default AuthRoutes;
