// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome, IconHelp, IconSitemap ,IconTemplate} from '@tabler/icons';


import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import EmailIcon from '@mui/icons-material/Email';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { BsMessenger } from 'react-icons/bs';
// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'CRM',
    title: <FormattedMessage id="CRM" />,
    icon: icons.IconHelp,
    type: 'group',
    children: [
        

        {
            id: 'Customers',
            title: <FormattedMessage id="Customers" />,
            type: 'item',
            url: '/admin/customer',
            icon: AccountBoxIcon,
           
        },
        {
            id: 'Subscriptions',
            title: <FormattedMessage id="Subscriptions" />,
            type: 'item',
            url: '/admin/subscriptions',
            icon: EmailIcon,
           
        },
        {
            id: 'Messenger',
            title: <FormattedMessage id="Messenger" />,
            type: 'item',
            url: '/admin/chat',
            icon: BsMessenger,
           
        },
        {
            id: 'Payments',
            title: <FormattedMessage id="Payments" />,
            type: 'item',
            url: '/admin/payments',
            icon: LocalAtmIcon,
         },
   
        {
            id: 'Transfers',
            title: <FormattedMessage id="Transfers" />,
            type: 'item',
            url: '/admin/transfer',
            icon: SwapHorizontalCircleIcon,
           
        },
        {
            id: 'Manual Email',
            title: <FormattedMessage id="Manual Email" />,
            type: 'item',
            url: '/admin/manual-email',
            icon: IconTemplate,
           
        },
        {
            id: 'Calender',
            title: <FormattedMessage id="Calender" />,
            type: 'item',
            url: '/admin/calender',
            icon: CalendarMonthIcon,
           
        },
     
       
    ]
};

export default other;
