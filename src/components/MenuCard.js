import React, { useState } from 'react';
export default function MenuCard(props) {
  const [qty, setQty] = useState(0);

  function handleClick() {
    setQty((prevQty) => prevQty + 1);
  }
  return (
    <li className='mx-2 my-4 p-2 shadow-md bg-indigo-50 rounded-md flex items-center h-24 relative'>
      {/* Greyscale when an item goes out of stock */}
      {props.stock < 1 && (
        <div className='absolute inset-0 bg-black/20 backdrop-grayscale rounded-md'></div>
      )}
      <img
        className='rounded-md h-20 w-20 shrink-0 shadow-sm'
        src={`images/${props.img}`}
        alt={props.description}
      />
      <div className='mx-2 grow'>
        <h3 className='text-xl font-bold'>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div
        onClick={handleClick}
        className='flex shrink-0 justify-center items-center h-12 w-12 text-2xl bg-white rounded-full shadow-sm'
      >
        {qty > 0 ? qty : '+'}
      </div>
    </li>
  );
}

// TODO block clicking to add QTY for out of stock items
// TODO + instead of 0 for original display value
