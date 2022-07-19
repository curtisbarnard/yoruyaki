export default function Button(props) {
  return (
    <button className='font-bold my-4 px-3 py-1 rounded-full bg-yellow-300 shadow-sm'>
      {props.title}
    </button>
  );
}
