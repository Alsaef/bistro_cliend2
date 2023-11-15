import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/Section/SectionTitle';
import MenuItem from '../../Sheard/menuItem/MenuItem';
import SetMenu from '../../Hook/SetMenu';

const Menu = () => {
    const [menu]= SetMenu()
     const popular = menu.filter(item=> item.category === 'popular' )
    return (
        <div className=' mb-4'>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={"---Check it out---"}></SectionTitle>
      
            <div className=' grid lg:grid-cols-2 gap-6 items-center grid-cols-1'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default Menu;