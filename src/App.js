import './App.css';
import Admin from './components/Admin/Admin';
import Client from './components/Client/Client';
import NotFound from './components/NotFound'
import {Routes, Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Client/pages/Register';
import Home from './components/Client/pages/Home';
import UserList from './components/Admin/pages/UserList';
import Registermanage from './components/Admin/pages/Registermanage';
import Profile from './components/Client/pages/Profile';
import Adminlogin from './components/Admin/pages/Adminlogin';
import Adminauth from './components/routes/Adminauth'
import ProtectedRoutes from './components/routes/ProtectedRoutes';
import Registercomplete from './components/Client/pages/Registercomplete'
function App() {
  return( 
  <Routes>

     {/* User Routing Start */}
      <Route path="/"  element={<Client />} />
      <Route path="/register"  element={<Register />} />
      <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
      <Route path="/profile/:id" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
      <Route path="/completeReg/:id" element={<Registercomplete />} />



      {/* Admin Routing Start */}
      <Route path='/administrator/login' element={<Adminlogin/>} />
      <Route path='/admin' element={ <Adminauth><Admin/></Adminauth>} />
      <Route path='/userList' element={<UserList/>} />
      <Route path='/register-management/' element={<Registermanage/>} />




      {/* 404 Page  */}
      <Route path='*' element={<NotFound/>} />
      {/* <ProtectedRoutes  path="/admin" component={Admin} auth={true}/> */}
  </Routes>
);
}

export default App;
