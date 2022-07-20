import Menu from './pages/Menu';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </Router>
    </>
  );
}
