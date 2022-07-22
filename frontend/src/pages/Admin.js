import InventoryForm from '../components/InventoryForm';
import ToggleButtons from '../components/ToggleButtons';
import InventorySection from '../components/InventorySection';

export default function Admin() {
  const sections = ['Inventory', 'Current Orders', 'Past Orders'];

  return (
    <>
      <h1>Yoruyaki</h1>
      <h2>Admin Panel</h2>
      <ToggleButtons sections={sections} />
      <div className='flex justify-around py-2 text-2xl font-semibold'>
        <span>QTY</span>
        <span>Item Name</span>
        <span className='w-1/4'>Description</span>
        <span>Category</span>
      </div>
      <InventorySection />
    </>
  );
}
