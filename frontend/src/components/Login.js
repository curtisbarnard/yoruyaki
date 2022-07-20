import React, { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../features/auth/authSlice';
import Loading from './Loading';

export default function Login() {
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
    const customerData = {
      email: formData.email,
      password: formData.password,
    };
    dispatch(login(customerData));
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
