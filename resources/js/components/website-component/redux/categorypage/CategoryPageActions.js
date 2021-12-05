import axios from 'axios'

import {FETCH_CATEGORYPAGE_REQUEST,
        FETCH_CATEGORYPAGE_SUCCESS,
        FETCH_CATEGORYPAGE_FAILURE} from './CategoryPageTypes'

function listCategory (id) {
    return function (dispatch){
       dispatch({
           type:FETCH_CATEGORYPAGE_REQUEST
       })

       axios.get('categorypage/'+id+'/'+id+'/'+id).then(response =>{
           dispatch({
               type:FETCH_CATEGORYPAGE_SUCCESS,
               payload:response.data
           })
       }).catch(error =>{
           dispatch({
             type:FETCH_CATEGORYPAGE_FAILURE,
             payload:error.response
           })
       })
    }
}

export {listCategory};