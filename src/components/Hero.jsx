import ReactLogoCanvas from './canvas/ReactLogo'

import '../index.css'

const Hero = () => {
  return (
    <section className='bg-slate-900 relative w-full h-screen mx-auto '>
      <div className='absolute left-[15%] top-[13%] max-w-7xl mx-auto fredoka-font text-white'>
        <h1 className='lg:text-8xl md:text-5xl text-3xl '>
          Hi, I'm
          <span className='light-blue-text font-semibold'> Erik</span>
        </h1>
        <h2 className='mt-10 lg:text-5xl md:text-5xl text-3xl w-[60%]'>
          I'm a Full Stack 3D React Developer
        </h2>
      </div>
      <ReactLogoCanvas />
    </section>
  )
}

export default Hero
