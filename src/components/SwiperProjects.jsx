import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper'

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

const SwiperProjects = () => {
  const slides = [
    {
      index: 0,
      imageSrc: 'https://i.ibb.co/ncrXc2V/1.png',
      projectName: 'Project 1',
      projectLink: '#',
      projectDescription:
        'This is the description for project 1. sgsdrgdsrgg  drgdrg drg tjrfj ftj ftj yk gk yukl hddrg rg rdg srg e4g lorem ipsom',
      githubLink: '#',
    },
    {
      index: 1,
      imageSrc: 'https://i.ibb.co/B3s7v4h/2.png',
      projectName: 'Project 2',
      projectLink: '#',
      projectDescription: 'This is the description for project 2.',
      githubLink: '#',
    },
    {
      index: 2,
      imageSrc: 'https://i.ibb.co/XXR8kzF/3.png',
      projectName: 'Project 3',
      projectLink: '#',
      projectDescription: 'This is the description for project 3.',
      githubLink: '#',
    },
    {
      index: 3,
      imageSrc: 'https://i.ibb.co/yg7BSdM/4.png',
      projectName: 'Project 4',
      projectLink: '#',
      projectDescription: 'This is the description for project 4.',
      githubLink: '#',
    },
  ]

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
          <h2 className=' text-white text-center mb-10  '>
            Why no work{projectName}
          </h2>
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
      <div className='w-full h-full flex justify-center items-center'>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <Card
              imageSrc={slides.imageSrc}
              projectName={slides.projectName}
              projectLink={slides.projectLink}
              projectDescription={slides.projectDescription}
              githubLink={slides.githubLink}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imageSrc={slides.imageSrc}
              projectName={slides.projectName}
              projectLink={slides.projectLink}
              projectDescription={slides.projectDescription}
              githubLink={slides.githubLink}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imageSrc={slides.imageSrc}
              projectName={slides.projectName}
              projectLink={slides.projectLink}
              projectDescription={slides.projectDescription}
              githubLink={slides.githubLink}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imageSrc={slides.imageSrc}
              projectName={slides.projectName}
              projectLink={slides.projectLink}
              projectDescription={slides.projectDescription}
              githubLink={slides.githubLink}
            />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </section>
  )
}

export default SwiperProjects
