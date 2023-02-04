import './App.css';
import Admin from './components/Admin/Admin';
import Client from './components/Client/Client';
import NotFound from './components/NotFound'
import {Routes, Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Client/pages/Register';
import Registercomplete from './components/Client/pages/Registercomplete';
import Home from './components/Client/pages/Home';
import UserList from './components/Admin/pages/UserList';
import Registermanage from './components/Admin/pages/Registermanage';
// import ProtectedRoutes from './components/routes/ProtectedRoutes';
// import Admin from './components/Admin/Admin';

function App() {
  return( 
  <Routes>

     {/* User Routing Start */}
      <Route path="/"  element={<Client />} />
      <Route path="/register"  element={<Register />} />
      <Route path="/home" element={<Home />} />




      {/* Admin Routing Start */}
      
      <Route path='/admin' element={<Admin/>} />
      <Route path='/userList' element={<UserList/>} />
      <Route path='/register-management' element={<Registermanage/>} />




      {/* 404 Page  */}
      <Route path='*' element={<NotFound/>} />
      {/* <ProtectedRoutes  path="/admin" component={Admin} auth={true}/> */}
  </Routes>
);
}

export default App;
