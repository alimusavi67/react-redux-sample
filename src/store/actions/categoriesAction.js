import {GET_CATEGORIES, CATEGORIES_ERROR} from '../types'
import axios from 'axios'

export const getCategories = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://api.thecatapi.com/v1/categories`)
        dispatch( {
            type: GET_CATEGORIES,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: CATEGORIES_ERROR,
            payload: console.log(e),
        })
    }

}