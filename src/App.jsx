import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/HTMLUtilities/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import {NavbarMenuData} from './Components/HTMLUtilities/Shared/NavbarMenuData'
import Footer from './Components/HTMLUtilities/Shared/Footer'

function App() {
  const [count, setCount] = useState(0)
  const {navMenus, uriList} = NavbarMenuData()
  return (
    <>
      <Navbar navMenus={navMenus} uriList={uriList} loginHandler={null} searchHandler={null} ></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
