import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart,FaWallet,FaCalendar,FaHome, FaBook,FaUtensils, FaUsers} from 'react-icons/fa';
import useAdmin from '../Pages/Hook/useAdmin';
import Profile from '../Pages/DashBord/Profile/Profile';
const DasingBord = () => {
  // TODO
  // const isAdmin=true;
   const [isAdmin]=useAdmin()
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col justify-center">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#f7c477] text-white">
      {
      isAdmin ? <>
    <Profile></Profile>
      <li><Link to='/dashbord/adminhome'><FaHome/>Admin Home</Link></li>
      <li><Link to='/dashbord/addItem'><FaUtensils/>Add Item</Link></li>
      <li><Link to='/dashbord/manageitem'><FaWallet/>Manage Item</Link></li>
      <li><Link to='/dashbord/managebooking'><FaBook/>Manage bookings</Link></li>
      <li><Link to='/dashbord/users'><FaUsers/>Manage Users</Link></li>
     
      </> 
      
      : 
      
      <>
        <li><Link to='/dashbord/userhome'><FaHome/>User Home</Link></li>
      <li><Link ><FaCalendar/>Reservation</Link></li>
      <li><Link to='/dashbord/paymentHistory'><FaWallet/>Payment History</Link></li>
      <li><Link to='/dashbord/mycart'><FaShoppingCart/>My Cart</Link></li>
      </>}
    
      <div className="divider"></div> 
      <li><Link to='/'><FaHome/>Home</Link></li>
      <li><Link to='/menu'><FaShoppingCart/> Our Menu</Link></li>
        <li><Link to='/order'><FaShoppingCart/> Order</Link></li>
    </ul>
    
  </div>
</div>
        </div>
    );
};

export default DasingBord;