import ToggleButtons from '../components/ToggleButtons';
import InventorySection from '../components/InventorySection';

export default function Admin() {
  const sections = ['Inventory', 'Current Orders', 'Past Orders'];

  return (
    <>
      <h1>Yoruyaki</h1>
      <h2>Admin Panel</h2>
      <div className='mx-auto max-w-md'>
        <ToggleButtons sections={sections} />
      </div>

      <div className='relative grid grid-cols-12 px-10 py-2 text-2xl font-semibold'>
        <div></div>
        <span className='text-center'>QTY</span>
        <span className='col-span-2'>Item Name</span>
        <span className='col-span-6'>Description</span>
        <span className='col-span-2'>Category</span>
      </div>
      <InventorySection />
    </>
  );
}
