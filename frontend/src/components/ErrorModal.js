import ClickButton from './ClickButton';
export default function ErrorModal(props) {
  return (
    <>
      <div className='fixed inset-y-1/4 inset-x-[5%] bg-white border-2 border-yellow-300 rounded-3xl shadow-lg p-6'>
        <h2 className='text-xl'>Uh-oh something went wrong...</h2>
        <p>{props.errorMessage}</p>
        <ClickButton handleClick={props.handleClick} title='Close' />
      </div>
    </>
  );
}
