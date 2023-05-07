import React from 'react'
import "./About.css"
import image from "../Assets/Images/CV-Achraf.png"
const About = () => {
  return (
    <section className='about' id='about'>
        <h2 className='Heading' >About <span className='Me'>Me</span></h2>
        <div className='About-img'>
            <img className='About-Image-Achraf-size' src={image} alt=''></img>
            <span className='circle-spin'></span>
        </div>
        <div className='About-content'>
            <h3>Web Developer!</h3>
            <p>As a current software engineering student, I am passionate about web development and aspire to implement
innovative solutions using the latest technologies to provide exceptional user experiences. I am highly
motivated, enthusiastic, and constantly seeking new challenges to enhance my skills and make a significant
contribution to the projects I work on.</p>
            <div className='btn-box btns'>
                <a href='#' className='btn'>Read More</a>
            </div>
        </div>
    </section>
  )
}

export default About