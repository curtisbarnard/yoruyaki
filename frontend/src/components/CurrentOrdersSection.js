import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders, markOrderComplete, reset } from '../features/order/orderSlice';
import ClickButton from './ClickButton';

export default function CurrentOrdersSection() {
  // setup redux variables
  const dispatch = useDispatch();

  // get state from redux store for openOrders
  const { openOrders, isSuccess, isError, message } = useSelector((state) => state.order);

  // Get open orders on page load
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  // Cleanup
  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess]);

  // Async function to make an order complete
  function markComplete(event) {
    event.preventDefault();
    dispatch(markOrderComplete(event.target.parentElement.id));
  }

  // Creating the array of order cards
  const ordersArray = openOrders.map((order) => {
    const orderItems = order.orderItems.map((item) => {
      return (
        <li className='flex justify-between text-lg py-1 px-4' key={order._id + item.itemName}>
          <span>{item.itemName}</span>
          <span>{item.qty}</span>
        </li>
      );
    });
    return (
      <div
        className='grid grid-cols-2 content-start items-baseline bg-indigo-900
         rounded-lg shadow-md p-4'
        key={order._id}
        id={order._id}
      >
        <h3 className='text-2xl text-yellow-300 font-semibold'>#{order._id.slice(-8)}</h3>
        <span className='text-yellow-300'>{order.customerName}</span>
        <ul className='col-span-2 p-2 bg-indigo-50 rounded-md mt-2'>{orderItems}</ul>
        <ClickButton className='mt-4' title='Done' handleClick={markComplete} />
        <span className='text-yellow-300 text-xl self-end justify-self-end'>
          ${order.totalPrice}
        </span>
      </div>
    );
  });

  // JSX to be rendered
  return (
    <>
      <div className='grid grid-cols-4 gap-4 m-6'>{ordersArray}</div>
    </>
  );
}
