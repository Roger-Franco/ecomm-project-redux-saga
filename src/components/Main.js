import {addToCart, removeFromCart, emptyCart} from '../redux/action'
import {productList} from '../redux/productAction'
import { useDispatch, useSelector } from 'react-redux';

function Main() {
  const dispatch = useDispatch()
  let data = useSelector((state) => state)
  console.log("data in main component", data);
  const product = {
    name: 'Iphone',
    category: 'mobile',
    price: 1000,
    color: 'red',
  }
  return (
    <div>
      <dir>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      </dir>
      <dir>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from Cart</button>
      </dir>
      <dir>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </dir>
      <dir>
      <button onClick={() => dispatch(productList())}>Call Product List</button>
      </dir>
    </div>
  );
}

export default Main;
