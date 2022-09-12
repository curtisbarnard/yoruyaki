import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Splash from './pages/Splash';
import Admin from './pages/Admin';
import CustomerOrder from './pages/CustomerOrder';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/customerorder' element={<CustomerOrder />} />
        </Routes>
      </Router>
    </>
  );
}
