import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container'>
      <h1 className='text-2xl mb-4'>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, laboriosam officiis commodi, numquam sed ea explicabo asperiores corrupti laudantium dolorum at ex dolore, voluptatum nihil! Delectus incidunt possimus molestias ipsa corporis harum eos labore odit!</p>
      <Link to="/" className='btn btn-primary'>Go to HomePage</Link>
    </div>
  )
}

export default About
