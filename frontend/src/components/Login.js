import React, { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';
import { Link } from 'react-router-dom';

export default function Login() {
  // Handling Form State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    console.log(formData);
  }

  // JSX to be rendered
  return (
    <>
      <form
        className='w-[190px] h-[100vh] mx-auto flex flex-col justify-center items-center'
        onSubmit={handleSubmit}
      >
        <Input
          label='Email Address'
          name='email'
          placeholder='johndoe@gmail.com'
          value={formData.email}
          handleChange={handleChange}
          type='email'
        />
        <Input
          label='Password'
          name='password'
          placeholder='Minimum 10 characters'
          value={formData.password}
          handleChange={handleChange}
          type='password'
        />
        <Button title='Sign In' />
      </form>
    </>
  );
}
