import MenuSections from './components/MenuSections';
import MenuCard from './components/MenuCard';
import { data } from './data';

function App() {
  const cards = data.map((element) => {
    return (
      <MenuCard
        img={element.img}
        name={element.name}
        description={element.description}
      />
    );
  });

  return (
    <div className='App'>
      <MenuSections />
      {cards}
    </div>
  );
}

export default App;
