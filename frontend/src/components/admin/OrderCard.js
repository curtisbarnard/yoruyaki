import ClickButton from '../ClickButton';

export default function OrderCard(props) {
  const orderItems = props.orderItems.map((item) => {
    return (
      <li className='flex justify-between text-lg py-1 px-4' key={props.id + item.itemName}>
        <span>{item.itemName}</span>
        <span>{item.qty}</span>
      </li>
    );
  });
  return (
    <div
      className='grid grid-cols-2 content-start items-baseline bg-indigo-900
       rounded-lg shadow-md p-4'
      id={props.id}
    >
      <h3 className='text-2xl text-yellow-300 font-semibold'>#{props.id.slice(-5)}</h3>
      <span className='text-yellow-300'>{props.customerName}</span>
      <ul className='col-span-2 p-2 bg-indigo-50 rounded-md mt-2'>{orderItems}</ul>
      {/* Conditional below allows card to be used on the past orders page */}
      {props.orderStatus !== 'completed' && (
        <ClickButton className='mt-4' title='Done' handleClick={props.handleClick} />
      )}
      <span className='text-yellow-300 text-xl col-start-2 self-end justify-self-end mt-4'>
        ${props.totalPrice}
      </span>
    </div>
  );
}
