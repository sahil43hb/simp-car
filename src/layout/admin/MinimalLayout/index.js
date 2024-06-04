import { Outlet } from 'react-router-dom';
import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <>
        <Outlet />
        <Customization/>
    </>
);

export default MinimalLayout;
