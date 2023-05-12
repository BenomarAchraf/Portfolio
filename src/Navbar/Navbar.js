import React, { useEffect, useState } from 'react'
import "./Navbar.css"
const Navbar = ({Nav}) => {
    const [click, setClick] = useState(false);
    let [clas, setClas]=useState(Nav);
    const [nav, setnav] = useState(false);
    const handleClick = () => {
        setClick(!click);
        if(click) setnav(true); 
           else setnav(false);
    }

    
    
    
     
    

    useEffect(()=>{
        setClas(Nav)
    },[Nav])



  

  return (

        <header className='header'>
            <a href='#' className='logo' >
                B.Achraf
            </a>
            <i class='bx bx-menu' id='menu-icon' onClick={()=>handleClick()}></i>
            <nav id={nav?"a15":"a16"} className='navbar'>
            <a href='#' className={clas==="Home"? "active" : ""} >Home</a>
            <a href='#about' className={clas==="About"? "active" : ""} >About</a>
            <a href='#education' className={clas==="Education"? "active" : ""} >Education</a>
            <a href='#skills' className={clas==="Skills"? "active" : ""} >Skills</a>
            <a href='#project' className={clas==="project"? "active" : ""} >Project</a>
            <a href='#contact' className={clas==="Contact"? "active" : ""} >Contact</a>
            </nav>
        </header>

  )
}

export default Navbar