import ReactLogoCanvas from './canvas/ReactLogo'

import '../index.css'
import '../animations.css'
import { Suspense } from 'react'

const Hero = () => {
  return (
    <section className='bg-slate-900 relative w-full h-screen mx-auto  '>
      <Suspense>
        <ReactLogoCanvas />
      </Suspense>

      <div className='absolute left-[5%] top-[5%] xl:left-[14%] xl:top-[14%]  mx-auto fredoka-font text-white '>
        <h1 id='hero-header' className='puff-in-center text-5xl lg:text-7xl'>
          Hi, I'm
          <span className='heartbeat light-blue-text font-semibold '>
            {' '}
            Erik
          </span>
        </h1>
        <h2 className='mt-8 text-3xl w-2/3 text-center puff-in-center-delayed'>
          I'm a Full Stack 3D React Developer
        </h2>
      </div>
      <div className=' absolute flex flex-col  bottom-[13%] left-[50%] translate-x-[-50%]  '>
        <div className='slide-bottom'>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
