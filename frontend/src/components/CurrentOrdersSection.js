import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllOrders, reset } from '../features/order/orderSlice';

export default function CurrentOrdersSection() {
  // setup redux variables
  const dispatch = useDispatch();

  // get state from redux store for openOrders
  const { openOrders, isSuccess, isError, message } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const ordersArray = openOrders.map((order) => {
    const orderItems = order.orderItems.map((item) => {
      return (
        <li className='flex justify-between' key={item.itemName}>
          <span>{item.itemName}</span>
          <span>{item.qty}</span>
        </li>
      );
    });
    return (
      <div
        className='grid grid-cols-2 items-baseline bg-slate-300 rounded-md shadow-md p-4'
        key={order._id}
      >
        <h3 className='text-2xl'>#{order._id.slice(-8)}</h3>
        <span className=''>Bobby Joe</span>
        <ul className='col-span-2 pr-6'>{orderItems}</ul>
      </div>
    );
  });
  return (
    <>
      <div className='grid grid-cols-4 gap-4 m-6'>{ordersArray}</div>
    </>
  );
}
