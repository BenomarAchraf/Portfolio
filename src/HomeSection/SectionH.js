import React from 'react'
import "./SectionH.css"
import image from "../Assets/Images/CV-Achraf.png"
const SectionH = () => {
  return (
    <section className='SectionH' id='SectionH'>
        <div className='home-content' >
            <h1>Hi, I'm <span>Benomar Achraf</span></h1>
            <div className='text-animated'>
                <h3>
                    Web Developer
                </h3>
            </div>
            <p>
            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
            </p>
            <div className='btn-box'>
                <a href='#' className='btn'>Hire Me</a>
                <a href='#' className='btn'>Let's Talk</a>
            </div>
        </div>
        <div className='home-rs'>
            <a href='#' >
            <i class='bx bxl-linkedin'></i>
            </a>
            <a href='#' >
            <i class='bx bxl-instagram-alt' ></i>
            </a>
            <a href='#' >
            <i class='bx bxl-facebook'></i>
            </a>            
        </div>
        <div className='Image-Achraf'><img className='Image-Achraf-size' src={image} alt=''></img></div>
        <div className='Image-Achraf-Hover'></div>
    </section>
  )
}

export default SectionH