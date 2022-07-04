import Home from  './routes/Home'

import Navigation  from './routes/Navigation'

import { Routes,Route } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      Shop Page
    </div>
  )
}

const SignIn = () => {
  return (
    <div>
      SignIn Page
    </div>
  )
}


const  App = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Route>
    </Routes>
  );
}

export default App;
