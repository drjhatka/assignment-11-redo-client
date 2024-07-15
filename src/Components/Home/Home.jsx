import Slider from '../HTMLUtilities/Slider/Slider';

const Home = () => {
    const submitHandler =()=>{
        event?.preventDefault()
        const form = event.target
        console.log(form.title.value)
    }
    return (
        <div className='w-[80%] mx-auto'>
            <Slider/>
        </div>
    )
};

export default Home;