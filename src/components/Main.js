import {addToCart, removeFromCart, emptyCart} from '../redux/action'
import {productList} from '../redux/productAction'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch()
  let data = useSelector((state) => state.productData)
  console.log("data in main component", data);

  useEffect(() => {
    dispatch(productList())
  },[])
  return (
    <div>
      {/* <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      </div>
      <div>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from Cart</button>
      </div> */}
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty!! Cart</button>
      </div>
      {/* <div>
      <button onClick={() => dispatch(productList())}>Call Product List</button>
      </div> */}
      <div className="product-container">
        {
          data.map((item) => <div className="product-item">
        <img src={item.photo} alt="photoss" />
        <div>Name: {item.name}</div>
        <div>Color: {item.color}</div>
        <div>Price: {item.price}</div>
        <div>Category: {item.category}</div>
        <div>Brand: {item.brand}</div>
        <div>
          <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove to Cart</button>
        </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
