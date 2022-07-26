import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteInventoryItem } from '../features/inventory/inventorySlice';
import DeleteModal from './deleteModal';

export default function EditInventoryForm(props) {
  const dispatch = useDispatch();

  // Initialize component state
  const [wasEdited, setWasEdited] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [formState, setFormState] = useState({
    stock: props.stock,
    itemName: props.itemName,
    itemDesc: props.itemDesc,
    category: props.category,
  });

  const { inventory } = useSelector((state) => state.inventory);

  // Form state and state change for showing buttons
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

  // Handle buttons clicks
  function showModalClick(event) {
    event.preventDefault();
    setDeleteModal((prevState) => !prevState);
  }

  function deleteItem(event) {
    event.preventDefault();
    // TODO move this functionality into modal confirm
    dispatch(deleteInventoryItem(props._id));
    setDeleteModal((prevState) => !prevState);
  }

  // input styling
  const inputStyling =
    'px-2 py-2 text-lg border-b-2 border-indigo-100 focus:outline-8 focus:outline-indigo-400';

  // JSX to be rendered
  return (
    <li>
      {deleteModal && (
        <DeleteModal cancelClick={showModalClick} confirmClick={deleteItem} />
      )}
      <form className='w-full grid grid-cols-12 px-10'>
        <div>
          <button onClick={showModalClick}>Delete</button>
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
