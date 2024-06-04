// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import RentalCar from '@mui/icons-material/CarRental';


// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const middlePage = {
    id: 'Car Management',
    title: <FormattedMessage id="Car Management" />,
    icon: icons.IconHelp,
    type: 'group',
    children: [
        
        {
            id: 'Listing',
            title: <FormattedMessage id="Listing" />,
            type: 'item',
            url: '/admin/listing',
            icon: DirectionsCarIcon,
           
        },
        {
            id: 'Cars Setting',
            title: <FormattedMessage id="Cars Setting" />,
            type: 'collapse',
            icon: RentalCar,
            children: [
                {
                    id: 'Monthly Tier',
                    title: <FormattedMessage id="Monthly Tier" />,
                    type: 'item',
                    url: '/admin/carsettings/monthly-tier'
                    // target: true
                },
                {
                    id: 'Kilometer Tier',
                    title: <FormattedMessage id="Kilometer Tier" />,
                    type: 'item',
                    url: '/admin/carsettings/kilometer-tier'
                    // target: true
                },
                {
                    id: 'Furnishing',
                    title: <FormattedMessage id="Furnishing"  />,
                    type: 'item',
                    url: '/admin/carsettings/furnishing'
                    // target: true
                },
                {
                    id: 'Car Company',
                    title: <FormattedMessage id="Car Company"  />,
                    type: 'item',
                    url: '/admin/carsettings/car-company'
                    // target: true
                },
                {
                    id: 'Car Type',
                    title: <FormattedMessage id="Car Type"  />,
                    type: 'item',
                    url: '/admin/carsettings/car-type'
                    // target: true
                },
            ]
        },
       
    ]
};

export default middlePage;
