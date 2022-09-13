import { useSelector } from 'react-redux';
import OrderCard from './OrderCard';

export default function PastOrdersSection() {
  // get state from redux store for openOrders
  const { completedOrders } = useSelector((state) => state.order);
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
