import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, reset } from '../../features/order/orderSlice';
import OrderCard from './OrderCard';

export default function PastOrdersSection() {
  // setup redux variables
  const dispatch = useDispatch();

  // get state from redux store for openOrders
  const { completedOrders, isSuccess, isError, message } = useSelector((state) => state.order);

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

  // Creating the array of order cards
  const ordersArray = completedOrders.map((order) => {
    return (
      <OrderCard
        id={order._id}
        customerName={order.customerName}
        totalPrice={order.totalPrice}
        orderItems={order.orderItems}
        orderStatus={order.orderStatus}
        key={order._id}
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
