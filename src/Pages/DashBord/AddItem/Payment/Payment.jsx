import React from 'react';
import ChackOut from './ChackOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import UseCard from '../../../Hook/UseCard';
const stripePromise = loadStripe(import.meta.env.VITE_PAYEMNT);
const Payment = () => {
    
    const [cart]=UseCard()
    const total=cart.reduce((sum,item)=>sum + item.price , 0)
    const price=parseFloat(total.toFixed(2))
   
    return (
        <>
           <h2 className=' text-4xl text-center'>PAYMENT</h2> 
           <Elements stripe={stripePromise}>
           <ChackOut cart={cart} price={price}></ChackOut>
           </Elements>
        </>
    );
};

export default Payment;