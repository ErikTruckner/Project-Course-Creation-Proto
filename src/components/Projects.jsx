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
      projectDescription: 'This is the description for project 1.',
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
    const slideInterval = setInterval(next, 3000)
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
      <div className='bg-white rounded-lg overflow-hidden w-full  flex-shrink-0'>
        <a href={projectLink}>
          <img
            src={imageSrc}
            alt={projectName}
            className='h-1/2 w-full object-cover cursor-pointer'
          />
        </a>
        <div className='p-4'>
          <h2 className='text-xl font-semibold mb-2'>{projectName}Cool</h2>

          <p className='text-gray-700 text-base'>{projectDescription}</p>
          <div className='flex justify-end mt-4'>
            <a href={githubLink}>
              <img
                src='https://img.icons8.com/material-outlined/24/000000/github.png'
                alt='github link'
                className='w-6 h-6'
              />
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className='bg-slate-900 relative w-full h-screen mx-auto'>
      <ProjectsCanvas />

      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white fredoka-font'>
        <h1 className='text-5xl lg:text-7xl mt-5 '>
          Portfolio
          <span className=' light-blue-text font-semibold '> Pro</span>jects
        </h1>
        <div className='max-w-lg mt-10'>
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
