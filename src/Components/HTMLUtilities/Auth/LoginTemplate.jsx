import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa6";

function LoginTemplate({ fieldNames, typeNames, loginHandler, lebel, externalLogin }) {
    return (
        <div>
            <div className=' border-2 border-green-700 lg:w-[30%] lg:mx-auto mt-2 pb-6 rounded-lg bg-[#8ae69e]'>

                <div className='px-4 py-4 flex justify-center rounded-md shadow-md bg-orange-100 text-blue-600 text-xl font-semibold '>
                    <h1>{lebel} </h1>
                </div>
                <div className='mt-4 flex flex-col gap-10'>
                    <form onSubmit={loginHandler} className='md:w-3/4 md:mx-auto flex-col flex gap-6' >
                        {
                            fieldNames.map((fieldName, index) => {
                                return <div key={index}>
                                    <input
                                        name={fieldName}
                                        type={typeNames[index]}
                                        placeholder={`Enter ${fieldName}`}
                                        required
                                        className="input input-bordered input-accent w-full" />
                                </div>
                            })
                        }


                        <div className='' >
                            <button  type="submit" className='btn w-full btn-primary shadow-lg  font-bold text-lg px-16'>{lebel}</button>
                        </div>

                    </form>
                    {
                        lebel !== 'Register' && <div className='flex gap-3 justify-center items-center '>
                            <h1 className='font-semibold '>Login using</h1>
                            <button onClick={externalLogin} className='btn  btn-outline bg-black text-white shadow-lg  font-bold text-lg '><FaGoogle className='text-blue-500 text-3xl'></FaGoogle></button>

                        </div>
                    }

                    <div className=' text-center '>
                        {
                            lebel=='Register'?
                            <div>Already Have an account? <Link className='underline font-semibold text-red-600' to='/login'>Login</Link> </div>:
                            <div>No account yet? <Link className='underline font-semibold text-red-600' to='/register'> Sign up</Link></div>
                        }
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default LoginTemplate
