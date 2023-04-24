import React from 'react'
import './Projects.css'
import project1 from "../../Images/project1.png"
import project2 from "../../Images/project2.png"
import Projectcard from '../../components/mini-components/Projectcard/Projectcard'
const Projects = () => {
  return (
    <div>
          <div className='heading'>
        <h4>--Projects</h4>
      </div>
      <div className='projects-title'>
        <h2>"Management is doing things right,<br/>leadership is doing the right things."
</h2>
<div className='project-img'>

<Projectcard/>

</div>

<section className='project-load'><a href='#'>
<button class="button-54" role="button">Load More</button>
  </a></section>
      </div>
    </div>
  )
}

export default Projects
