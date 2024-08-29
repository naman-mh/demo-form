import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/register/Login'
import SignUp from './components/register/SignUp'

import NavComp from './components/register/NavComp'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavComp/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App