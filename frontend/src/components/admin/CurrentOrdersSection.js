import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders, markOrderComplete, reset } from '../../features/order/orderSlice';
import OrderCard from './OrderCard';

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
    if (isError) {
      console.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess, isError]);

  // Async function to make an order complete
  function markComplete(event) {
    event.preventDefault();
    dispatch(markOrderComplete(event.target.parentElement.id));
  }

  // Creating the array of order cards
  const ordersArray = openOrders.map((order) => {
    return (
      <OrderCard
        id={order._id}
        key={order._id}
        customerName={order.customerName}
        totalPrice={order.totalPrice}
        orderItems={order.orderItems}
        orderStatus={order.orderStatus}
        handleClick={markComplete}
      />
    );
  });

  // JSX to be rendered
  return (
    <>
      <div className='grid grid-cols-4 gap-4 m-6'>{ordersArray}</div>
    </>
  );
}
