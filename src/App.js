import './App.css';
import Admin from './components/Admin/Admin';
import Client from './components/Client/Client';
import NotFound from './components/NotFound'
import {Routes, Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Client/pages/Register';
import Registercomplete from './components/Client/pages/Registercomplete';
import Home from './components/Client/pages/Home';
// import ProtectedRoutes from './components/routes/ProtectedRoutes';

function App() {
  return( 
  <Routes>
      <Route path="/"  element={<Client />} />
      <Route path="/register"  element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path='*' element={<NotFound/>} />
      {/* <ProtectedRoutes  path="/admin" component={Admin} auth={true}/> */}
  </Routes>
);
}

export default App;
