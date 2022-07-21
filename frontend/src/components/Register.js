import React, { useEffect, useState } from 'react';
import Button from './SubmitButton';
import Input from './Input';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../features/auth/authSlice';
import Loading from './Loading';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { customer, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
    if (isSuccess || customer) {
      navigate('/menu');
    }

    dispatch(reset());
  }, [customer, isError, isSuccess, message, navigate, dispatch]);

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
    if (formData.password !== formData.passwordConfirm) {
      throw new Error('Passwords do not match');
    } else {
      const customerData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      dispatch(register(customerData));
    }
  }

  if (isLoading) {
    return <Loading />;
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
