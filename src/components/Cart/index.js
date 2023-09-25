// Write your JS code here
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const Cart = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="cart-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="img"
      />
      <p>Cart</p>
    </div>
  )
}

export default Cart
