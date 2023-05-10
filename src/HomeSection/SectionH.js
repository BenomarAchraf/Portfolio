import React from 'react'
import "./SectionH.css"
import image from "../Assets/Images/CV-Achraf.png"
const SectionH = ({setNavbar}) => {
  return (
    <section className='SectionH' id='SectionH' onMouseEnter={()=>{
        console.log("change");
        setNavbar("Home")}} onMouseLeave={()=>
            setNavbar("Home")}>
        <div className='home-content' >
            <h1>Hi, I'm <span>Benomar Achraf</span></h1>
            <div className='text-animated'>
                <h3>
                    Web Developer
                </h3>
            </div>
            <p>
            Motivated until the last point, always striving for excellence and pushing beyond limits.</p>
            <div className='btn-box'>
                <a href='#about' className='btn'>About Me</a>
                <a href='#contact' className='btn'>Let's Talk</a>
            </div>
        </div>
        <div className='home-rs'>
            <a href='https://www.linkedin.com/in/achraf-benomar-291756241/' >
            <i class='bx bxl-linkedin'></i>
            </a>
            <a href='https://www.instagram.com/achraf_benomar/' >
            <i class='bx bxl-instagram-alt' ></i>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100004415918795' >
            <i class='bx bxl-facebook'></i>
            </a>            
        </div>
        <div className='Image-Achraf'><img className='Image-Achraf-size' src={image} alt=''></img></div>
        <div className='Image-Achraf-Hover'></div>
    </section>
  )
}

export default SectionH