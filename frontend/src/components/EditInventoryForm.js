import { useState } from 'react';
import { useSelector } from 'react-redux';
export default function EditInventoryForm(props) {
  // Initialize component state
  const [wasEdited, setWasEdited] = useState(false);
  const [formState, setFormState] = useState({
    stock: props.stock,
    itemName: props.itemName,
    itemDesc: props.itemDesc,
    category: props.category,
  });

  const { inventory } = useSelector((state) => state.inventory);

  function onFormChange(event) {
    setFormState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
    const itemInGlobalState = inventory.find(
      (element) => element._id === props._id
    );
    setWasEdited(true);

    if (
      itemInGlobalState[event.target.name] === event.target.value ||
      itemInGlobalState[event.target.name] === +event.target.value
    ) {
      setWasEdited(false);
    }
  }

  // input styling
  const inputStyling =
    'px-2 py-2 text-lg border-b-2 border-indigo-100 focus:outline-8 focus:outline-indigo-400';

  // JSX to be rendered
  return (
    <li>
      <form className='w-full grid grid-cols-12 px-10'>
        <div>
          <button>Delete</button>
          <button onClick={() => props.setIsEditing(false)}>Cancel</button>
          {wasEdited && <button>Update</button>}
        </div>
        <input
          type='number'
          name='stock'
          value={formState.stock}
          onChange={onFormChange}
          className={`${inputStyling} text-center`}
        />
        <input
          type='text'
          name='itemName'
          value={formState.itemName}
          onChange={onFormChange}
          className={`${inputStyling} font-semibold col-span-2`}
        />
        <input
          type='text'
          name='itemDesc'
          value={formState.itemDesc}
          onChange={onFormChange}
          className={`${inputStyling} col-span-6`}
        />
        <input
          type='text'
          name='category'
          value={formState.category}
          onChange={onFormChange}
          className={`${inputStyling} col-span-2`}
        />
      </form>
    </li>
  );
}
