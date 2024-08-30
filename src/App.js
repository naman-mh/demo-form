import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/register/Login'
import SignUp from './components/register/SignUp'

import NavComp from './components/register/NavComp'
import ForgetPassword from './components/register/ForgetPassword'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavComp/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/ForgetPassword'element={<ForgetPassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App