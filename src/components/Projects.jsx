import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import ProjectsCanvas from './canvas/ProjectsCanvas'

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
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
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const slides = [
  'https://i.ibb.co/ncrXc2V/1.png',
  'https://i.ibb.co/B3s7v4h/2.png',
  'https://i.ibb.co/XXR8kzF/3.png',
  'https://i.ibb.co/yg7BSdM/4.png',
]

const Projects = () => {
  return (
    <section className='bg-slate-900 relative w-full h-screen mx-auto'>
      <ProjectsCanvas />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white fredoka-font my-10'>
        <h1 className='text-5xl lg:text-7xl '>
          Portfolio
          <span className=' light-blue-text font-semibold '> Pro</span>jects
        </h1>
        <div className='max-w-lg mt-10'>
          <Carousel>
            {slides.map((s) => (
              <img src={s} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Projects
