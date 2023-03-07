import {createStore} from 'redux'

const dummyReducer = () => { // so ora funcionar momentaneamente
  return 100
}
const store = createStore(dummyReducer)

export default store;