import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import UseCard from '../Hook/UseCard';

const FoodCard = ({item}) => {
  const {image,name,price,recipe,_id}=item
  const {user}=useContext(AuthContext)
  const [,refetch]=UseCard()
  const handelCard=(item)=>{
   console.log(item)
   const newOrder={item:_id,name,image,price,email:user?.email}
   fetch('http://localhost:3000/carts',{
     method:"POST",
     headers:{
       "Content-Type": "application/json",
     },
     body:JSON.stringify(newOrder)
   })
   .then(res => res.json())
   .then(data =>{
     console.log(data)
     if (data.insertedId) {
      refetch()
      Swal.fire(
        'Order Successful!',
        'You clicked the button!',
        'success'
      )
     }
   })
  }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='bg-black p-3 text-white absolute right-0 mr-4 mt-4'>${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}!</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handelCard(item)} className="btn bg-slate-200 btn-outline">ADD To Card</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;