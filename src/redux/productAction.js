import {PRODUCT_LIST} from "./constant"

export const productList = () => {
  const data = "hello, how are you?"
  console.log("action is called", data);
  return {
    type: PRODUCT_LIST,
    data: data
  }
}
