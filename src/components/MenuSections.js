import React, { useState } from 'react';
import SectionButton from './SectionButton';
export default function MenuSections(props) {
  const categories = ['Otsumami', 'Skewers', 'Drinks'];
  const catButtons = categories.map((element) => {
    return (
      <SectionButton
        title={element}
        currentSection={props.currentSection}
        key={element}
        updateMenuSection={props.updateMenuSection}
      />
    );
  });

  return (
    <header className='w-full h-20 px-2 flex items-center bg-indigo-900'>
      <nav className='text-xl flex grow bg-yellow-50 rounded-full shadow-md'>
        {catButtons}
      </nav>
    </header>
  );
}
