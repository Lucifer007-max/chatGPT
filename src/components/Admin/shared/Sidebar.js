import React from 'react'
import '../../Admin/assets/admin.css';
import {Link , NavLink} from 'react-router-dom'
function Sidebar() {
  return (
    <div className='side'>
        <div className="s-sidebar__trigger" >
        <h2 className='text-light logo--txt'>CHAT GPT AI</h2>
            <i className="fa fa-bars">
            </i>
        </div>
        <div>
            <nav className="s-sidebar__nav">
            <ul>
                <li>
                    <NavLink className="s-sidebar__nav-link" to="/admin">
                        <i className="fa fa-home"></i>
                        <em>
                            Dashboard
                        </em>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="s-sidebar__nav-link" to='/userList'>
                    <i className="fa fa-user"></i><em>All Users</em>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="s-sidebar__nav-link" to='/register-management'>
                        <i className="fa fa-cog"></i><em>Registration Management</em>
                    </NavLink>
                </li>
            </ul>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar