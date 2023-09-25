// Write your JS code here
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Products = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="con-products">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
      />
      <p>Products</p>
    </div>
  )
}

export default Products
