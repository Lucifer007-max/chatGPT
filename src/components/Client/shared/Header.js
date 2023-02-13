import {React , useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [userName , setUsername] = useState(localStorage.getItem('IB-uName'));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }
  return (
    <>
      <Navbar  expand="lg" className=''>
        <Container><Navbar.Brand to='/home' className='text-light'>IB ARTS AI</Navbar.Brand></Container>
      </Navbar>
      <div className='d-flex icons'>
        <label className="dropdown drop-down-btn">
          <div className="dd-button">
            <i className='d-block fa fa-user mx-2'></i>{userName}
          </div>
          <input type="checkbox" className="dd-input" id="test" />
          <ul className="dd-menu">
            <li className='d-flex align-items-center'><i className='fa fa-user d-block p-0 mx-2'></i>{userName}</li>
            <li className="divider"></li>
            <li className='d-flex align-items-center'><i className='fa fa-cog d-block p-0 mx-2'></i>Profile</li>
            <li className="divider"></li>
            <li className='d-flex align-items-center' onClick={handleLogout}><i className='fa fa-sign-out d-block p-0 mx-2'></i>Logout</li>
          </ul>
        </label>
        <i className="fa fa-bars nav--btn"></i>
      </div>
    </>
  )
}

export default Header

