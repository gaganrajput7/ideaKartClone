import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './Home/Main'
import Signin from './SingIN/SingIn'
import Signup from './Singup/Singup'

export default function MinRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/singin' element={<Signin/>}/>
        <Route path='/singup' element={<Signup/>}/>
    </Routes>
    </>
  )
}
