// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconBug } from '@tabler/icons';
import SpeedIcon from '@mui/icons-material/Speed';

import GroupIcon from '@mui/icons-material/Group';
import { FaUserLock } from 'react-icons/fa';

// constant
const icons = { IconBug, IconKey };

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'Dashboard',
    title: <FormattedMessage id="Dashboard" />,
    icon: icons.IconKey,
    type: 'group',
    children: [
        {
            id: 'Dashboard',
            title: <FormattedMessage id="Dashboard" />,
            type: 'item',
            url: '/admin/dashboard',
            icon: SpeedIcon,
            breadcrumbs: true
             
        },
        {
            id: 'Team Management',
            title: <FormattedMessage id="Team Management" />,
            type: 'collapse',
            icon: GroupIcon,
            children: [
                {
                    id: 'Members',
                    title: <FormattedMessage id="Members" />,
                    type: 'item',
                    url: '/admin/members'
                    // target: true
                },
                {
                    id: 'Teams',
                    title: <FormattedMessage id="Teams"  />,
                    type: 'item',
                    url: '/admin/teams'
                    // target: true
                }
            ]
        },
        {
            id: 'Roles & Permissions',
            title: <FormattedMessage id="Roles & Permissions" />,
            type: 'item',
            url: '/admin/roles-&-permissions',
            icon: FaUserLock,
           
        },


    ]
};

export default pages;
