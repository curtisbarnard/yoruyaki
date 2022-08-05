import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  createOrder,
  addItem,
  removeItem,
  plusOne,
  minusOne,
} from '../features/order/orderSlice';

export default function MenuCard(props) {
  // Set redux variables
  const dispatch = useDispatch();

  // Getting state from redux store for order contents
  const { order, isError, isLoading, message } = useSelector(
    (state) => state.order
  );

  const qty = order.find((item) => item.itemName === props.itemName)?.qty;

  function removeFromOrder() {
    dispatch(removeItem(props.itemName));
  }

  function addOne(event) {
    console.log(event.target);
    if (event.target.innerText === '+') {
      dispatch(addItem({ itemName: props.itemName, qty: 1 }));
    } else {
      dispatch(plusOne({ itemName: props.itemName }));
    }
  }

  function removeOne() {
    dispatch(minusOne({ itemName: props.itemName }));
  }

  // TODO need to figure out storing images
  return (
    <li className='mx-2 my-4 p-2 shadow-md bg-indigo-50 rounded-md flex items-center h-24 relative'>
      {/* Greyscale when an item goes out of stock */}
      {props.stock < 1 && (
        <div className='absolute inset-0 bg-black/20 backdrop-grayscale rounded-md'></div>
      )}
      {/* <img
        className='rounded-md h-20 w-20 shrink-0 shadow-sm'
        src={`images/${props.img}`}
        alt={props.itemDesc}
      /> */}
      <div className='mx-2 grow'>
        <h3 className='text-xl font-bold'>{props.itemName}</h3>
        <p>{props.itemDesc}</p>
      </div>
      {/* Only show plus bubble when stock is greater than 0 */}
      {props.stock > 0 && (
        <button
          onClick={addOne}
          className={
            'flex shrink-0 justify-center items-center h-12 w-12 text-2xl bg-white rounded-full shadow-sm'
          }
        >
          {qty > 0 ? qty : '+'}
        </button>
      )}
      {/* Only show minus bubble when the QTY is greater than 0 */}
      {qty > 0 && (
        <button
          onClick={removeOne}
          className='absolute right-14 -bottom-3 flex justify-center items-center h-12 w-12 text-4xl bg-yellow-200 rounded-full shadow-md'
        >
          -
        </button>
      )}
    </li>
  );
}
