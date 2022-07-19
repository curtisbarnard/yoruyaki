import React, { useEffect, useState } from 'react';
import Button from './Button';

export default function Login() {
  // Testing useEffect not relevant to this project
  const [prefData, setPrefData] = useState({});
  useEffect(() => {
    fetch('https://japan-info-api.herokuapp.com/api/prefecture')
      .then((res) => res.json())
      .then((apiData) => setPrefData(apiData));
    // empty array below allows the useeffect to run only once and not get stuck in a loop
  }, []);
  let prefList = [];
  for (const item in prefData) {
    prefList.push(<h2>{prefData[item].jName}</h2>);
  }

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
        <label className='mt-8 self-start' htmlFor='email'>
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
        <label className='mt-8 self-start' htmlFor='email'>
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
        <label className='mt-8 self-start' htmlFor='email'>
          Confirm Password
        </label>
        <input
          className='px-2 py-1 border border-black rounded-full'
          type='password'
          onChange={handleChange}
          placeholder='minimum 10 characters'
          name='passwordConfirm'
          value={formData.passwordConfirm}
        />
        {formData.password !== formData.passwordConfirm && (
          <span className='mt-2 mb-8 text-red-600 font-bold'>
            Passwords do not match
          </span>
        )}
        <Button title='Sign Up' />
      </form>
      <div>{prefList}</div>
    </>
  );
}
