import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import { images } from '../../constants'

const abouts = [
  {
    title: 'Web Development', description: 'I am a good Web Developer', imageUrl: images.about01,
  
  },

  {
    title: 'Frontend Development', description: 'I am a good Web Developer', imageUrl: images.about02,
  
  },

  { 
    title: 'Backend Development', description: 'I am a good Web Developer', imageUrl: images.about03,
  
  },

  { 
    title: 'MERN Stack', description: 'I am a good Web Developer', imageUrl: images.about04,
  
  },
]

const About = () => {
  return (
    <div>
      <h2 className="head-text">
        <br />
        I know 
        <span>
<br />
          Good Apps
        <br />
        </span>
          means 

        <span>
          <br />
          Good Business
        </span>



      </h2>
      <div className="app__profiles">

        {abouts.map((about, index) => (
          <motion.div 
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}

          >
            <img src={about.imageUrl} alt={about.title}></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title }</h2>
            <h2 className="p-text" style={{ marginTop: 20 }}>{about.description }</h2>
            

 </motion.div> 
))}
      </div>
    </div>
  )
}

export default About
