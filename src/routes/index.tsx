import React from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import {userContext} from '../context/isAuth'

const Routes: React.FC = () => {
    const { auth, setAuth } = React.useContext(userContext)
    return auth ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;




