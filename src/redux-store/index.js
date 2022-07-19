import {compose,createStore,applyMiddleware} from 'redux'

import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './rootSaga'



import logger from 'redux-logger'

import { rootReducer } from './rootReducer'

const sagaMiddleware = createSagaMiddleware(rootSaga)


const middlewares = [process.env.NODE_ENV !== 'production' && logger,sagaMiddleware].filter(Boolean)

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer,undefined,composedEnhancers)

sagaMiddleware.run(rootSaga)