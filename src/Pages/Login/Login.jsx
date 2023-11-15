import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import loginIcon from '../../assets/others/authentication.gif';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Login = () => {
  const [disibled,setdisibled]=useState(true)
  const {loginuser}=useContext(AuthContext)
  const navigate=useNavigate()
  const location= useLocation()
  const from=location.state?.from?.pathname||'/'
    const handelLogin = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        loginuser(email,password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
          navigate(from,{replace:true})
        })
        .catch((error) => {
           console.log(error.message)
         
          // ..
        })
    }
    useEffect(()=>{
      loadCaptchaEnginge(6); 
    },[])
    const HandelValided =(e)=>{
        const value = e.target.value;

        const user_captcha_value= value;
        
        if (validateCaptcha(user_captcha_value)==true ) {
          setdisibled(false)
        }
        else{
          setdisibled(true)
        }
    }
    return (
        <div>
           <Helmet>
        <title>Login</title>
      </Helmet>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:w-1/2 lg:text-left">
   <img src={loginIcon} alt="" />
    </div>
    <div className="card lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogin} className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <LoadCanvasTemplate />
          <input onBlur={HandelValided} type="text" name='captcha' placeholder="Type Captcha" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button disabled={disibled} type='submit' className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center pb-4'>Create A New Account ? <Link to='/singup'>Create Account</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;