import React, {useState , useEffect} from 'react';
//import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import  {AppWrap} from '../../wrapper';
import { images } from '../../constants';

import './About.scss';

const About = () => {

  const about = [
    {title: 'Computer Science', description: "During the course of my education, I found myself gravitating towards data driven and mathematically rigorous science. I realized how much I enjoyed the problem solving process that is the foundation of being a computer scientist. I'm always driving to learn new languages, methodologies, logic in the boundless world of technology that is available.", imgUrl:images.cs_image},
    {title: 'Mathematics and Physics', description: "I've taken numerous undergraduate courses in physics and mathematics enabling me to not only be able to ask scientific questions, but also have the tools to analyze and model using modern techniques. I am proficient in Linear Algebra; Linear and Non-Linear Differential Equations; Fourier Analysis; Discrete and Continuous Statistical Methods; Iterated Maps and Chaos. This upcoming year, I plan to couple my knowledge of basic chaos theory to better understand the behavior of iterated maps.", imgUrl: images.log_map},
    {title: 'Geomorphology' , description: 'During my undergraduate studies at Denison University, I did significant research utilizing computational techniques in conjunction with fieldwork and extraction of cosmogenically derived beryllium-10  to quantify geomorphic rates of soil production in Central Ohio for the purpose of informing acceptable agricultural rates of soil loss. I have published a number of abstracts and presentations in conjunction with Dr. Matthew Jungers which are linked below, and we hope to publish our manuscript within the next year.', imgUrl: images.nv_pit}
  ]

  return (
    <div className='app__about'>
      <div className = 'about_title'>
        <p className = 'title_text'>If you want to know more about who I am and what I do, look no further!</p>
      </div>
      <div className = 'header_text'>
        <p className = 'about_head-text'>I am an aspiring <span style = {{fontWeight: 'bold', color: '#344E41'}}>computational physical scientist and computer scientist </span>who is discovering
        their path through dedicated learning, research, a drive to succeed, and most of all
        an <span style = {{fontWeight: 'bold', color: '#344E41'}}>insatiable work ethic.</span>
        </p>
      </div>

      <div className = 'app__profile'>
      {about.map((about) => (
        <div>


          <div className='app__profile-item'>


            <motion.div className='item'>
              <div class = 'title'>
                <h2 style={{ marginTop: 20, color:'#344E41', textAlign:'center'}}>{about.title}</h2>
              </div>
              <div className='image'>
                <img src={about.imgUrl} alt={about.title} />
                <p className='text' style={{ marginTop: 10 }}>{about.description}</p>
              </div>
            </motion.div>
          </div>



        </div>
      ))}
      </div>

      <div className='foot_text'>
        <p className='about_foot-text'>This is just a broad brush, we'll get into more specifics below</p>
      </div>
    </div>
  )
}

export default AppWrap(About, 'about');