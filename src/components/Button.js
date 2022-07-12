export default function Button(props) {
  return (
    <button className='font-bold m-1 px-3 py-1 rounded-full bg-yellow-300 shadow-sm'>
      {props.title}
    </button>
  );
}
