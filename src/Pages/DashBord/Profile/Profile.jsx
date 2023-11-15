import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Profile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            {
                user && <div> <img src={user?.photoURL} alt="" style={{width:"100px"}} /> <p className='text-xl py-2 font-semibold'>{user?.displayName}</p></div>
            }
        </div>
    );
};

export default Profile;