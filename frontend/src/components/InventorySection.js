import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getInventory } from '../features/inventory/inventorySlice';
import Loading from './Loading';
import InventoryItem from './InventoryItem';

export default function InventorySection() {
  // Redux variables
  const dispatch = useDispatch();

  // Get state from redux store
  const { inventory, isLoading } = useSelector((state) => state.inventory);

  // Grab inventory from database
  useEffect(() => {
    dispatch(getInventory());
  }, []);

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
    return <InventoryItem key={item._id} {...item} />;
  });
  // JSX to Render
  return <ul>{inventoryItems}</ul>;
}
