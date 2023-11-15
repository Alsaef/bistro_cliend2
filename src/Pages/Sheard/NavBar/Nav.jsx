// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { FaShoppingCart } from 'react-icons/fa';
import UseCard from '../../Hook/UseCard';
import useAdmin from '../../Hook/useAdmin';
const Nav = () => {
  const {user,logOut}=useContext(AuthContext)
  const [cart]=UseCard()
  const [isAdmin]=useAdmin()
  const handleLogout=()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'LogOut!',
          'success'
          
        )
        logOut()
        .then(()=>{
           localStorage.removeItem('user')
            
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    })
  }
    const NavOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>CONTACT us</Link></li>
        <li><Link to={isAdmin? '/dashbord/adminhome':'/dashbord/userhome'}>DASHBOARD</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order'>Order</Link></li>
        <li><Link to='/dashbord/mycart'><button className="flex gap-2 items-center">
        <FaShoppingCart />
  <div className="badge badge-secondary">+{cart.length || 0}</div>
</button></Link></li>
      <li>
      {
          user?  <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>:
        <Link to='/login'>LogIn</Link>
        }
      </li>
     
    </>
    return (
        <>
          <div className="navbar fixed z-10 bg-opacity-10 bg-black text-white w-11/12">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {NavOption}
      </ul>
    </div>
    <a className=" normal-case text-xl "><span className=' font-bold'>BISTRO BOSS</span><br /><span className=' font-medium'>Restaurant</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {NavOption}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get Start</a>
  </div>
</div>  
        </>
    );
};

export default Nav;