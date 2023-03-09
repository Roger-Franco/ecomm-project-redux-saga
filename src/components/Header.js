import React from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {
  const result = useSelector((state) => state.cartData)
  console.log("data in header", result);
  return (
    <div className='header'>
    <div className="cart-div">
      <span>{result.length}</span>
      <img src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png" alt="cart" />
      </div>  
    </div>
  )
}
