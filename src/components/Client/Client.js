import React from 'react'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Login from './pages/Login'
import { Route } from 'react-router-dom'
import Register from './pages/Register'

function Client() {
  return (
    <>
    
    {/* <Header /> */}
    <Login/>
    {/* <Route path='/register' component={Register} /> */}
    {/* <Footer /> */}
    </>
  )
}

export default Client