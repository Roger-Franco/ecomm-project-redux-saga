import {ADD_TO_CART} from "./constant"

export const cartData = (data=[], action) => {
  console.log("reducer called", action );
  if(action.type === ADD_TO_CART) {
    return data
  } else {
    return "no action called"
  }
}