import React from 'react';
import Menu from '../../Home/Menu/Menu';
import { Parallax } from 'react-parallax';

const Cover = ({img,menuTitle}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div>
            <div className="hero h-[700px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{menuTitle}</h1>
      <p className="mb-5">Would you like to try a dish?</p>
      
    </div>
  </div>
</div>
</div>
    </Parallax>
       
    );
};

export default Cover;