import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../features/order/orderSlice';
import ToggleButtons from '../components/ToggleButtons';
import InventorySection from '../components/admin/InventorySection';
import CurrentOrdersSection from '../components/admin/CurrentOrdersSection';
import PastOrdersSection from '../components/admin/PastOrdersSection';
import ClickButton from '../components/ClickButton';

export default function Admin() {
  // Getting order data from DB and putting into Redux state
  // setup redux variables
  const dispatch = useDispatch();

  const { isSuccess, isError, message } = useSelector((state) => state.order);

  // Cleanup
  useEffect(() => {
    if (isError) {
      console.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  const sections = ['Inventory', 'Current Orders', 'Past Orders'];
  // Initialize component state
  const [addItemForm, setAddItemForm] = useState(false);
  const [currentSection, setCurrentSection] = useState('inventory');

  // Handling button clicks
  function toggleAddItemForm(event) {
    event.preventDefault();
    setAddItemForm((prevState) => !prevState);
  }

  function updateSection(id) {
    setCurrentSection(id);
  }
  // JSX to be rendered
  return (
    <>
      <header className='bg-indigo-900 grid grid-cols-3 px-6 h-16 items-center'>
        <h1 className='text-yellow-300 text-4xl font-semibold'>Yoruyaki</h1>
        <h2 className='text-yellow-300 text-2xl font-bold  justify-self-center'>Admin Panel</h2>
        {currentSection === 'inventory' && (
          <ClickButton
            className='justify-self-end'
            handleClick={toggleAddItemForm}
            title='Add Item'
          />
        )}
      </header>
      <div className='mx-auto max-w-md py-4'>
        <ToggleButtons
          sections={sections}
          currentSection={currentSection}
          updateSection={updateSection}
        />
      </div>

      {currentSection === 'inventory' && (
        <section>
          <div className='relative grid grid-cols-12 px-10 py-2 text-2xl font-semibold'>
            <div></div>
            <span className='text-center'>QTY</span>
            <span className='col-span-2'>Item Name</span>
            <span>Price</span>
            <span className='col-span-5'>Description</span>
            <span className='col-span-2'>Category</span>
          </div>
          <InventorySection addItemForm={addItemForm} setAddItemForm={setAddItemForm} />
        </section>
      )}
      {currentSection === 'current orders' && (
        <section>
          <CurrentOrdersSection />
        </section>
      )}
      {currentSection === 'past orders' && (
        <section>
          <PastOrdersSection />
        </section>
      )}
    </>
  );
}
