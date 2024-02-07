import React, {useState , useEffect} from 'react';
import './Skills.scss';

//import { urlFor, client } from '../../client';

import  {AppWrap} from '../../wrapper';
import { images } from '../../constants';

const Skills = () => {

const hardSkill = [
  {
    skillname: 'C++',
    description: "Well versed in using C++ as a way to optimize memory allocation for solving complex problems. It is also my favorite language I have learned thus far.",
    imgUrl: images.cpp,
  },
  {
    skillname: 'Java',
    description: "Experienced in using Java as an object oriented programming language for the purpose of building data structures and analyzing algorithms.",
    imgUrl: images.java_svg,
  },
  {
    skillname: 'Python',
    description: "Experienced in using python for data analysis and visualization. I intend to learn the TensorFlow and PyTorch libraries in the near future.",
    imgUrl: images.python,
  },
  {
    skillname: 'Mathematica',
    description: "Trained in the use of Mathematica for solving problems requiring more complex mathematical analysis, especially for problems in physics.",
    imgUrl: images.mathematica,
  },
  {
    skillname: 'R/RStudio',
    description: "Trained in the use of Mathematica for solving problems requiring more complex mathematical analysis, especially for problems in physics.",
    imgUrl: images.Rlang,
  },
  {
    skillname:'HTML/CSS/Javascript',
    description: "Proficient at interfacing HTML, CSS, and Javascript to build the foundation of any frontend web application.",
    imgUrl: images.html_css_js,
  },
  {
    skillname: 'React',
    description: "I am currently in the process of learning the React Frontend Framework, which is utilized in this application.",
    imgUrl: images.react,
  },
  {
    skillname: 'ArcGIS',
    description: "Trained in the fundamentals of ArcGIS for the purpose of analyzing geospatial information.",
    imgUrl: images.arc,
  },
  {
    skillname: 'Micosoft Office',
    description: "Proficient in using Excel, Word, and Powerpoint for csv creation, document generation, and presentation making.",
    imgUrl: images.office,
  },
]
  

const softSkill = [
  {
    skillname: 'Critical Thinking',
    description: "I always look for new ways to solve and see a problem, and find the process and discovery of a solution to be incredibly gratifying.",
    imgUrl: images.crit_think,
  },
  {
    skillname: 'Time Managment',
    description: "Time management may be my strongest skill. I never miss a deadline, and always plan and structure my time well in advance.",
    imgUrl: images.tm,
  },
  {
    skillname: 'Work Ethic',
    description: "My work ethic is unmatched and insatiable. I always want, and love to be doing something focused and productive.",
    imgUrl: images.w_ethic,
  },
  {
    skillname: 'Adaptability',
    description: "I am highly adaptable to new people, new situations, and new ideas. I am also able to change course dramatically and decisively when need be.",
    imgUrl: images.adapt,
  },
  {
    skillname: 'Communication',
    description: "I enjoy and thrive off of team based communication. I am always open and welcome to alternate perspectives.",
    imgUrl: images.comm,
  },
  {
    skillname: 'Collaboration',
    description: "I love projects and environments with alternate perspective. I am also capable of both working with, and leading a team.",
    imgUrl: images.collab,
  },
]


  return (
    <div>
      <div className='skills'>
        <div className = 'hard_skills'>
          <p>My Hard Skills = {`() => {`} </p>
          {hardSkill.map((hardSkill) => (
            <div className='hard_skills-content'>
              <div className = 'hard_skill'>
                <img src = {hardSkill.imgUrl} />
                <div className='hardSkillInfo'>
                  <div className='hardSkillName'>
                    <p>{hardSkill.skillname}:</p>
                  </div>
                  <div className='hardSkillDesc'>
                    <p>{hardSkill.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p>{`}`}</p>
        </div>
          
        <div className = 'soft_skills'>
          <p>My Soft Skills = {`() => {`}</p>
          {softSkill.map((softSkill) => (
            <div className='soft_skills_content'>
               <div className = 'soft_skill'>
                <img src={softSkill.imgUrl} />
                <div className='softSkillInfo'>
                  <div className='softSkillName'>
                    <p>{softSkill.skillname}:</p>
                  </div>
                  <div className='softSkillDesc'>
                    <p>{softSkill.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Skills , 'skills');