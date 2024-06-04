// third-party
import { FormattedMessage } from 'react-intl';

// assets

import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';

import { AttachMoney, CardMembership, DriveEta, LocationOn } from '@mui/icons-material';
// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const main = {
    id: 'sample',
    title: <FormattedMessage id="Booking" />,
    icon: icons.IconHelp,
    type: 'group',
    children: [
       
        {
            id: 'address',
            title: <FormattedMessage id="Address" />,
            type: 'item',
            url: '/address',
            icon: LocationOn,
            
        },
        {
            id: 'Book a car',
            title: <FormattedMessage id="Book a car" />,
            type: 'item',
            url: '/book-a-car',
            icon: DriveEta,
            breadcrumbs: false
        },
        {
            id: 'Subscriptions',
            title: <FormattedMessage id="Subscriptions" />,
            type: 'item',
            url: '/subscription',
            icon: CardMembership,
            
        },
        {
            id: 'Payments',
            title: <FormattedMessage id="Payments" />,
            type: 'item',
            url: '/payments',
            icon: AttachMoney,
           
          
        }
    ]
};

export default main;
