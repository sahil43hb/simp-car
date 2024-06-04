import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import About from 'views/homePages/AboutSimpcar';
import Worked from 'views/homePages/HowItWork';
import Contact from 'views/homePages/contact';
import FaQs from 'views/homePages/faqs';
// import MinimalLayout from 'layout/admin/MinimalLayout';

// maintenance routing
const PagesLanding = Loadable(lazy(() => import('views/homePages')));
const OurCarsPage = Loadable(lazy(() => import('views/homePages/ourCars')));
const ChekoutStep = Loadable(lazy(() => import('views/homePages/chekoutStep')));
const ProductDetal = Loadable(lazy(() => import('views/homePages/ourCars/productdetail')));



// ==============================|| auth ROUTING ||============================== //

const AuthRoutes = {
    path: '/',
    // element: <MinimalLayout />,
    children: [
        {
            path: '/landing',
            element: <PagesLanding />
        },
        {
            path: '/our-car',
            element: <OurCarsPage />
        },
        {
            path: '/checkOutStep',
            element: <ChekoutStep />
        },
        {
            path: '/how-work',
            element: <Worked/>
        },
        {
            path: '/about-simpcar',
            element: <About/>
        },
        {
            path: '/faqs',
            element: <FaQs/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        // {
        //     path: '/product-detail-page1',
        //     element: <ProductDetal />
        // }


    ]
};

export default AuthRoutes;
