import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOpenOrders, reset } from '../features/order/orderSlice';
import ClickButton from '../components/ClickButton';

export default function CustomerOrder() {
  // setup redux variables
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get state from redux store for openOrders
  const { openOrders, isSuccess, isError, message } = useSelector((state) => state.order);

  useEffect(() => {
    const customerID = JSON.parse(localStorage.getItem('customer'))._id;
    dispatch(getOpenOrders(customerID));
  }, []);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isError, isSuccess]);

  // Handle button clicks
  function navOrderMore(event) {
    event.preventDefault();
    navigate('/menu');
  }

  // Create variables for rendering data
  let order, orderItemElements;

  if (openOrders.length > 0) {
    // Get order for display
    order = openOrders[0];

    // Create array of order items
    orderItemElements = order.orderItems.map((item) => {
      return (
        <li className='text-lg flex justify-between my-2' key={item.itemName}>
          <span>{item.itemName}</span>
          <span className='bg-white rounded-lg px-4'>{item.qty}</span>
        </li>
      );
    });
  }

  // JSX to be rendered
  return (
    <>
      <header className='grid grid-cols-3 p-8'>
        <h1 className=' text-5xl col-span-full font-semibold'>Yoruyaki</h1>
        <span className='text-4xl col-start-2 col-end-4'>夜焼き</span>
      </header>
      <section className='px-6 pb-8'>
        <h2 className='text-2xl'>Order #{order ? order._id.slice(-5) : ''}</h2>
        <ul className='w-full bg-indigo-50 rounded-lg py-2 px-6 my-6'>{orderItemElements}</ul>
        <p className='text-xl text-center'>Thanks for coming to this pop-up event!</p>
      </section>
      <section className='px-6 pb-8'>
        <h2 className='text-2xl mb-4'>Order Progress</h2>
        <div className='flex justify-between'>
          <div className='flex flex-col items-center shrink-0'>
            <div className='w-[50px] h-[50px] rounded-full bg-indigo-900 border-indigo-900 border-2'></div>
            <span>In queue</span>
          </div>
          <div className='self-center border-t-4 border-black border-dotted h-6 w-full'></div>
          <div className='flex flex-col items-center shrink-0'>
            <div
              className={`w-[50px] h-[50px] rounded-full ${
                order?.orderStatus === 'in progress' ? 'bg-indigo-900' : ''
              } border-indigo-900 border-2`}
            ></div>
            <span>On the grill</span>
          </div>
          <div className='self-center border-t-4 border-black border-dotted h-6 w-full'></div>
          <div className='flex flex-col items-center shrink-0'>
            <div className='w-[50px] h-[50px] rounded-full border-indigo-900 border-2'></div>
            <span>Completed</span>
          </div>
        </div>
      </section>
      <div className='flex justify-end px-6'>
        <ClickButton handleClick={navOrderMore} title='Order More' />
      </div>
    </>
  );
}
