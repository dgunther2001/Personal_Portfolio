import React from 'react';
import './Header.scss';
import { images } from '../../constants';
import  {AppWrap} from '../../wrapper';
import { BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const Header = () => {

  function handleGitHubClick (){
    window.open('https://github.com/dgunther2001');
  };

  function handleLinkedClick() {
    window.open('https://www.linkedin.com/in/daniel-gunther-1b035a221');
  };

  function handleInstaClick () {
    window.open('http://www.instagram.com/danny_2001324');
  };

  return (
    <div>
      <div className = 'app__name-intro'>
          <div className = 'intro_text'>
              <p className = 'p1' >Hey! My Name's <span style = {{fontWeight: 'bold', color: '#344E41'}}>Daniel Gunther!</span></p>
              <p className='p2'>I'm a Computer Scientist and Geologist</p>
          </div>
      </div>
      <div className='app__header-img'>
          <img src = {images.nv_img} alt = 'me in the field!'/>
      </div>
      <div className='contact_text'>
        <p className='phone'><span style = {{fontWeight: 'bold', color: '#344E41'}}>Phone:</span> 973-477-1390</p>
        <p className='email'><span style = {{fontWeight: 'bold', color: '#344E41'}}>Email:</span> danielgunther2001@gmail.com</p>
        <p className='res'><span style = {{fontWeight: 'bold', color: '#344E41'}}>Residence:</span> New Paltz, NY 12561</p>
      </div>

      <div className = 'socials_mobile'>

        <div >
            <BsInstagram onClick = {handleInstaClick}/>
        </div>
        <div onClick = {handleLinkedClick}>
            <BsLinkedin />
        </div>
        <div onClick = {handleGitHubClick}>
              <FaGithub />
        </div>

      </div>

    </div>
  )
}

export default AppWrap(Header, 'home');