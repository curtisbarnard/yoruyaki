import React, { useState } from 'react';
import MenuSections from '../components/MenuSections';
import ItemsList from '../components/ItemsList';

export default function Menu() {
  const [menuSection, setMenuSection] = useState('skewers');
  function updateMenuSection(id) {
    setMenuSection(id);
  }
  return (
    <>
      <MenuSections
        currentSection={menuSection}
        updateMenuSection={updateMenuSection}
      />
      <ItemsList currentSection={menuSection} />
    </>
  );
}
