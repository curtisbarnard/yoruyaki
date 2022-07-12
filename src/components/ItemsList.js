import MenuCard from './MenuCard';
import { data } from '../data';

export default function ItemsList(props) {
  const filtered = data.filter(
    (element) => element.category === props.currentSection
  );
  const cards = filtered.map((element) => {
    return <MenuCard {...element} key={element.id} />;
  });
  return <ul>{cards}</ul>;
}
