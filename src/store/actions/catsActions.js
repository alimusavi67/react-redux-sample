import {GET_CATS, CATS_ERROR, GET_CATS_WITH_CATEGORY_ID, GET_MORE_CATS_WITH_CATEGORY_ID} from '../types'
import axios from 'axios'

export const getCats = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
        dispatch( {
            type: GET_CATS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: CATS_ERROR,
            payload: console.log(e),
        })
    }

}

export const getCatsWithCategoryId = (id) => async dispatch => {
    
    try{
        const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${id}`)
        dispatch( {
            type: GET_CATS_WITH_CATEGORY_ID,
            payload: res.data,
            catId: id
        })
    }
    catch(e){
        dispatch( {
            type: CATS_ERROR,
            payload: console.log(e),
        })
    }

}
export const getMoreCatsWithCategoryId = (id) => async dispatch => {
    
    try{
        const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${id}`)
        dispatch( {
            type: GET_MORE_CATS_WITH_CATEGORY_ID,
            payload: res.data,
            catId: id
        })
    }
    catch(e){
        dispatch( {
            type: CATS_ERROR,
            payload: console.log(e),
        })
    }

}
