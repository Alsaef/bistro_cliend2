// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from './Banner/Banner';
import Catagory from './Catagory/Catagory';
import Menu from './Menu/Menu';
import Featured from './Featured/Featured';
import Testimonial from './Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Boss Resturent</title>
      </Helmet>
        <Banner></Banner>
        <Catagory></Catagory>
        <Menu></Menu>
        <Featured></Featured>
        <Testimonial></Testimonial>
        </div>
    );
};

export default Home;