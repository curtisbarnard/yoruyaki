import React, { useState } from 'react';
import MenuSections from './components/MenuSections';
import ItemsList from './components/ItemsList';
function App() {
  const [menuSection, setMenuSection] = useState('skewers');
  function updateMenuSection(id) {
    setMenuSection(id);
  }
  return (
    <div className='App'>
      <MenuSections
        currentSection={menuSection}
        updateMenuSection={updateMenuSection}
      />
      <ItemsList currentSection={menuSection} />
    </div>
  );
}

export default App;
