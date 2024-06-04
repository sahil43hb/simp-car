// project imports
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

const AuthGuard = Loadable(lazy(() => import('utils/route-guard/user/AuthGuard')));
const MainLayout = Loadable(lazy(() => import('layout/user/MainLayout')));
const Dashboard = Loadable(lazy(() => import('views/user/Dashboard/index')));
const Subscription = Loadable(lazy(() => import('views/user/Subscriptions/index')));
const AddDocument = Loadable(lazy(() => import('views/user/Subscriptions/AddDocument')));
const AddSignature = Loadable(lazy(() => import('views/user/Subscriptions/AddSignature')));
const Invoice = Loadable(lazy(() => import('views/user/Invoices')));
const ParticularInvoice = Loadable(lazy(() => import('views/user/Invoices/ParticularInvoice')));
const Contact = Loadable(lazy(() => import('views/user/contact')));
const Address = Loadable(lazy(() => import('views/user/address')));
const BookCar = Loadable(lazy(() => import('views/user/Book-a-car')));
const ProductDetail = Loadable(lazy(() => import('views/user/Book-a-car/product-detail')));
const CheckOutStep = Loadable(lazy(() => import('views/user/Book-a-car/chekout-step')));
const AddPersonal = Loadable(lazy(() => import('views/user/address/AddPersonal')));
const AddBusiness = Loadable(lazy(() => import('views/user/address/AddBusiness')));
const EditBusiness = Loadable(lazy(() => import('views/user/address/EditAddress')));
const EditSub = Loadable(lazy(() => import('views/user/Subscriptions/EditSub')));
const Profile = Loadable(lazy(() => import('views/user/header-profile-section/Profile')));
const ChatMainPage = Loadable(lazy(() => import('views/user/chat')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/subscription',
            element: <Subscription />
        },
        {
            path: '/add-document',
            element: <AddDocument />
        },
        {
            path: '/add-signature',
            element: <AddSignature />
        },
        {
            path: '/payments',
            element: <Invoice />
        },
        {
            path: '/particular-invoice/:id',
            element: <ParticularInvoice />
        },
        {
            path: '/support',
            element: <Contact />
        },
        {
            path: '/address',
            element: <Address />
        },
        {
            path: '/book-a-car',
            element: <BookCar />
        },
        {
            path: `/product-detail-page/:id`,
            element: <ProductDetail />
        },
        {
            path: '/check-out-step/:id/:id/:id/:id',
            element: <CheckOutStep />
        },
        {
            path: '/add-personal',
            element: <AddPersonal />
        },
        {
            path: '/add-business',
            element: <AddBusiness />
        },
        {
            path: '/edit-address/:id',
            element: <EditBusiness />
        },
        {
            path: '/edit-subscription',
            element: <EditSub />
        },
        {
            path: '/profile',
            element: <Profile />
        },
       
        {
            path: '/messages',
            element: <ChatMainPage />
        }
    ]
};

export default MainRoutes;
