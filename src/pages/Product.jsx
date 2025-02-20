import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <h1>Product Page</h1>
    <p>
        Go to <Link to="/">home pages</Link>
      </p>
    </>
  )
}

export default Product