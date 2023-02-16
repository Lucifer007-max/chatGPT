import React from 'react'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Login from './pages/Login'
import { Route } from 'react-router-dom'
import Register from './pages/Register'
import { Home } from '@mui/icons-material'

function Client() {
  return (
    <>

    <div className="layout has-sidebar fixed-sidebar fixed-header">
        <div className="s-layout">
        <div className="s-layout__sidebar">
            {/* <Head/> */}
        </div>
          <main className="s-layout__content">
              {/* <Home /> */}
          </main>
        </div>
        <Footer/>
      </div>
    {/* <Login/> */}
    </>
  )
}

export default Client