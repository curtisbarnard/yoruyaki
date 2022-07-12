import React, { useState } from 'react';
import Button from './Button';

export default function Login() {
  // Handling Form State
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  function handleChange(event) {
    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  // Handling Form submission
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  // JSX to be rendered
  return (
    <form
      className='w-40 h-[100vh] mx-auto flex flex-col justify-center items-center'
      onSubmit={handleSubmit}
    >
      <label htmlFor='name' className='self-start'>
        Full Name
      </label>
      <input
        className='px-2 py-1 border border-black rounded-full'
        type='text'
        onChange={handleChange}
        placeholder='John Doe'
        name='name'
        value={formData.name}
      />
      <label className='mt-12 self-start' htmlFor='email'>
        Email
      </label>
      <input
        className='px-2 py-1 border border-black rounded-full'
        type='email'
        onChange={handleChange}
        placeholder='johndoe@gmail.com'
        name='email'
        value={formData.email}
      />
      <label className='mt-12 self-start' htmlFor='email'>
        Password
      </label>
      <input
        className='px-2 py-1 border border-black rounded-full'
        type='password'
        onChange={handleChange}
        placeholder='minimum 10 characters'
        name='password'
        value={formData.password}
      />
      <Button title='Submit' />
    </form>
  );
}
