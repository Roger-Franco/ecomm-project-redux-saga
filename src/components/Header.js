import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';

export const Header = () => {
  const result = useSelector((state) => state.cartData)
  const dispatch = useDispatch()
  console.log("data in header", result);
  return (
    <div className='header'>
      <Link to="/"><h1 className='logo'>E-Comm</h1></Link>
      <div className='search-box'>
        <input onChange={(e) => dispatch(productSearch(e.target.value))} type="text" placeholder="Search Product" />
      </div>
      <Link to="/cart">
    <div className="cart-div">
      <span>{result.length}</span>
      <img src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png" alt="cart" />
      </div>  
      </Link>
    </div>
  )
}
