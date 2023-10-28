import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

const ProtectRoute = ({children}) => {
    const { userInfo } = useContext(AuthContext);
    return userInfo.level === 'admin' ? children : <Navigate to='/' />;
}

export default ProtectRoute;