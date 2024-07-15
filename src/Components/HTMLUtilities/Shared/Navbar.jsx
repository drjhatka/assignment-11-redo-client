import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { DataContext } from '../../Contexts/DataProvider';

const Navbar = ({navMenus, uriList, logOutHandler, searchHandler}) => {
  const {user, doLogout} = useContext(AuthContext)
  console.log(user)
  const navigate =useNavigate()
  const logOut =()=>{
    doLogout()
    navigate('/login')
  }

  return (
    <div>
      <div className="navbar bg-emerald-300 shadow-lg">
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
                  if (user && index > 0 && index<3 ) {
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
                if(user){
                  while(index<4){
                    return <li className='shadow-lg h-full hover:bg-emerald-200 text-center text-sm border-2 mr-2 rounded-md bg-slate-50' key={Math.random() * 1000}><Link to={uriList[index]}> {navMenus[index]}</Link></li>
                  }
                }
               else{
                  if(index !==2 && index !==3 ){
                    return <li className='shadow-lg h-full hover:bg-emerald-200 text-center text-sm border-2 mr-2 rounded-md bg-slate-50' key={Math.random() * 1000}><Link to={uriList[index]}> {navMenus[index]}</Link></li>
                  }
               }
              })

            }
          </ul>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?user.photoURL:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li ><button onClick={logOut}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


