export default function MenuSections() {
  return (
    <header className='w-full h-20 px-2 flex items-center bg-indigo-900'>
      <nav className='text-xl flex grow bg-yellow-50 rounded-full shadow-md'>
        <button className='grow bg-yellow-300 rounded-full font-bold py-1'>
          Otsumami
        </button>
        <button className='grow'>Skewers</button>
        <button className='grow'>Drinks</button>
      </nav>
    </header>
  );
}
