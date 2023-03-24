import React from 'react'
import '../../Admin/assets/admin.css';
import {NavLink , useNavigate} from 'react-router-dom';
function Sidebar() {
    const navigate = useNavigate();
const handleLogout = () =>{
    localStorage.clear('token');
    navigate('/administrator/login');
}
  return (
    <div className='side'>
        <div className="s-sidebar__trigger" >
        <h2 className='text-light logo--txt'>IB AI</h2>
            <i className="fa fa-bars icon-nav"></i>
            <button onClick={handleLogout} className='btn btn-light btn-logout mx-3'><i className='fas fa-logout'></i>Logout</button>
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
                    <i className="fa fa-user-plus"></i><em>All Users</em>
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