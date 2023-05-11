import React from 'react'
import "./DevSkills.css"
import SpringCloud from "./Springcloud1.svg"
import {SiApachekafka ,SiSpringboot, SiConsul} from "react-icons/si"
import {GrMysql} from "react-icons/gr"
const DevSkills = ({setNavbar}) => {
  return (
    <section className='skills' id='skills'  onMouseEnter={()=>{
        console.log("change");
        setNavbar("Skills")}} onMouseLeave={()=>
            setNavbar("Home")}>
        <h2 className='Heading'>My <span className='Me'>Skills</span> </h2>

        <div className='skills-row'>
            <div className='skills-column'>
                <h3 className='title'>Languages</h3>
                <div className='Skills-box'>
                    <div className='skills-content1'>
                        <div className='Skill'>
                            <a href=''><box-icon 
                             name='python' type='logo'
                             color="var(--main-color)"
                                size="cssSize"
                             ></box-icon></a>
                                <p className='Skill-Lg'>Python</p>
                        </div>
                        <div className='Skill'>
                            <a href=''><box-icon 
                             name='java' type='logo'
                             color="var(--main-color)"
                                size="cssSize"
                             ></box-icon></a>
                                <p className='Skill-Lg'>Java</p>
                        </div>
                        <div className='Skill'>
                            <a href=''><box-icon 
                             name='javascript' type='logo'
                             color="var(--main-color)"
                                size="cssSize"
                             ></box-icon></a>
                                <p className='Skill-Lg'>Javascript</p>
                        </div>
                        <div className='Skill'>
                            <a href=''><box-icon 
                             name='typescript' type='logo'
                             color="var(--main-color)"
                                size="cssSize"
                             ></box-icon></a>
                                <p className='Skill-Lg'>Typescript</p>
                        </div>
                        <div className='Skill'>
                            <a href=''><box-icon 
                             name='data' type='solid'
                             color="var(--main-color)"
                                size="cssSize"
                             ></box-icon></a>
                                <p className='Skill-Lg'>SQL</p>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
            <div className='skills-column'>
                <h3 className='title'>Frontend</h3>
                <div className='Skills-box'>
                    <div className='skills-content1'>
                        <div className='Skill'>
                            <a href=''><box-icon 
                             name='javascript' type='logo'
                             color="var(--main-color)"
                                size="cssSize"
                             ></box-icon></a>
                                <p className='Skill-Lg'>Javascript</p>
                        </div>
                        <div className='Skill'>
                            <a href=''><box-icon 
                             name='react' type='logo'
                             color="var(--main-color)"
                                size="cssSize"
                             ></box-icon></a>
                                <p className='Skill-Lg'>ReactJS</p>
                        </div>
                        <div className='Skill'>
                            <a href=''><box-icon 
                             name='angular' type='logo'
                             color="var(--main-color)"
                                size="cssSize"
                             ></box-icon></a>
                                <p className='Skill-Lg'>AngularJS</p>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
            <div className='skills-column'>
                <h3 className='title'>Backend</h3>
                <div className='Skills-box'>
                    <div className='skills-content1'>
                        <div className='Skill'>
                        <a href=''><box-icon 
                             name='nodejs' type='logo'
                             color="var(--main-color)"
                                size="cssSize"
                             ></box-icon></a>    
                                <p className='Skill-Lg'>NodeJS</p>
                        </div>
                        <div className='Skill'>
                        <a className='Kafka-Skill' href=""><SiSpringboot className='icons-Skills' /></a> 
                        
                                <p className='Skill-Lg'>SpringBoot</p>
                        </div>
                        <div className='Skill'>
                           <a className='Kafka-Skill' href=""><img className='SpringCloud' src={SpringCloud} /></a> 
                             
                                <p className='Skill-Lg'>SpringCloud</p>
                        </div>
                        <div className='Skill'>
                        <a className='Kafka-Skill' href=""><SiConsul className='icons-Skills' /></a> 
                        
                                <p className='Skill-Lg'>Consul</p>
                        </div>
                          
                    </div>
                   
                </div>
            </div>
            <div className='skills-column'>
                <h3 className='title'>Databases</h3>
                <div className='Skills-box'>
                    <div className='skills-content1'>
                        <div className='Skill'>
                        <a className='Kafka-Skill' href=""><SiApachekafka className='icons-Skills' /></a> 
                             
                                <p className='Skill-Lg'>Kafka</p>
                        </div>
                        <div className='Skill'>
                            <a href=''><box-icon 
                             name='mongodb' type='logo'
                             color="var(--main-color)"
                                size="cssSize"
                             ></box-icon></a>
                                <p className='Skill-Lg'>MongoDB</p>
                        </div>
                        <div className='Skill'>
                           <a className='Kafka-Skill' href=""><GrMysql className='icons-Skills' /></a> 
                             
                                <p className='Skill-Lg'>MySQL</p>
                        </div>
                        <div className='Skill'>
                            <a href=''><box-icon 
                             name='postgresql' type='logo'
                             color="var(--main-color)"
                                size="cssSize"
                             ></box-icon></a>
                                <p className='Skill-Lg'>PostgreSQL</p>
                        </div>
                          
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default DevSkills