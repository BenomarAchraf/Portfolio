import React from 'react'
import "./Projects.css"
const Projects = ({setNavbar}) => {
  return (
    <div>
        <section className='skills' id='skills'  onMouseEnter={()=>{
        console.log("change");
        setNavbar("Skills")}} onMouseLeave={()=>
            setNavbar("Home")}>
        <h2 className='Heading'>My <span className='Me'>Skills</span> </h2>

        <div className='skills-row'>
            <div className='projects'>
                <div className='project-container'>
                    <div className='project-information'>
                        <h3>Project1</h3>
                        <a href=''><box-icon name='github' type='logo' ></box-icon></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Projects