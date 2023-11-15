import React, { useContext } from 'react';
import useAdmin from '../Pages/Hook/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const AdminPrivate = ({children}) => {
    const location=useLocation()
  
    const [isAdmin,isAdminLoading]=useAdmin()
    if (isAdminLoading==false) {
        return(
            <div>
                 <div className="h-screen w-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-800"></div>
          </div>
            </div>
        )
    }
    if (isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminPrivate;