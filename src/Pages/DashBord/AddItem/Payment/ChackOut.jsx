import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import UseSecureAxios from '../../../Hook/UseSecureAxios';
import { AuthContext } from '../../../../Provider/AuthProvider';

const ChackOut = ({price,cart}) => {
    const stripe = useStripe();
    const elements = useElements();
    const[clientSecret,setClientSecret]=useState('')
   const {user}=useContext(AuthContext)
    const [axiosSecure]=UseSecureAxios()
    const [processing,setProcessing]=useState(false)

    useEffect(() => {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
          setClientSecret(res.data.clientSecret);
        })
    }, [price,axiosSecure]);
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }
      const { error } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if (error) {
        console.log('error', error);
        Swal.fire(`${error.message}`);
        setProcessing(false); // Set processing to false when there's an error
      } else {
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || "Unknown",
                name: user?.displayName || 'Unknown'
              },
            },
          },
        );
    
        if (confirmError) {
          console.log(confirmError);
          setProcessing(false); // Set processing to false when there's an error
        } else {
          console.log(paymentIntent);
          if (paymentIntent.status === 'succeeded') {
            const transactionId = paymentIntent.id;
            Swal.fire(`Your Id ${transactionId}`);

            const payment={
              email: user?.email,
              transactionId: paymentIntent.id,
              price,
              date: new Date(),
              status:'Service Pending',
              quantaty:cart.length,
              menuItems: cart.map(item => item.item),
              itemsId:cart.map(item => item._id),
              items:cart.map(item => item.name)
            }
             axiosSecure.post('/payments',payment)
             .then(res=>{
              console.log(res.data)
  
             })
          } else {
            // Handle payment status other than 'succeeded' here
            console.log('Payment not succeeded:', paymentIntent.status);
            // You might want to provide some feedback to the user
          }
          setProcessing(false); // Set processing to false when the payment is done
        }
      }
    }
    
    return (
        <>
              <form className=' w-2/3 m-8' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
            
          },
        }}
      />
      <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn btn-primary mt-4'>
        Pay
      </button>
    </form>
        </>
    );
};

export default ChackOut;