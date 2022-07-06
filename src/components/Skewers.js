import MenuCard from './MenuCard';
import { data } from '../data';

export default function Skewers() {
  const filtered = data.filter((element) => element.category === 'skewer');
  const cards = filtered.map((element) => {
    return <MenuCard {...element} key={element.id} />;
  });
  return <ul>{cards}</ul>;
}
