import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import { Container,Row,Col } from 'react-bootstrap'
import something  from './Navbar.module.css'
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const[scroll,Isscroll]=useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  useEffect(()=>{
    const handlewindow=()=>{
        if(window.pageYOffset>100)
        {Isscroll(true)}
        else{Isscroll(false)}}
    window.addEventListener("scroll",handlewindow)
    return ()=>window.removeEventListener('scroll', handlewindow)
  },[])
  // const movepage=useNavigate()
  // const booked=()=>{
  // movepage("/booked")
  // }
  return (
    
    <nav className="navbar">
      <div className={`${something.contain} ${scroll ?`${something.active}`:""} ${something.class}`}>
      
        <div className={something.logo}>
          <h5>Booking</h5>
        </div>
        <div className={something.menuicon} onClick={handleShowNavbar}>
        <IoMenu />
        </div>
        <div className={`${something.navelements} ${showNavbar && `${something.active}`}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <button  className={`${something.signup} mt-2`}>Sign up</button>

          </ul>
          <div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
