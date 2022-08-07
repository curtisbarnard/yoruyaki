import ClickButton from '../components/ClickButton';

export default function CustomerOrder() {
  // JSX to be rendered
  return (
    <>
      <header className='grid grid-cols-3 p-8'>
        <h1 className=' text-5xl col-span-full font-semibold'>Yoruyaki</h1>
        <span className='text-4xl col-start-2'>夜焼き</span>
      </header>
      <section className='px-6 pb-8'>
        <h2 className='text-2xl'>Order #34343</h2>
        <ul className='w-full bg-indigo-50 rounded-lg py-2 px-6 my-6'>
          <li className='text-lg flex justify-between my-2'>
            <span>Edamame</span>
            <span className='bg-white rounded-lg px-4'>10</span>
          </li>
          <li className='text-lg flex justify-between my-2'>
            <span>Kirin</span>
            <span className='bg-white rounded-lg px-4'>12</span>
          </li>
        </ul>
        <p className='text-xl text-center'>
          Thanks for coming to this pop-up event!
        </p>
      </section>
      <section className='px-6 pb-8'>
        <h2 className='text-2xl mb-4'>Order Progress</h2>
        <div className='flex justify-between'>
          <div className='flex flex-col items-center shrink-0'>
            <div className='w-[50px] h-[50px] rounded-full bg-indigo-900 border-indigo-900 border-2'></div>
            <span>In queue</span>
          </div>
          <div className='self-center border-t-4 border-black border-dotted h-6 w-full'></div>
          <div className='flex flex-col items-center shrink-0'>
            <div className='w-[50px] h-[50px] rounded-full border-indigo-900 border-2'></div>
            <span>On the grill</span>
          </div>
          <div className='self-center border-t-4 border-black border-dotted h-6 w-full'></div>
          <div className='flex flex-col items-center shrink-0'>
            <div className='w-[50px] h-[50px] rounded-full border-indigo-900 border-2'></div>
            <span>Completed</span>
          </div>
        </div>
      </section>
      <div className='flex justify-end px-6'>
        <ClickButton title='Order More' />
      </div>
    </>
  );
}
