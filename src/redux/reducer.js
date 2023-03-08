import {ADD_TO_CART} from "./constant"

export const cartData = (data=[], action) => {
  // console.log("reducer called", action );
  // if(action.type === ADD_TO_CART) {
  //   return data
  // } else {
  //   return "no action called"
  // }
  switch(action.type) {
    case ADD_TO_CART:
  console.log("reducer called", action );
      return 1+2
    default:
      return "no action called"
    
  }
  
}