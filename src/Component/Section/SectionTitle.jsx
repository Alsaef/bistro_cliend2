// eslint-disable-next-line no-unused-vars
import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className=' mx-auto w-1/3'>
            <p className=' text-[#D99904] text-center  text-xl mb-4'>{subHeading}</p>
           
            <h2 className=' text-[#151515] text-center text-4xl border-y-4 p-4 mb-5'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;