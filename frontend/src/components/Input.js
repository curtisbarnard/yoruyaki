export default function Input(props) {
  return (
    <>
      <label htmlFor={props.name} className='mt-8 self-start'>
        {props.label}
      </label>
      <input
        className='px-2 py-1 border-2 border-indigo-100 rounded-full focus:outline-indigo-800'
        onChange={props.handleChange}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        type={props.type}
      />
    </>
  );
}
