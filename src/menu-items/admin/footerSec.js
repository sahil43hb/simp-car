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

const footerSec = {
    id: ' ',
    title: <FormattedMessage id=" " />,
    icon: icons.IconHelp,
    type: 'group',
    children: [
        
      
        {
            id: 'Plugins',
            title: <FormattedMessage id="Plugins" />,
            type: 'item',
            url: '/admin/plugins',
            icon: AddCardOutlinedIcon,
           
        },
        {
            id: 'Backup System',
            title: <FormattedMessage id="Backup System" />,
            type: 'item',
            url: '/admin/backup-systems',
            icon: BackupIcon,
           
        }
    ]
};

export default footerSec;
