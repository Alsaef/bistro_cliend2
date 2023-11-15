import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SingUp = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const onSubmit = data => {

    console.log(data)

    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
        navigate(from, { replace: true })
        updateUserProfile(data.name, data.photourl)
          .then(() => {
            const saveUser={name:data.name,email:data.email}
            fetch('http://localhost:3000/users', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                console.log(data)
              })
          }).catch((error) => {
            // An error occurred
            // ...
            console.log(error)
          });
      })
      .catch((error) => {
        console.log(error.message)

        // ..
      })
  };
  return (
    <div>
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" {...register("photourl", { required: true })} name='photourl' placeholder="Photo Url" className="input input-bordered" />
                {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' {...register("email", { required: true })}
                  className="input input-bordered" />
                {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' {...register("password", { required: true })} className="input input-bordered" />
                {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;