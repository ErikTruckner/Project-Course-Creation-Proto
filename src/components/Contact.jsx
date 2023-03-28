import React, { useRef, useState } from 'react'

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

  return (
    <section className='bg-slate-900 relative w-full h-full flex flex-col justify-center items-center py-10'>
      <div className='absolute w-full h-full'>
        <ContactCanvas />
      </div>
      <div className=' w-[96%] md:w-[60%] xl:w-[40%] text-center bg-gradient-to-r from-[#069ef67e] to-[#111c6f82] p-8 rounded-2xl glowing-shadow z-10'>
        <h1 className='text-5xl lg:text-7xl text-white  '>
          C<span className=' light-blue-text font-semibold '>on</span>t
          <span className=' light-blue-text font-semibold '>act</span>
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='form-field-color py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='form-field-color py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
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
              className='form-field-color py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='hover-glowing-shadow-and-scale py-3 px-8 rounded-xl outline-none w-fit text-white font-bold'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>

      <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'></div>
    </section>
  )
}

export default Contact
