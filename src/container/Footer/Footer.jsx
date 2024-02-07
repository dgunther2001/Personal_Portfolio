import React from 'react';
import './Footer.scss';
import {motion} from 'framer-motion';

const Footer = () => {
  return (
    <motion.div className='footer'>
      <div className='learned'>
        <p>I hope you learned something more about me!!!</p>
      </div>
      <div className='reachOut'>
        <p>Feel free to reach out, if you want to ask me anything, or collaborate</p>
      </div>
      <div className='email'>
        <p>My email is: danielgunther2001@gmail.com</p>
      </div>
      <div className='linked'>
        <a href = 'https://www.linkedin.com/in/daniel-gunther-1b035a221' target="new">LinkedIn</a>
      </div>
      <div className='git'>
        <a href='https://github.com/dgunther2001' target="new">Github</a>
      </div>
    </motion.div>
  )
}

export default Footer