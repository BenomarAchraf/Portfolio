import React from 'react'
import "./Skills.css"
const Skills = () => {
  return (
    <section className='skills' id='skills'>
        <h2 className='Heading'>My <span className='Me'>Skills</span> </h2>

        <div className='skills-row'>
            <div className='skills-column'>
                <h3 className='title'>Coding Skills</h3>
                <div className='Skills-box'>
                    <div className='skills-content'>
                        <div className='progress'>
                            <h3>HTML <span>90%</span> </h3>
                            <div className='bar' style={{"--i": "90%" }} ><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>HTML <span>90%</span> </h3>
                            <div className='bar' style={{"--i":"70%"}} ><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>HTML <span>90%</span> </h3>
                            <div className='bar' style={{"--i":"90%"}} ><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>HTML <span>90%</span> </h3>
                            <div className='bar' style={{"--i":"90%"}} ><span></span></div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className='skills-column'>
                <h3 className='title'>Coding Skills</h3>
                <div className='Skills-box'>
                    <div className='skills-content'>
                        <div className='progress'>
                            <h3>HTML <span>90%</span> </h3>
                            <div className='bar' style={{"--i":"90%"}} ><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>HTML <span>90%</span> </h3>
                            <div className='bar' style={{"--i":"90%"}} ><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>HTML <span>90%</span> </h3>
                            <div className='bar' style={{"--i":"90%"}} ><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>HTML <span>90%</span> </h3>
                            <div className='bar' style={{"--i":"90%"}} ><span></span></div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills