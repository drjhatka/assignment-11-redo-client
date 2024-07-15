import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Slider = () => {
    return (
        <div className=''>
            <Carousel 
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={1000}
                centerMode={false}
                className='border-2 max-h-96 mt-4 border-red-700 rounded-lg'
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=" border-2 border-red-200 "
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

                <div className=''>
                    <h1 className='text-2xl z-30 mt-10 text-white font-bold'>SOME TEXT ON TOP OF PICTURE IN THE CAROUSEL</h1>
                    <img
                        src=""
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%',
                            border:'1px solid red',
                            zIndex:'10'
                        }}
                    />

                </div>
                <img
                    src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    style={{
                        display: 'block',
                        height: '100%',
                        margin: 'auto',
                        width: '100%'
                    }}
                />
                <img
                    src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                        display: 'block',
                        height: '100%',
                        margin: 'auto',
                        width: '100%'
                    }}
                />
                <img
                    src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                        display: 'block',
                        height: '100%',
                        margin: 'auto',
                        width: '100%'
                    }}
                />
                <img
                    src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                        display: 'block',
                        height: '100%',
                        margin: 'auto',
                        width: '100%'
                    }}
                />
            </Carousel>
        </div>
    );
};

export default Slider;