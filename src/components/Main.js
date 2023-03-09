import {addToCart} from '../redux/action'
import { useDispatch } from 'react-redux';

function Main() {
  const dispatch = useDispatch()
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
      {/* <dir>
      <button onClick={() => dispatch(addToCart(product))}>Remove from Cart</button>
      </dir>
      <dir>
      <button onClick={() => dispatch(addToCart(product))}>Empty Cart</button>
      </dir> */}
    </div>
  );
}

export default Main;
