import React, {useState, useEffect} from 'react';
import './Projects.scss';
import  {AppWrap} from '../../wrapper';
import { images } from '../../constants';

const Projects = () => {

  const project = [
    {
      title: 'Slow Rates of Soil Production on Hillslopes of the Appalachian Plateau, Ohio, USA - 2023',
      link: 'https://gsa.confex.com/gsa/2023AM/webprogram/Paper395825.html',
      imgUrl: images.hf,
    },
    {
      title: 'Modeling Soil Production Rates for Glaciated and Unglaciated Hillslopes of the Appalachian Plateau - 2022',
      link: 'https://doi.org/10.1130/abs/2022AM-379230',
      imgUrl: images.smokies,
    },
    {
      title: 'Presentation About Our Work by Dr. Matthew Jungers at the Geological Society of America - 2023',
      link: 'https://docs.google.com/presentation/d/1P8VQ_nYlD3yDW5Zs3sGuW0LS_KVxizds/edit?usp=sharing&ouid=110477382518034638403&rtpof=true&sd=true',
      imgUrl: images.pres,
    },
    {
      title: 'Quantifying the Role of Tree Throw in Hillslope Processes of the Western Appalachian Plateau - 2021',
      link: 'https://doi.org/10.1130/abs/2021AM-367651',
      imgUrl: images.maine,
    },
  ]


  return (
    <div>
      <div className='proj'>
        <div className = 'projects'>
          <div className='header'>
            <p>Here are some of my ongoing and completed projects!</p>
          </div>

          <div className='clickMe'>
            <p>{`(`}Click on images for links to projects{`)`}</p>
          </div>
          {project.map((project) => (
            <div className='projs'>
              <div className='project'>

                <div className='project_title'>
                  <p>{project.title}</p>
                </div>
                <div className='proj_logo'>
                  <a href={project.link} target="new">
                    <img src={project.imgUrl} alt={project.title}/>
                  </a>
                </div>

                <div className='project_desc'>
                  <p></p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default AppWrap(Projects, 'prj/pub');