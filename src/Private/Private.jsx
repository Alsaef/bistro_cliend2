import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return(
          <div className='h-screen '>
              <div className="h-screen  flex items-center justify-center flex-col">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-800">
            </div>
          <h2 className='mt-3 uppercase text-xl font-semibold'>Login Please....<span className='btn'><Link to='/login'>Login</Link></span></h2>
          </div>
          </div>
        )
    }
    if(user){
        return children;
    }

   
        return <Navigate to='/login'  state={{from: location}} replace></Navigate>
   
};

export default Private;