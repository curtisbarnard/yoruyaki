import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder, reset } from '../features/order/orderSlice';
import shoppingCart from '../images/shopping-cart.svg';
import ClickButton from './ClickButton';

export default function OrderCart() {
  // Setup REDUX variables
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for showing the shopping cart
  const [viewCart, setViewCart] = useState(false);

  // Getting state from redux store for order contents
  const { order, openOrders, isSuccess, isError, message } = useSelector((state) => state.order);

  // Array of order items that will be displayed
  const orderList = order.map((item) => {
    return (
      <li className='text-lg flex justify-between my-2' key={item.itemName}>
        <span>{item.itemName}</span>
        <span className='bg-white rounded-lg px-4'>{item.qty}</span>
      </li>
    );
  });

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess) {
      navigate('/customerorder');
      dispatch(reset());
    }
  }, [isError, isSuccess]);

  // Handle shopping cart button clicks
  function toggleCart() {
    setViewCart((state) => !state);
  }

  function submitOrder(event) {
    event.preventDefault();
    const orderContents = {
      customerId: JSON.parse(localStorage.getItem('customer'))._id,
      orderItems: order,
      orderStatus: 'open',
      totalPrice: 49.99,
    };
    dispatch(createOrder(orderContents));
  }

  // JSX to be rendered
  return (
    <div
      className={`w-full rounded-t-3xl px-3 pt-14 pb-2 bg-indigo-900 fixed ${
        viewCart ? 'bottom-0' : 'top-[calc(100%-50px)]'
      }`}
    >
      <button
        onClick={toggleCart}
        className='w-[75px] h-[75px] bg-white border-4 border-yellow-300 rounded-full absolute -top-8 left-1/2 -translate-x-1/2 flex justify-center items-center'
      >
        <img src={shoppingCart} alt='' />
      </button>
      <div className='bg-white rounded-xl w-full px-3 py-2 flex flex-col justify-between'>
        <h2 className='text-2xl'>Order Summary</h2>
        {order.length > 0 && (
          <ul className='w-full bg-indigo-50 rounded-lg py-2 px-6 my-4'>{orderList}</ul>
        )}
        <ClickButton handleClick={submitOrder} className='self-end' title='Submit' />
      </div>
    </div>
  );
}
