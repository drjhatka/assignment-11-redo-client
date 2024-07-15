import React from 'react';
import animationData from '../../../assets/Animation - 1721012485029.json'
import Lottie from 'lottie-react';
const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,

    }
    return <div className='flex max-h-36 items-center  m-10 justify-center'>
            <Lottie options={defaultOptions} width="20" />
        </div>
    
};

export default LottieAnimation;