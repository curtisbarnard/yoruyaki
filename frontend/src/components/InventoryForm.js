import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createInventoryItem } from '../features/inventory/inventorySlice';
import Input from './Input';
import Button from './Button';

export default function InventoryForm() {
  // Redux stuff
  const dispatch = useDispatch();

  // Handling Form State
  const [formData, setFormData] = useState({
    stock: '',
    itemName: '',
    itemDesc: '',
    category: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  // Handling Form submission
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createInventoryItem(formData));
    setFormData({
      stock: '',
      itemName: '',
      itemDesc: '',
      category: '',
    });
  }

  // JSX to render
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          name='stock'
          placeholder='0'
          value={formData.stock}
          type='number'
          label='Item QTY'
          handleChange={handleChange}
        />
        <Input
          name='itemName'
          placeholder='Tsukune'
          value={formData.itemName}
          type='text'
          label='Item Name'
          handleChange={handleChange}
        />
        <Input
          name='itemDesc'
          placeholder='Fresh ground chicken meatballs'
          value={formData.itemDesc}
          type='text'
          label='Item Description'
          handleChange={handleChange}
        />
        <Input
          name='category'
          placeholder='Otsumami'
          value={formData.category}
          type='text'
          label='Item Category'
          handleChange={handleChange}
        />
        <Button title='Submit' />
      </form>
    </>
  );
}
