import React from 'react';

const MenuItem = ({item}) => {
    return (
        <div className=' flex items-center'>
            <img style={{borderRadius:"0px 200px 200px 200px" ,width:"118px"}} src={item.image} alt="" />
            <div className='ps-4'>
            <h2 className=' uppercase'>{item.name}-----------</h2>
            <h2>{item.recipe}</h2>
            </div>
        </div>
    );
};

export default MenuItem;