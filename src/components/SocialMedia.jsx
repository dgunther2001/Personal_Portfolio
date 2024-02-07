import React from 'react';
import { BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const NavigationDots = () => {

  function handleGitClick (){
    window.open('https://github.com/dgunther2001');
  };

  function handleLinkedInClick() {
    window.open('https://www.linkedin.com/in/daniel-gunther-1b035a221');
  };

  function handleInstagramClick () {
    window.open('http://www.instagram.com/danny_2001324');
  };

  return (
    <div className = "app__social">
        <div >
            <BsInstagram onClick = {handleInstagramClick}/>
        </div>
        <div onClick = {handleLinkedInClick}>
            <BsLinkedin />
        </div>
        <div onClick = {handleGitClick}>
              <FaGithub />
        </div>
    </div>
  )
}

export default NavigationDots