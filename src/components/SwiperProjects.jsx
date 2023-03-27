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
  const Card = ({
    imageSrc,
    projectName,
    projectLink,
    projectDescription,
    githubLink,
  }) => {
    return (
      <div className='border-4 w-full bg-gradient-to-r from-[#069ef67e] to-[#111c6f82] rounded-lg overflow-hidden  flex flex-col '>
        <div className=' w-full '>
          <a href={projectLink} className='border-b-2 w-full object-fill  '>
            <img
              src={imageSrc}
              alt={projectName}
              className='border-b-2 object-fill scale-90 cursor-pointer'
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
    <section className=' bg-slate-900 relative w-full h-full '>
      <div className='w-full h-full flex flex-col justify-center items-center text-white'>
        <h1 className='text-5xl lg:text-7xl mt-10 fredoka-font text-center'>
          Portfolio
          <span className=' light-blue-text font-semibold '> Pro</span>
          jects
        </h1>
        <div className='w-full my-10'>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={50}
            slidesPerView={3}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}>
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
