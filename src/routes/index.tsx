import React from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import {userContext} from '../context/isAuth'
import AdmRoutes from './AdmRoutes';
require('dotenv').config()

const Routes: React.FC = () => {
    const { auth, setAuth } = React.useContext(userContext)
    const { user, setUser} = React.useContext(userContext)
    return auth ? (user === process.env.REACT_APP_EMAIL_ADM ? <AdmRoutes/> : <PrivateRoutes />) : <PublicRoutes />;
};

export default Routes;




