import React from 'react';
import SetMenu from '../../Hook/SetMenu';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseSecureAxios from '../../Hook/UseSecureAxios';

const ManageItems = () => {
    const [menu,loading,refetch] = SetMenu()
  const [axiosSecure]=UseSecureAxios()
    const handelDelet=(item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                '',
                'success'
              )
              axiosSecure.delete(`/menu/${item._id}`)
              .then(res => {
                console.log(res.data)
                refetch()
              })
            }
          }) 
    }
    if (loading) {
        return (<div>
            <div>
                <div className="h-screen w-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-800"></div>
                </div>
            </div>
        </div>)
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>ACTION</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => <tr key={item._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                ${item.price}
                            </td>
                            <td>
                               {item.category}
                            </td>

                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                            <th>
                                <button onClick={()=>handelDelet(item)} className="btn btn-error text-white btn-xl"><FaTrash /></button>
                            </th>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;