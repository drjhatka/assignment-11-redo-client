import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Slider = ({slides}) => {
    console.log('slides ', slides)
    return (
        <div className=''>
            <Carousel 
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={1500}
                centerMode={false}
                className='shadow-lg border-2 max-h-96 mt-4  rounded-lg'
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite ={true}
                itemClass=" "
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                
                {
                    slides?.map(slide=>{
                        return  <div key={Math.random()*1000} style={{position:'relative' , height:'600px',  background: `url(${slide.imageUrl}), linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,   backgroundSize:'contain'}}>
                                
                                <div className=''>
                            <h1 style={{position:'absolute', bottom:'55%', background: ` linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 70%, rgba(252,176,69,1) 90%)`}} className='px-10 py-5 w-full text-white font-bold text-4xl' >{slide.title}</h1>
                            <p className='px-10 font-bold absolute bottom-60 text-white py-2 w-full' style={{background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,56,1) 50%, rgba(252,176,69,1) 90%)`}}>{slide.description}</p>
                        </div>
                        
    
                    </div>
                    })
                }
                
                
            </Carousel>
        </div>
    );
};

export default Slider;
/*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=2b302f&c2=5e4f5d&gt=l&gd=dtr
*/
//background: #2B302F;
//background: linear-gradient(225deg, #2B302F, #5E4F5D);