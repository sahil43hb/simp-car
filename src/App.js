// routing
import Routes from './routes/user';
import AdminRoutes from 'routes/admin';

// project imports
import Locales from 'ui-component/Locales';
import NavigationScroll from 'layout/user/NavigationScroll';
import RTLLayout from 'ui-component/RTLLayout';
import Snackbar from 'ui-component/extended/Snackbar';

import ThemeCustomization from 'themes';

import { JWTProvider as UserAuthProvider } from 'contexts/user/JWTContext';
import { JWTProvider as AdminAuthProvider } from 'contexts/admin/JWTContext';


// ==============================|| APP ||============================== //

const App = () => (
    <ThemeCustomization>
        <RTLLayout>
            <Locales>
                <NavigationScroll>
                    <UserAuthProvider>
                        <Routes />
                    </UserAuthProvider>
                    <AdminAuthProvider>
                        <AdminRoutes />
                    </AdminAuthProvider>
                    <Snackbar />
                </NavigationScroll>
            </Locales>
        </RTLLayout>
    </ThemeCustomization>
);

export default App;
