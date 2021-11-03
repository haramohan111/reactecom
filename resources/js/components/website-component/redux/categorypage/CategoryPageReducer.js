import {FETCH_CATEGORYPAGE_REQUEST,
    FETCH_CATEGORYPAGE_SUCCESS,
    FETCH_CATEGORYPAGE_FAILURE} from 'CategoryPageTypes'

const initialState = {
        loading: false,
        categoryPage: [],
        error: ''
 }

 const reducer = (state = initialState, action) => {
    // console.log(action);
     switch (action.type) {
       case FETCH_CATEGORYPAGE_REQUEST:
         return {
           ...state,
           loading: true
         }
       case FETCH_CATEGORYPAGE_SUCCESS:
         return {
           loading: false,
           categoryPage: action.payload,
           error: ''
         }
       case FETCH_CATEGORYPAGE_FAILURE:
         return {
           loading: false,
           categoryPage: [],
           error: action.payload
         }
       default: return state
     }
   }
   
   export default reducer