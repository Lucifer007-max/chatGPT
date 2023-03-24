import React from 'react'
import Footer from './shared/Footer'


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