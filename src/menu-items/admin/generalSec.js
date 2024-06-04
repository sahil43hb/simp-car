// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';
import { GrDocumentPdf } from 'react-icons/gr';
import { CiMail } from 'react-icons/ci';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BackupIcon from '@mui/icons-material/Backup';
import PinDropIcon from '@mui/icons-material/PinDrop';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { Sms } from '@mui/icons-material';
// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const endPages = {
    id: 'General',
    title: <FormattedMessage id="General" />,
    icon: icons.IconHelp,
    type: 'group',
    children: [
        {
            id: 'Email Templates',
            title: <FormattedMessage id="Email Templates" />,
            type: 'item',
            url: '/admin/email-template',
            icon: AttachEmailOutlinedIcon,
           
        },
        {
            id: 'Invoice Templates',
            title: <FormattedMessage id="Invoice Templates" />,
            type: 'item',
            url: '/admin/invoice-templates',
            icon: GrDocumentPdf,
           
        },
        {
            id: 'SMS Templates',
            title: <FormattedMessage id="SMS Templates" />,
            type: 'item',
            url: '/admin/SMS-Templates',
            icon: Sms,
           
        },
        {
            id: 'Company Setting',
            title: <FormattedMessage id="Company Setting" />,
            type: 'item',
            url: '/admin/company-setting',
            icon: EngineeringIcon,
           
        },
        
      
    ]
};

export default endPages;
