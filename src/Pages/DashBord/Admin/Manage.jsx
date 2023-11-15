import React from 'react';
import SetManage from '../../Hook/SetManage';

const Manage = () => {
    const [manage,refetch]=SetManage()
    return (
        <div className=''>
         <div className='font-semibold justify-evenly flex gap-8 lg:flex-row flex-col items-center' style={{height:"60px"}}>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {manage.map((row ,index)=>    <tr key={row._id}>
        <td>
            {index +1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={row.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
            {row.item}
            </div>
          </div>
        </td>
        <td>
        ${row.price}
          <br/>
        </td>
       
        <th>
          
        </th>
      </tr>)}
   
    
    </tbody>
  </table>
</div>

       </div>
    );
};

export default Manage;