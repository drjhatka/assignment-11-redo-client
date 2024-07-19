import React from 'react';
import animationData from './lottie.json'
import Lottie from 'react-lottie';
const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,

    }
    return <div className='flex max-h-36 items-center  m-10 justify-center'> 
    <Lottie options={defaultOptions}  width={140} height={140} />
    </div>
        
    
};

export default LottieAnimation;