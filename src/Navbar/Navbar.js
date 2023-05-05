import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <header className='Header'>
            <a href='#' className='logo' >
                B.Achraf
            </a>
            <i class='bx bx-menu' id='menu-icon'></i>
            <nav className='navbar'>
            <a href='#home' className='Home' >Home</a>
            <a href='#about' className='About' >About</a>
            <a href='#education' className='Education' >Education</a>
            <a href='#skills' className='Skills' >Skills</a>
            <a href='#project' className='Project' >Project</a>
            <a href='#contact' className='Contact' >Contact</a>
            </nav>
        </header>
    </div>
  )
}

export default Navbar