import React, { useState } from 'react';
export default function MenuSections() {
  const [menuSection, setMenuSection] = useState('otsumami');
  function otsumamiClick() {
    setMenuSection('otsumami');
  }
  function skewersClick() {
    setMenuSection('skewers');
  }
  function drinksClick() {
    setMenuSection('drinks');
  }
  return (
    <header className='w-full h-20 px-2 flex items-center bg-indigo-900'>
      <nav className='text-xl flex grow bg-yellow-50 rounded-full shadow-md'>
        <button
          onClick={otsumamiClick}
          className={`grow ${menuSection === 'otsumami' ? 'menu-section' : ''}`}
        >
          Otsumami
        </button>
        <button
          onClick={skewersClick}
          className={`grow ${menuSection === 'skewers' ? 'menu-section' : ''}`}
        >
          Skewers
        </button>
        <button
          onClick={drinksClick}
          className={`grow ${menuSection === 'drinks' ? 'menu-section' : ''}`}
        >
          Drinks
        </button>
      </nav>
    </header>
  );
}
