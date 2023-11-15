import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaTrash, FaUsers } from 'react-icons/fa';
import UseSecureAxios from '../../Hook/UseSecureAxios';


const AllUsers = () => {
  const [axiosSecure]=UseSecureAxios()
    const {data: users=[], refetch}=useQuery(['users'], async()=>{
        const res = await axiosSecure.get('/users')
        return res.data

    } )
    const handeldelet=(id)=>{
          axios.delete(`http://localhost:3000/users/${id}`)
          .then(data =>{
            console.log(data)
            refetch()
          })
    }

    const handelAdmin=(user)=>{
         fetch(`http://localhost:3000/users/admin/${user._id}`,{
          method:"PATCH"
         })
         .then(res => res.json())
         .then(data =>{
          console.log(data)
          if (data.modifiedCount) {
            refetch()
          }
         })
    }
    return (
        <div>
            <h2 className=' text-4xl uppercase font-bold my-4'>total user {users.length}</h2>

            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>ROLE</th>
        <th>ACTION</th>

      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index) =>  <tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{
                user.role == 'admin' ? "admin" : <button onClick={()=>handelAdmin(user)} className=' btn btn-primary'><FaUsers/></button>
                }</td>
            <td><button onClick={()=>handeldelet(user._id)} className='btn btn-error text-white'><FaTrash/></button></td>
          </tr>)
      }
     
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllUsers;