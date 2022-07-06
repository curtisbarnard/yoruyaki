export default function MenuCard(props) {
  return (
    <li className='mx-2 my-4 p-2 shadow-md bg-indigo-50 rounded-md flex items-center h-24'>
      <img
        className='rounded-md h-20 w-20 shrink-0 shadow-sm'
        src={`images/${props.img}`}
        alt={props.description}
      />
      <div className='mx-2 grow'>
        <h3 className='text-xl font-bold'>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className='flex shrink-0 justify-center items-center h-16 w-16 text-3xl bg-white rounded-full'>
        0
      </div>
    </li>
  );
}
