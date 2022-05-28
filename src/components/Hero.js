import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>
      <img
        src={require('../images/airbnb_project_image.jpg')}
        alt=""
        className='hero--image'
      />
      <h3 className='hero--title'>*NEW* Online Experience</h3>
      <h5 className='hero--description'>Join our interactive activities led by one of a kind host - All without leaving home</h5>
    </section>
  )
}

export default Hero