import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import Button from '../components/SubmitButton';
import ClickButton from '../components/ClickButton';

export default function Splash() {
  const [showLogin, setShowLogin] = useState('hidden');

  function handleClick() {
    setShowLogin('login');
  }

  function closeWindow() {
    setShowLogin('hidden');
  }

  return (
    <>
      <div className='splash-background'>
        <div className='relative flex flex-col h-[100vh] bg-indigo-900/25 backdrop-blur-sm backdrop-brightness-50'>
          <div
            onClick={closeWindow}
            className='shrink-0 flex flex-col items-center justify-center h-[80vh] text-yellow-400'
          >
            <h1 className='text-5xl font-semibold pb-2'>Yoruyaki</h1>
            <span className='text-4xl font-light ml-20'>夜焼き</span>
          </div>
          <div className='shrink-0 grow flex justify-around'>
            <ClickButton
              title='Sign In'
              className='h-max'
              handleClick={handleClick}
            />
            <Link to='/menu'>
              <Button title='See Menu' />
            </Link>
          </div>
          {showLogin !== 'hidden' && (
            <div className='absolute bg-white rounded-t-3xl h-1/2 bottom-0 inset-x-0'>
              <Login />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
