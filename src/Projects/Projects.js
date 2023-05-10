import React ,{useState} from 'react'
import "./Projects.css"
const Projects = ({setNavbar}) => {

    const [show ,setShow]=useState(false);
    
  return (
    <div className='Projet'>
        <section className='Projet' id='project'  onMouseEnter={()=>{
        console.log("change");
        setNavbar("project")}} onMouseLeave={()=>
            setNavbar("Home")}>
        <h2 className='Heading'>My <span className='Me'>Projects</span> </h2>

        <div className='skills-row'>
            <div className='projects'>
                <div id="image" className='project-container' >
                    <div className='project-information'>
                        <p>SmartSnake<span className='Me'>-Site</span></p>
                        <a href='https://github.com/BenomarAchraf/Stage-Project'><box-icon id="github" type='logo' name='github' color="var(--main-color)"
                                size="xs"></box-icon></a>
                    </div>
                </div>
            </div>
            <div className='projects'>
                <div id="image1" className='project-container'  >
                    <div className='project-information'>
                        <p>Ask<span className='Me'>-Bricall</span></p>
                        <a href='https://github.com/BenomarAchraf/Bricall'><box-icon id="github" type='logo' name='github' color="var(--main-color)"
                                size="xs"></box-icon></a>
                    </div>
                </div>
            </div>
            <div className='projects'>
                <div id="image2" className='project-container'  >
                    <div className='project-information'>
                        <p>Micro<span className='Me'>-Movies</span></p>
                        <a href='https://github.com/BenomarAchraf/Micro-Movies'><box-icon id="github" type='logo' name='github' color="var(--main-color)"
                                size="xs"></box-icon></a>
                    </div>
                </div>
            </div>
            <div id='position-project' className='projects'>
                <div id="image3" className='project-container'  >
                    <div className='project-information'>
                        <p id='Admin'>Admin<span className='Me'>-Dash</span></p>
                        <a href='https://github.com/BenomarAchraf/AdminDanshboard'><box-icon id="github" type='logo' name='github' color="var(--main-color)"
                                size="xs"></box-icon></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Projects