import React from 'react';
import SectionTitle from '../../../Component/Section/SectionTitle';
import image from '../../../assets/home/featured.jpg';
import './Fetured.css'
const Featured = () => {
    return (
        <div className='item-bg text-white pt-8 my-28'>
            <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className=' flex lg:flex-row flex-col items-center py-20 px-36 pt-12 gap-11'>
                <div>
                    <img style={{width:"648px"}} src={image} alt="" />
                </div>
                <div>
                    <p>March 20, 2023
                        WHERE CAN I GET SOME?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline btn-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;