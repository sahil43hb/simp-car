// third-party
import { FormattedMessage } from 'react-intl';


// assets

import { IconBrandChrome, IconHelp, IconSitemap, } from '@tabler/icons';
import { ContactPhone, Forum } from '@mui/icons-material';
import { BsPersonCircle } from 'react-icons/bs';

// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const mainTwo = {
    id: 'sample',
    title: <FormattedMessage id="Collaboration" />,
    icon: icons.IconHelp,
    type: 'group',
    children: [
      
        {
            id: 'Messages',
            title: <FormattedMessage id="Messages" />,
            type: 'item',
            url: '/messages',
            icon: Forum,
            
        },
      
        {
            id: 'Support',
            title: <FormattedMessage id="Support" />,
            type: 'item',
            url: '/support',
            icon: ContactPhone,
         
        }
    ]
};

export default mainTwo;
