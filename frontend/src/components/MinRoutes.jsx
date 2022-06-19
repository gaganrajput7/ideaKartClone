import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './footerPages/pages/About'
import Search from "./footerPages/pages/Search"
import {Contact} from "./footerPages/pages/Contact"
import Main from './Home/Main'
import Signin from './SingIN/SingIn'
import Signup from './Singup/Singup'
import Productdetail from './Home/Productdetail'

export default function MinRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/singin' element={<Signin/>}/>
        <Route path='/singup' element={<Signup/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/search' element={<Search/>}/>

        <Route path='/productdetail' element={<Productdetail/>}/>
    </Routes>
    </>
  )
}
