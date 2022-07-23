import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getInventory } from '../features/inventory/inventorySlice';
import Loading from './Loading';

export default function InventorySection() {
  // Redux variables
  const dispatch = useDispatch();

  // Get state from redux store for inventory
  const { inventory, isError, isLoading, message } = useSelector(
    (state) => state.inventory
  );

  // Deal with side effects
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getInventory());
  }, [isError, message, dispatch]);

  // input styling
  const inputStyling =
    'px-2 py-2 text-lg border-b-2 border-indigo-100 focus:outline-8 focus:outline-indigo-400';

  if (isLoading) {
    return <Loading />;
  }

  // Sort inventory items alphabetically and by category
  const sortedInventory = [...inventory].sort((a, b) => {
    if (a.category === b.category) {
      alphaSort(a, b);
    }
    return a.category.charCodeAt(0) - b.category.charCodeAt(0);
  });

  function alphaSort(a, b) {
    return a.itemName.charCodeAt(0) - b.itemName.charCodeAt(0);
  }

  // Map inventory items to components list
  const inventoryItems = sortedInventory.map((item) => {
    return (
      <div key={item._id} className='w-full grid grid-cols-12 px-10'>
        <button key={`edit ${item._id}`}>Edit</button>
        <div
          className={`${inputStyling} text-center`}
          key={item._id + item.stock}
        >
          {item.stock}
        </div>
        <div
          className={`${inputStyling} font-semibold col-span-2`}
          key={item._id + item.itemName}
        >
          {item.itemName}
        </div>
        <div
          className={`${inputStyling} col-span-6`}
          key={item._id + item.itemDesc}
        >
          {item.itemDesc}
        </div>
        <div
          className={`${inputStyling} col-span-2`}
          key={item._id + item.category}
        >
          {item.category}
        </div>
      </div>
    );
  });
  // JSX to Render
  return <>{inventoryItems}</>;
}
