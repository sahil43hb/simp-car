import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import Backup from 'views/admin/backup';
import ManualEamil from 'views/admin/manual-email';

const AuthGuard = Loadable(lazy(() => import('utils/route-guard/admin/AuthGuard')));
const MainLayout = Loadable(lazy(() => import('layout/admin/MainLayout')));
const Dashboard = Loadable(lazy(() => import('views/admin/dashboard')));
const SocialProfile = Loadable(lazy(() => import('views/admin/SocialProfile')));
const Customer = Loadable(lazy(() => import('views/admin/customer')));
const EmailTemplate = Loadable(lazy(() => import('views/admin/emailTemplate')));
const InvoiceTemplate = Loadable(lazy(() => import('views/admin/invoiceTemplate')));
const AdminSubscription = Loadable(lazy(() => import('views/admin/subscriptions')));
const AdminInvoice = Loadable(lazy(() => import('views/admin/invoices')));
const ParticularInvoice = Loadable(lazy(() => import('views/admin/invoices/ParticularInvoice')));
const AdminCars = Loadable(lazy(() => import('views/admin/cars')));
const Transfer = Loadable(lazy(() => import('views/admin/transfers')));
const RolesPermissions = Loadable(lazy(() => import('views/admin/roles&permissions')));
const Member = Loadable(lazy(() => import('views/admin/team/member')));
const SmsTemplate = Loadable(lazy(() => import('views/admin/smsTemplate')));
const Edit = Loadable(lazy(() => import('views/admin/customer/edit')));
const Add = Loadable(lazy(() => import('views/admin/customer/AddCustomer')));
const EditSubscritions = Loadable(lazy(() => import('views/admin/subscriptions/editSubscriptions')));
const EditDetail = Loadable(lazy(() => import('views/admin/cars/editDetail')));
const AddCarDetail = Loadable(lazy(() => import('views/admin/cars/addDetail')));
const AddCarDetailFunishing = Loadable(lazy(() => import('views/admin/cars/addDetail/componentSubscDetail/FurnishingDetail')));
const AddCarDetailPrice = Loadable(lazy(() => import('ui-component/our-component/PriceConfig')));
const AddCarImage = Loadable(lazy(() => import('views/admin/cars/addDetail/componentBilder/index')));
const Messages = Loadable(lazy(() => import('views/admin/chat')));
const Teams = Loadable(lazy(() => import('views/admin/team/teams')));
const Plugins = Loadable(lazy(() => import('views/admin/plugins')));
// const GoogleMap = Loadable(lazy(() => import('views/admin/company-setting/Google')));
const CompanySetting = Loadable(lazy(() => import('views/admin/company-setting')));
const Clender = Loadable(lazy(() => import('views/admin/calendar')));
const KiloTier = Loadable(lazy(() => import('views/admin/carSettings/KiloTier')));
const MonthTier = Loadable(lazy(() => import('views/admin/carSettings/MonthTier')));
const Furnishing = Loadable(lazy(() => import('views/admin/carSettings/Furnishing')));
const CarCompany = Loadable(lazy(() => import('views/admin/carSettings/CarCompany')));
const CarType = Loadable(lazy(() => import('views/admin/carSettings/CarType')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/admin',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/admin/dashboard',
            element: <Dashboard />
        },
        {
            path: '/admin/social-profile',
            element: <SocialProfile />
        },
        {
            path: '/admin/chat',
            element: <Messages />
        },
        {
            path: '/admin/customer',
            element: <Customer />
        },
        {
            path: '/admin/customer/edit/:id',
            element: <Edit />
        },
        {
            path: '/admin/payments',
            element: <AdminInvoice />
        },
        {
            path: '/admin/particular-invoice/:id',
            element: <ParticularInvoice />
        },
        {
            path: '/admin/customer/add',
            element: <Add />
        },
        {
            path: '/admin/subscriptions',
            element: <AdminSubscription />
        },
        {
            path: '/admin/subscription/edit-subscription',
            element: <EditSubscritions />
        },
        {
            path: '/admin/listing',
            element: <AdminCars />
        },
        {
            path: '/admin/car/AddCar',
            element: <AddCarDetail />
        },
        {
            path: '/admin/car/AddCar/furnishing/:id',
            element: <AddCarDetailFunishing />
        },
        {
            path: '/admin/car/AddCar/price/:id',
            element: <AddCarDetailPrice />
        },
        {
            path: '/admin/car/AddCar/image/:id',
            element: <AddCarImage />
        },
        {
            path: '/admin/carsettings/kilometer-tier',
            element: <KiloTier />
        },
        {
            path: '/admin/carsettings/monthly-tier',
            element: <MonthTier />
        },
        {
            path: '/admin/carsettings/furnishing',
            element: <Furnishing />
        },
        {
            path: '/admin/carsettings/car-company',
            element: <CarCompany />
        },
        {
            path: '/admin/carsettings/car-type',
            element: <CarType />
        },
        {
            path: '/admin/car/editDetail',
            element: <EditDetail />
        },
        {
            path: '/admin/plugins',
            element: <Plugins />
        },
        {
            path: '/admin/email-template',
            element: <EmailTemplate />
        },
        {
            path: '/admin/invoice-templates',
            element: <InvoiceTemplate />
        },
        {
            path: '/admin/SMS-Templates',
            element: <SmsTemplate />
        },
        {
            path: '/admin/company-setting',
            element: <CompanySetting />
        },
        {
            path: '/admin/backup-systems',
            element: <Backup />
        },
        {
            path: '/admin/transfer',
            element: <Transfer />
        },
        {
            path: '/admin/roles-&-permissions',
            element: <RolesPermissions />
        },
        {
            path: '/admin/manual-email',
            element: <ManualEamil />
        },
        {
            path: '/admin/calender',
            element: <Clender />
        },
        {
            path: '/admin/teams',
            element: <Teams />
        },
        {
            path: '/admin/members',
            element: <Member />
        }
        // {
        //     path:'/admin/jobs-function&Permissions',
        //     element: <Teams/>
        // }
    ]
};

export default MainRoutes;
