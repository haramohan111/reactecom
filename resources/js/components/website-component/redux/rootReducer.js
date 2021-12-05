import { combineReducers } from 'redux'

import categoryReducer from './category/categoryReducer'
import newProductReducer from './products/NewproductReducers'
import categoryPageReducer from './categorypage/CategoryPageReducer'

const rootReducer = combineReducers({
  category: categoryReducer,
  newproducts:newProductReducer,
  categorypage:categoryPageReducer
})

export default rootReducer