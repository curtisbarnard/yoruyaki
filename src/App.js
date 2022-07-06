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
        key={element.id}
        stock={element.stock}
      />
    );
  });

  return (
    <div className='App'>
      <MenuSections />
      <ul>{cards}</ul>
    </div>
  );
}

export default App;
