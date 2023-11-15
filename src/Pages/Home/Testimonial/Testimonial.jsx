import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/Section/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews,setReview]=useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div>
          <SectionTitle subHeading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}></SectionTitle>  
          <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
             <div>
                {
                    reviews.map(review =>  <SwiperSlide key={review._id}>
                         <div>
                         <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                 readOnly
                            /> </div>   
                         <p className="py-8 text-center">{review.details}</p>
                         <h2 className='text-2xl text-[#CD9003] text-center'>{review.name}</h2>
                         </div>
                    </SwiperSlide>)
                }
             </div>

          </Swiper>
          </>
        </div>
    );
};

export default Testimonial;