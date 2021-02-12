import { combineReducers } from 'redux'
import categoriesReducers from './categoriesReducers'
import catsReducers from './catsReducers'

export default combineReducers({
  categories: categoriesReducers,
  cats: catsReducers
})