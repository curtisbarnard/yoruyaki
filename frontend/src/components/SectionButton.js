export default function SectionButton(props) {
  return (
    <button
      onClick={() => props.updateMenuSection(props.title.toLowerCase())}
      className={`grow ${
        props.currentSection === props.title.toLowerCase() ? 'menu-section' : ''
      }`}
    >
      {props.title}
    </button>
  );
}
