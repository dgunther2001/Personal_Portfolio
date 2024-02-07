import React, { useState, useEffect} from 'react';
import './Experience.scss';
import  {AppWrap} from '../../wrapper';
import { images } from '../../constants';
import { motion } from 'framer-motion';

const Experience = () => {

  const education = [
    {
      inst: 'Denison University',
      major: 'Geosciences',
      gpa: 3.90,
      degree_type: 'B.S.',
      graduation: 'May 2023',
      imgUrl: images.denison,
    },
    {
      inst: 'S.U.N.Y New Paltz',
      major: 'Computer Science',
      gpa: 4.00,
      degree_type: 'B.S.',
      graduation: 'May 2025',
      imgUrl: images.newPaltz,
    },
  ];

  const experience = [
      {
        experience:'Geosciences Research Collaborator',
        description: "I have worked for a number of years on various geomorphologic research projects, utilizing: 3-dimensional modeling using structure from motion photogrammetry; ArcGIS; RStudio; extraction and isolation of cosmogenic beryllium-10.",
        employer: 'Denison University',
      },
      {
        experience: 'Chemical Isolation of In-Situ Beryllium-10',
        description: "As part of my geomorphology research, I was able to spend a few weeks at the UVM (NSF) Cosmogenic Laboratory, where I chemically isolated quartz, and performed the actual beryllium-10 extraction before it was sent to the Purdue accelerator mass spectrometer.",
        employer: 'University of Vermont',
      },
      {
        experience: 'Geology Field School',
        description: "In the Summer of 2023, I attended the renowned, and intensive Idaho State Field Camp, which allowed me to engage with premier field geologists, and gave me hands-on experience building geologic maps and histories in various landscapes, such as a metamorphic core complex, a landslide, glacially altered landscapes, volcanic deposits, as well as a multitude of others.",
        employer: 'Idaho State University',
      },
  ];

  const awards = [
    {
      award_name: 'Phi Beta Kappa Inductee',
      giving_inst: 'Phi Beta Kappa',
      date: 'May 2023',
      description: "This is the highest honor in America given to liberal arts students. Established in 1776 PBK has 293 chapters nationwide (~10 of universities%), with ~10% of the graduating class receiving the award.",
    },
    {
      award_name: 'Ohio Rocks Research Grant',
      giving_inst: "Ohio Department of Natural Resources",
      date: 'January 2021',
      description: 'Awarded annually to three students in Ohio studying geology (pool of graduate and undergraduate students) for relevant and important research in the geosciences.',
    },
    {
      award_name: 'Kirtley Mather Award',
      giving_inst: 'Denison Univeristy - EESC Dept',
      date: 'May 2023',
      description: "The Kirtley F. Mather Award is the highest achievement award given by the Department…It is given to an outstanding Geosciences student.",
    },
    {
      award_name: 'Lamoreaux Scholar',
      giving_inst: 'Denison University - EESC Dept',
      date: 'May 2021',
      description: 'Established in 2017 this scholarship is awarded to excellent rising junior and senior Geosciences majors.',
    },
    {
      award_name: 'Summa Cum Laude',
      giving_inst: 'Denison University',
      date: 'May 2023',
      description: 'Awarded for graduating with a 3.90 GPA and above.',
    },
    {
      award_name: "Dean's List",
      giving_inst: "Denison University",
      date: 'May 2020 - May 2023',
      description: 'Awarded to students achieving a 3.70 GPA or above.',
    },
    {
      award_name: "Dean's List",
      giving_inst: 'S.U.N.Y New Paltz',
      date: 'Dec 2023',
      description: 'Awarded to students achieving a 3.30 GPA and above.',
    },
  ];


  return (
    
      <div className='edu-exp'>


        <div className='edu'>
          <div className='header'>
            <p>My Education Thus Far...</p>
          </div>
          {education.map((education) => (
            <div className='loc'>

              <div className='logo'>
                <img src={education.imgUrl} alt={education.title} />
              </div>

              <div className='ins_name'>
                <p><p className='fadeUp'>{education.inst} <span style = {{marginLeft: '1rem'}}></span></p></p>
              </div>

              <div className='gen-info'>
                <p> <p className='fade'><span className='sec'>Major:</span> {education.degree_type}  {education.major}</p> <p className='fade'><span style = {{marginLeft: '1rem'}}></span><span className='sec'>GPA:</span> {education.gpa}</p> <p className='fade'><span style = {{marginLeft: '1rem'}}></span>  <span className='sec'>Graduation Date:</span> {education.graduation}</p> </p>
              </div>


            </div>

          ))}



        </div>

        <div className='exp'>
          <div className='head_exp'>
            <p>Attained Experience</p>
          </div>
          {experience.map((experience) => (
            <div className='exp_indiv'>
              <div className='exp_name'>
                  <p>{experience.employer} - {experience.experience}: </p>
              </div>
              <div className='exp_desc'>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}

        </div>

        <div className='awards'>
          <div className='head_awards'>
            <p>My Awards</p>
          </div>
          {awards.map((award) => (
          <div className='indiv_award'>
            <div className='award_name'>
              <p>{award.award_name} {`(`}{award.giving_inst}{`)`}:</p>
            </div>
            <div className='award_desc'>
              <p> Awarded: {award.date} -  {award.description}</p>
            </div>

          </div>
          ))}


        
        </div>

      </div>
  )
}

export default AppWrap(Experience, 'edu/exp')