import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ProjectsCanvas from './canvas/ProjectsCanvas'

const slides = [
  {
    imageSrc: 'https://picsum.photos/200?random=2',
    projectName: 'Project 1',
    projectLink: '#',
    projectDescription:
      'This is the description for project 1. You can talk about the technologies you used for the project, what you learned, or maybe even make a link to a blog post you wrote about the projec that goes into more details than can be placed in a card! ',
    githubLink: '#',
  },
  {
    imageSrc: 'https://picsum.photos/200?random=3',
    projectName: 'Project 2',
    projectLink: '#',
    projectDescription:
      'This is the description for project 2. You can talk about the technologies you used for the project, what you learned, or maybe even make a link to a blog post you wrote about the projec that goes into more details than can be placed in a card!',
    githubLink: '#',
  },
  {
    imageSrc: 'https://picsum.photos/200?random=4',
    projectName: 'Project 3',
    projectLink: '#',
    projectDescription:
      'This is the description for project 3. You can talk about the technologies you used for the project, what you learned, or maybe even make a link to a blog post you wrote about the projec that goes into more details than can be placed in a card!',
    githubLink: '#',
  },
  {
    imageSrc: 'https://picsum.photos/200?random=5',
    projectName: 'Project 4',
    projectLink: '#',
    projectDescription:
      'This is the description for project 4. You can talk about the technologies you used for the project, what you learned, or maybe even make a link to a blog post you wrote about the projec that goes into more details than can be placed in a card!',
    githubLink: '#',
  },
]

const SwiperProjects = () => {
  const Card = ({
    imageSrc,
    projectName,
    projectLink,
    projectDescription,
    githubLink,
  }) => {
    return (
      <div className='border-4 w-full bg-gradient-to-r from-[#069ef67e] to-[#111c6f82] rounded-lg overflow-hidden flex flex-col'>
        <div className='w-full '>
          <a href={projectLink} className='block w-full h-full'>
            <img
              src={imageSrc}
              alt={projectName}
              className='w-full  object-cover cursor-pointer flex-shrink'
            />
          </a>
        </div>
        <div className='flex flex-col justify-start items-center h-[40%] mx-1'>
          <h2 className='text-white text-center mb-5'>{projectName}</h2>
          <p className='text-white text-center mb-5'>{projectDescription}</p>
          <div className='flex justify-center mb-1'>
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
    <section className=' bg-slate-900 relative w-full h-full overflow-hidden '>
      <div className='absolute w-full h-full'>
        <ProjectsCanvas />
      </div>
      <div className='w-full h-full flex flex-col justify-center items-center text-white z-10'>
        <h1 className='text-5xl lg:text-7xl mt-10 fredoka-font text-center'>
          Portfolio
          <span className=' light-blue-text font-semibold '> Pro</span>
          jects
        </h1>
        <div className='w-full lg:w-1/4 my-5 '>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={100}
            slidesPerView={1.5}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 200,
              modifier: 3,
              slideShadows: true,
            }}
            autoHeight={true}
            resizeObserver={true}
            modules={[EffectCoverflow]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            {slides.map((slide) => (
              <SwiperSlide key={slide.index}>
                <Card
                  imageSrc={slide.imageSrc}
                  projectName={slide.projectName}
                  projectLink={slide.projectLink}
                  projectDescription={slide.projectDescription}
                  githubLink={slide.githubLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SwiperProjects
