import React, { useRef, useState, useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import emailjs from '@emailjs/browser'
import ContactCanvas from './canvas/ContactCanvas'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_1234567',
        'template_1234567',
        {
          from_name: form.name,
          to_name: 'Erik',
          from_email: form.email,
          to_email: 'random@gmail.com',
          message: form.message,
        },
        'anotherAuth'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thanks! I will get back to you soon.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Oops, something went wrong. Please try again.')
        }
      )
  }

  // FRAMER MOTION
  const contactVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section className='bg-slate-900 w-full h-screen relative flex flex-col justify-center items-center pb-10 overflow-hidden'>
      <div className='absolute left-0 top-0 w-screen h-screen'>
        <ContactCanvas />
      </div>

      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={contactVariants}
        className='border-2 w-[98%] md:w-[60%] xl:w-[40%] text-center bg-gradient-to-r from-[#069ef67e] to-[#111c6f82] py-8 px-4 rounded-3xl glowing-shadow z-10 mt-20 mb-10'>
        <h1 className=' header-text-glow fredoka-font text-5xl lg:text-7xl text-white  '>
          C<span className=' light-blue-text font-semibold '>on</span>t
          <span className=' light-blue-text font-semibold '>act</span>
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white mb-4 font-bold'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='border-2 form-field-color py-4 px-6 placeholder:text-secondary text-white
               rounded-lg outline-none  font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-bold mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='border-2 form-field-color text-white py-4 px-6 placeholder:text-secondary rounded-lg outline-none  font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Please leave your message...'
              className='border-2 form-field-color py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none  font-medium'
            />
          </label>

          <button
            type='submit'
            className='border-2 hover-glowing-shadow-and-scale py-3 px-8 rounded-xl outline-none w-fit text-white font-bold'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default Contact
