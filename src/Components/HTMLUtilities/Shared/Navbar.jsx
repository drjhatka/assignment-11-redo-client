import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { DataContext } from '../../Contexts/DataProvider';
import LottieAnimation from '../Animations/LottieAnimation';
import { ThemeContext } from '../../Contexts/ThemeProvider';

const Navbar = ({ navMenus, uriList, logOutHandler, searchHandler }) => {
  const {theme, setTheme} = useContext(ThemeContext)
  const { user, loading, doLogout } = useContext(AuthContext)
  console.log('theme', theme)
  const navigate = useNavigate()
  const logOut = () => {
    doLogout()
    navigate('/login')
  }
const changeTheme =(theme, setTheme)=>{
    if(theme=='light'){
      setTheme('dark')
        document.body.style.background='black' 
        document.getElementById('navbar').style.background='black'   
        document.getElementById('navbar').style.color='white'   
    }
    else{
      setTheme('light')
      document.body.style.background='white' 
      document.getElementById('navbar').style.background='white'   
      document.getElementById('navbar').style.color='red'   
    }
}
  return (
    <div>
      {
        loading ? <LottieAnimation /> :
          <div className="navbar bg-slate-200 shadow-lg" id='navbar'>
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {
                    navMenus.map((menu, index) => {
                      if (user && index > 0 && index < 5) {
                        return <li key={Math.random() * 1000}><Link to={uriList[index]}> {navMenus[index]}</Link></li>

                      }

                    })
                  }
                </ul>
              </div>
              <Link className="btn btn-ghost text-xl" to={uriList[0]}> {navMenus[0]}</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu text-blue-900 font-semibold  menu-horizontal px-1">
                {
                  navMenus.map((menu, index) => {
                    if (user) {
                      while (index < 5) {
                        return <li className='shadow-lg h-full hover:bg-emerald-200 text-center text-sm border-2 mr-2 rounded-md bg-slate-50' key={Math.random() * 1000}><Link to={uriList[index]}> {navMenus[index]}</Link></li>
                      }
                    }
                    else {
                      if (index !== 2 && index !=4 && index !== 3) {
                        return <li className='shadow-lg h-full hover:bg-emerald-200 text-center text-sm border-2 mr-2 rounded-md bg-slate-50' key={Math.random() * 1000}><Link to={uriList[index]}> {navMenus[index]}</Link></li>
                      }
                    }
                  })

                }
              </ul>
            </div>
            <div className="navbar-end">
              {/* <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered max-w-36 md:w-auto" />
          </div> */}
              <div className='mr-10 '>
                <label className="swap  swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" onChange={()=>changeTheme(theme, setTheme)} />

                  {/* sun icon */}
                  <svg
                    className="swap-on h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-off h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
              {
                user && <div className="dropdown dropdown-end">

                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li >
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li className='bg-red-500 text-white' ><button onClick={logOut}>Logout</button></li>
                  </ul>
                </div>
              }
            </div>
          </div>
      }

    </div>
  );
};

export default Navbar;


