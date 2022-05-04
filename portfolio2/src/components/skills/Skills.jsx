import React from 'react'
import './Skills.css'
import {FaPython} from 'react-icons/fa'
import {SiHtml5, SiCss3, SiJavascript, SiJquery, SiReact, SiMongodb, SiNodedotjs, SiPostgresql, SiDjango} from 'react-icons/si'


const Skills = () => {
    return (
        <section id='skills'>
            <h2 className='skills_title'>Skills</h2>

            <div className='container skills_container'>
                <div className='skills_frontend'>
                    <h3>Frontend Developement</h3>
                    <div className='skills_content'>
                        <article className='skills_details'>
                            <SiHtml5 className='skills_details_icon'/>
                            <h4>HTML</h4>
                        </article>
                        <article className='skills_details'>
                            <SiCss3 className='skills_details_icon'/>
                            <h4>CSS</h4>
                        </article>
                        <article className='skills_details'>
                            <SiJavascript className='skills_details_icon'/>
                            <h4>JavaScript</h4>
                        </article>
                        <article className='skills_details'>
                            <SiJquery className='skills_details_icon'/>
                            <h4>jQuery</h4>
                        </article>
                        <article className='skills_details'>
                            <SiReact className='skills_details_icon'/>
                            <h4>React</h4>
                        </article>
                    </div>
                </div>
                <div className='skills_backend'>    
                    <h3>Backend Developement</h3>
                    <div className='skills_content'>
                        <article className='skills_details'>
                            <SiMongodb className='skills_details_icon'/>
                            <h4>MongoDB</h4>
                        </article>
                        <article className='skills_details'>
                            <SiNodedotjs className='skills_details_icon'/>
                            <h4>Node JS</h4>
                        </article>
                        <article className='skills_details'>
                            <SiPostgresql className='skills_details_icon'/>
                            <h4>PostgreSQL</h4>
                        </article>
                        <article className='skills_details'>
                            <SiDjango className='skills_details_icon'/>
                            <h4>Django</h4>
                        </article>
                        <article className='skills_details'>
                            <FaPython className='skills_details_icon'/>
                            <h4>Python</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills