import {combineReducers} from 'redux'

import { userReducer } from './user'

import { categoriesReducer } from './categories'

import { cartReducer } from './cart'

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})