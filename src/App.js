import { useEffect } from 'react'



import { checkUserSession } from './redux-store/user/user-actions'

import {useDispatch} from 'react-redux'

import Home from  './routes/Home'

import Navigation  from './routes/Navigation'

import Authentication  from './routes/Authentication'

import CheckOut from './routes/CheckOut'

import { Routes,Route } from 'react-router-dom'

import Shop from './routes/Shop'



const  App = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkUserSession())
  },[dispatch])

  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/shop/*' element={<Shop />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Route>
    </Routes>
  );
}

export default App;
