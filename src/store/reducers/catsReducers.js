import {GET_CATS, GET_CATS_WITH_CATEGORY_ID,GET_MORE_CATS_WITH_CATEGORY_ID} from '../types'

const initialState = {
    cats:[],
    categoryId: null,
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_CATS:
        return {
            ...state,
            cats:[...state.cats, ...action.payload],
            loading:false

        }
        case GET_CATS_WITH_CATEGORY_ID:
        return {
            ...state,
            categoryId: action.catId,
            cats:action.payload,
            loading:false

        }
        case GET_MORE_CATS_WITH_CATEGORY_ID:
        return {
            ...state,
            categoryId: action.catId,
            cats:[...state.cats, ...action.payload],
            loading:false

        }
        default: return state
    }

}