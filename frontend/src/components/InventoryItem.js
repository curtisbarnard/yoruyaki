export default function InventoryItem(props) {
  // input styling
  const inputStyling =
    'px-2 py-2 text-lg border-b-2 border-indigo-100 focus:outline-8 focus:outline-indigo-400';

  // JSX to be rendered
  return (
    <div key={props._id} className='w-full grid grid-cols-12 px-10'>
      <button key={`edit ${props._id}`}>Edit</button>
      <div
        className={`${inputStyling} text-center`}
        key={props._id + props.stock}
      >
        {props.stock}
      </div>
      <div
        className={`${inputStyling} font-semibold col-span-2`}
        key={props._id + props.itemName}
      >
        {props.itemName}
      </div>
      <div
        className={`${inputStyling} col-span-6`}
        key={props._id + props.itemDesc}
      >
        {props.itemDesc}
      </div>
      <div
        className={`${inputStyling} col-span-2`}
        key={props._id + props.category}
      >
        {props.category}
      </div>
    </div>
  );
}
