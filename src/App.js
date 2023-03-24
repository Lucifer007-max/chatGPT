import './App.css';
import Admin from './components/Admin/Admin';
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
import Login from './components/Client/pages/Login';
import Chat from './components/Client/pages/Chat';
function App() {
  return( 
  <Routes>

     {/* User Routing Start */}
      <Route path="/"  element={<Login />} />
      <Route path="/register"  element={<Register />} />
      <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
      <Route path="/profile/:id" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
      <Route path="/completeReg/:id" element={<Registercomplete />} />
      <Route path="/chat/:id" element={<Chat />} />



      {/* Admin Routing Start */}
      <Route path='/administrator/login' element={<Adminlogin/>} />
      <Route path='/admin' element={ <Adminauth><Admin/></Adminauth>} />
      <Route path='/userList' element={<Adminauth><UserList/></Adminauth>} />
      <Route path='/register-management' element={<Adminauth><Registermanage/></Adminauth>} />




      {/* 404 Page  */}
      <Route path='/note' element={<NotFound/>} />
      {/* <ProtectedRoutes  path="/admin" component={Admin} auth={true}/> */}
  </Routes>
);
}

export default App;
