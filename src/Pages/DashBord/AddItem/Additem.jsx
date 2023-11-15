import React from 'react';
import { useForm } from 'react-hook-form';
import UseSecureAxios from "../../Hook/UseSecureAxios";
import Swal from 'sweetalert2'
const ImageHosting=import.meta.env.VITE_IMAGE;
const Additem = () => {
  const [axiosSecure]=UseSecureAxios()
  const { register, handleSubmit, formState: { errors } } = useForm()
const ImageApi=`https://api.imgbb.com/1/upload?key=${ImageHosting}`
    const onSubmit = data => {
       const formData= new FormData();
       formData.append('image',data.image[0])
       fetch(ImageApi,{
        method:"POST",
        body:formData
       })
       .then(res=>res.json())
       .then(imageResponse=> {
        console.log(imageResponse)
        if(imageResponse.success){
          const ImageUrl=imageResponse.data.display_url
          const {name,category,price,recipe}=data
          const menuItem={name,category,price:parseFloat(price),recipe,image:ImageUrl}
         console.log(menuItem)

         axiosSecure.post('/menu',menuItem)
         .then(data =>{
          console.log(data.data)
          if(data.data.insertedId){
            Swal.fire(`Added Menu ${menuItem.name}`)
          }
         })
        }
      })
    }
    console.log(errors)
    return (
        <div>
            <h2 className="text-4xl text-center">Add Item</h2>
            <div className=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-md w-full space-y-8">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" >
          <div>
            <label htmlFor="recipeName" className="sr-only">
              Recipe Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              required
              className="rounded-full relative block w-full py-3 px-4 bg-white border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Recipe Name"
              {...register("name", {required: true})}
            />
          </div>
         <div className=' flex gap-5 items-center lg:flex-row flex-col'>
         <div>
            <label htmlFor="category" className="sr-only">
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              className="rounded-full relative block w-full py-3 px-4 bg-white border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              {...register("category", { required: true })}
            >
              <option value="">Select a Category</option>
              <option value="drinks">drinks</option>
              <option value="dessert">dessert</option>
              <option value="offered">offered</option>
              <option value="pizza">pizza</option>
              <option value="salad">salad</option>
              <option value="soup">soup</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="sr-only">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              autoComplete="off"
              required
              className="rounded-full relative block w-full py-3 px-4 bg-white border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Price"
              {...register("price", { required: true })}
            />
          </div>
         </div>
          <div>
            <label htmlFor="recipeDetails" className="sr-only">
              Recipe Details
            </label>
            <textarea
              id="recipe"
              name="recipe"
              autoComplete="off"
              required
              className="rounded-lg relative block w-full py-3 px-4 bg-white border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm resize-none h-40"
              placeholder="Recipe Details"
              {...register("recipe", { required: true })}
            />
          </div>
            <div>
            <input type="file"  {...register("image", { required: true })} className="file-input w-full max-w-xs" />
            </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Recipe
            </button>
          </div>
        </form>
      </div>
    </div>

        </div>
    );
};

export default Additem;