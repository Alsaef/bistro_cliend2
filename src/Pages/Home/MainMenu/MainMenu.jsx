import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Sheard/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg';
import img2 from '../../../assets/menu/dessert-bg.jpeg';
import img3 from '../../../assets/menu/pizza-bg.jpg';
import img4 from '../../../assets/menu/salad-bg.jpg';
import img5 from '../../../assets/menu/soup-bg.jpg';
import SetMenu from '../../Hook/SetMenu';
import SectionTitle from '../../../Component/Section/SectionTitle';
import MenuCatagory from '../../MenuCatagory/MenuCatagory';
const MainMenu = () => {
    const [menu]=SetMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
        <title>Our Menu</title>
      </Helmet>
      <Cover img={img} menuTitle="Our Menu"></Cover>
      <SectionTitle subHeading="---Don't miss---" heading={"TODAY'S OFFER"}> </SectionTitle>
      {/* offerd */}
       <MenuCatagory item={offered}></MenuCatagory>
       {/* diserd */}
       <MenuCatagory item={dessert} menuTitle='DESSERTS' img={img2}></MenuCatagory>
       {/* pizza */}
       <MenuCatagory item={pizza} menuTitle='PIZZA' img={img3}></MenuCatagory>
       {/* salad */}
       <MenuCatagory item={salad} menuTitle='SALADS' img={img4}></MenuCatagory>
       {/* SOUPS */}
       <MenuCatagory item={soup} menuTitle='SOUPS' img={img5}></MenuCatagory>
        </div>
    );
};

export default MainMenu;