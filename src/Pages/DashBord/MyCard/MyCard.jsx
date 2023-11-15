import React from 'react';
import UseCard from '../../Hook/UseCard';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const MyCard = () => {
    const [cart,refetch,loading]=UseCard()
    console.log(cart)
    const total=cart.reduce((sum,item) => item.price + sum,0)
    const handelDelet=(_id)=>{
       fetch(`http://localhost:3000/carts/${_id}`,{
        method:"DELETE"
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        if(data.deletedCount>0){
            refetch()
            Swal.fire(
                'Delete!',
                '',
                'success'
              )
        }
       })
    }
    if (cart.length===0) {
        return (
          <div>
              <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">No Item Found</h2>
      <Link to='/order'><button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full">
        Order Now
      </button></Link>
    </div>
          </div>
        )
    }
    if (loading) {
      return(
        <div>
             <div>
                 <div className="h-screen w-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-800"></div>
          </div>
            </div>
        </div>
      )
    }
    return (
       <div className=''>
         <div className='font-semibold justify-evenly flex gap-8 lg:flex-row flex-col items-center' style={{height:"60px"}}>
            <h2 className=' text-4xl uppercase'>total item {cart.length}</h2>
            <h2 className=' text-4xl uppercase'>total price ${total}</h2>
          <Link to='/dashbord/payment'>  <button className="btn btn-warning">Pay</button></Link>
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
      {cart.map((row ,index)=>    <tr key={row._id}>
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
            {row.name}
            </div>
          </div>
        </td>
        <td>
        ${row.price}
          <br/>
        </td>
        <td><button onClick={()=>handelDelet(row._id)} className="btn text-white btn-error"><FaTrash/></button></td>
        <th>
          
        </th>
      </tr>)}
   
    
    </tbody>
  </table>
</div>

       
       </div>
    );
};

export default MyCard;