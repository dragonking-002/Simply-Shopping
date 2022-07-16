import {compose,createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import logger from 'redux-logger'

import { rootReducer } from './root-reducer'




const middlewares = [process.env.NODE_ENV !== 'production' && logger,thunk].filter(Boolean)

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer,undefined,composedEnhancers)
