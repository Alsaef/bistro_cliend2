// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Sheard/Footer/Footer';
import Nav from '../Pages/Sheard/NavBar/Nav';

const Layout = () => {
    const location=useLocation()
    const noheaderFooter= location.pathname.includes('login') || location.pathname.includes('singup')
    return (
        <div>
            {noheaderFooter || <Nav></Nav>}
            <Outlet></Outlet>
            {noheaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Layout;