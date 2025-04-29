import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h3>[404]  Page Not Found</h3>
      <Link to="/" className='btn btn-primary'>Go to HomePage</Link>
    </div>
  )
}

export default PageNotFound
