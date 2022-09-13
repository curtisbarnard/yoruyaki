import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders, markOrderComplete, reset } from '../features/order/orderSlice';
import ClickButton from './ClickButton';

export default function CurrentOrdersSection() {
  // setup redux variables
  const dispatch = useDispatch();

  // get state from redux store for openOrders
  const { openOrders, isSuccess, isError, message } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getAllOrders());
    if (isSuccess) {
      dispatch(reset());
    }
  }, []);

  // Cleanup
  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess]);

  //TODO - Get customer name for order
  //TODO - Add total price to card
  //TODO - add button to mark order complete

  function markComplete(event) {
    event.preventDefault();
    dispatch(markOrderComplete(event.target.parentElement.id));
  }

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
        <span className='text-yellow-300'>Bobby Joe</span>
        <ul className='col-span-2 p-2 bg-indigo-50 rounded-md mt-2'>{orderItems}</ul>
        <ClickButton className='mt-4' title='Done' handleClick={markComplete} />
      </div>
    );
  });
  return (
    <>
      <div className='grid grid-cols-4 gap-4 m-6'>{ordersArray}</div>
    </>
  );
}
