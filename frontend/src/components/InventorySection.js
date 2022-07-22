import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getInventory } from '../features/inventory/inventorySlice';

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

  // TODO sort inventory items alphabetically and by class
  // Map inventory items to components list
  const inventoryItems = inventory.map((item) => {
    return (
      <form className='w-full flex justify-around'>
        <input
          type='number'
          value={item.stock}
          className={`${inputStyling} w-[75px]`}
        />
        <input
          type='text'
          value={item.itemName}
          className={`${inputStyling} font-semibold`}
        />
        <input
          type='text'
          value={item.itemDesc}
          className={`${inputStyling} w-1/3`}
        />
        <input
          type='text'
          value={item.category}
          className={`${inputStyling} `}
        />
      </form>
    );
  });
  // JSX to Render
  return <>{inventoryItems}</>;
}
