import { useContext } from 'react';

// auth provider
import AuthContext from 'contexts/admin/JWTContext';

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
    const context = useContext(AuthContext);
    console.log('using this context')
    if (!context) throw new Error('context must be use inside provider');

    return context;
};

export default useAuth;
