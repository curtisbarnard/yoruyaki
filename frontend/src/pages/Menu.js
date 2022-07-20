import React, { useState } from 'react';
import MenuSections from '../components/MenuSections';
import ItemsList from '../components/ItemsList';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

export default function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  const [menuSection, setMenuSection] = useState('skewers');
  function updateMenuSection(id) {
    setMenuSection(id);
  }
  return (
    <>
      {/* Show logout button if user is logged in */}
      {customer && (
        <button
          onClick={handleLogout}
          className='font-bold my-4 px-3 py-1 rounded-full bg-yellow-300 shadow-sm'
        >
          Logout
        </button>
      )}
      <MenuSections
        currentSection={menuSection}
        updateMenuSection={updateMenuSection}
      />
      <ItemsList currentSection={menuSection} />
    </>
  );
}
