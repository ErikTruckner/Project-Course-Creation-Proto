import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import ProjectsCanvas from './canvas/ProjectsCanvas'

// Carousel explainer: https://www.youtube.com/watch?v=XJSOgV4VELk

const Projects = () => {
  const slides = [
    {
      imageSrc: 'https://i.ibb.co/ncrXc2V/1.png',
      projectName: 'Project 1',
      projectLink: '#',
      projectDescription:
        'This is the description for project 1. sgsdrgdsrgg  drgdrg drg tjrfj ftj ftj yk gk yukl hddrg rg rdg srg e4g lorem ipsom',
      githubLink: '#',
    },
    {
      imageSrc: 'https://i.ibb.co/B3s7v4h/2.png',
      projectName: 'Project 2',
      projectLink: '#',
      projectDescription: 'This is the description for project 2.',
      githubLink: '#',
    },
    {
      imageSrc: 'https://i.ibb.co/XXR8kzF/3.png',
      projectName: 'Project 3',
      projectLink: '#',
      projectDescription: 'This is the description for project 3.',
      githubLink: '#',
    },
    {
      imageSrc: 'https://i.ibb.co/yg7BSdM/4.png',
      projectName: 'Project 4',
      projectLink: '#',
      projectDescription: 'This is the description for project 4.',
      githubLink: '#',
    },
  ]

  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    const slideInterval = setInterval(next, 10000)
    return () => clearInterval(slideInterval)
  }, [])

  const Card = ({
    imageSrc,
    projectName,
    projectLink,
    projectDescription,
    githubLink,
  }) => {
    return (
      <div className='border-4 w-full   bg-gradient-to-r from-[#069ef67e] to-[#111c6f82] rounded-lg overflow-hidden  flex flex-col flex-shrink-0 '>
        <div className=' h-[40%]'>
          <a href={projectLink}>
            <img
              src={imageSrc}
              alt={projectName}
              className='border-b-2 w-full h-full object-cover cursor-pointer'
            />
          </a>
        </div>
        <div className='flex flex-col justify-start items-center h-[40%] mt-10 '>
          <h2 className=' text-white text-center mb-10  '>{projectName}</h2>
          <p className=' text-white text-center mb-5 '>{projectDescription}</p>
          <div className='flex justify-center '>
            <a href={githubLink}>
              <img
                src='https://img.icons8.com/material-outlined/24/000000/github.png'
                alt='github link'
                className='w-10 h-10'
              />
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className=' bg-slate-900 relative w-full h-screen '>
      <ProjectsCanvas />
      <div className=' absolute top-0 left-0  w-[98%]  flex flex-col justify-center items-center text-white '>
        <h1 className='text-5xl lg:text-7xl mt-5  '>
          Portfolio
          <span className=' light-blue-text font-semibold '> Pro</span>jects
        </h1>
        <div className=' max-w-sm mt-10'>
          <div className='overflow-hidden relative'>
            <div
              className='flex transition-transform
          ease-out duration-500'
              style={{ transform: `translateX(-${curr * 100}%)` }}>
              {slides.map((slide, index) => (
                <Card
                  key={index}
                  imageSrc={slide.imageSrc}
                  projectName={slide.projectName}
                  projectLink={slide.projectLink}
                  projectDescription={slide.projectDescription}
                  githubLink={slide.githubLink}
                />
              ))}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
              <button
                onClick={prev}
                className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={next}
                className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                <ChevronRight size={40} />
              </button>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
              <div className='flex items-center justify-center gap-2'>
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`
                  transition-all w-3 h-3 bg-white rounded-full
                  ${curr === i ? 'p-2' : 'bg-opacity-50'}
                `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
