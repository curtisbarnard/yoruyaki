import React, { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';

export default function Register() {
  // Handling Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
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
          label='Full Name'
          name='name'
          placeholder='John Doe'
          value={formData.name}
          handleChange={handleChange}
          type='text'
        />
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
        <Input
          label='Confirm Password'
          name='passwordConfirm'
          placeholder='Minimum 10 characters'
          value={formData.passwordConfirm}
          handleChange={handleChange}
          type='password'
        />

        {formData.password !== formData.passwordConfirm && (
          <span className='mt-2 mb-8 text-red-600 font-bold'>
            Passwords do not match
          </span>
        )}
        <Button title='Sign Up' />
      </form>
    </>
  );
}
