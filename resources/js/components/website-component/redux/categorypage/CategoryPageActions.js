import axios from 'axios'

import {FETCH_CATEGORYPAGE_REQUEST,
        FETCH_CATEGORYPAGE_SUCCESS,
        FETCH_CATEGORYPAGE_FAILURE} from './CategoryPageTypes'

export const fetchCategoryPage = () =>{
    return (dispatch) =>{
        axios
          .get('categorypage')
          .then(response =>{
              const categoryPage = response.data
              dispatch(fetchCategoryPageSuccess(categoryPage.result))
          })
          .catch(error =>{
              dispatch(fetchCategoryPageFailure(error.message))
          })
    }
} 

export const fetchCategoryPageRequest = () => {
    return {
        type:FETCH_CATEGORYPAGE_REQUEST
    }
}

export const fetchCategoryPageSuccess = category =>{
    return {
        type:FETCH_CATEGORYPAGE_SUCCESS,
        payload:category
    }
}

export const fetchCategoryPageFailure = error =>{
    return {
        type:FETCH_CATEGORYPAGE_FAILURE,
        payload:error
    }
}