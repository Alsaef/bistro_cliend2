import React from 'react';
import MenuItem from '../Sheard/menuItem/MenuItem';
import Cover from '../Sheard/Cover/Cover';
const MenuCatagory = ({item,menuTitle,img}) => {
    return (
        <div className=' pt-8'>
            {menuTitle&& <Cover menuTitle={menuTitle} img={img}></Cover>}
             <div className=' grid lg:grid-cols-2 gap-6 items-center grid-cols-1 my-16'>
                {
                    item.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCatagory;