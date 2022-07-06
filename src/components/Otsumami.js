import MenuCard from './MenuCard';
import { data } from '../data';

export default function Otsumami() {
  const filtered = data.filter(
    (element) => element.category === 'otsumami' || element.category === 'drink'
  );
  const cards = filtered.map((element) => {
    return <MenuCard {...element} key={element.id} />;
  });
  return <ul>{cards}</ul>;
}
