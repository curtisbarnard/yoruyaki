import Menu from './pages/Menu';
import Login from './components/Login';
import Register from './components/Register';
import Splash from './pages/Splash';
import Admin from './pages/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Splash />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}
