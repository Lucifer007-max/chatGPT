import React from 'react';
import Footer from './shared/Footer'
import Header from './shared/Header'
import Dashboard from './pages/Dashboard'
import Sidebar from './shared/Sidebar';
import '../Admin/assets/admin.css'
function Admin() {
  return (
    <div className="layout has-sidebar fixed-sidebar fixed-header">
          {/* <Header /> */}
      <div className="s-layout">
      <div className="s-layout__sidebar">
          <Sidebar/>
      </div>
        <main className="s-layout__content">
              <Dashboard />
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Admin