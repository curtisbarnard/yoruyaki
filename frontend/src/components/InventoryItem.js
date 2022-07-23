export default function InventoryItem(props) {
  // input styling
  const inputStyling =
    'px-2 py-2 text-lg border-b-2 border-indigo-100 focus:outline-8 focus:outline-indigo-400';

  // JSX to be rendered
  return (
    <div className='w-full grid grid-cols-12 px-10'>
      <button>Edit</button>
      <div className={`${inputStyling} text-center`}>{props.stock}</div>
      <div className={`${inputStyling} font-semibold col-span-2`}>
        {props.itemName}
      </div>
      <div className={`${inputStyling} col-span-6`}>{props.itemDesc}</div>
      <div className={`${inputStyling} col-span-2`}>{props.category}</div>
    </div>
  );
}
