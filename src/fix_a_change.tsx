import { CardData, CardName as Props } from './types';
import data from './data.json';
import ChoiceCard from './components/choice_card';

const FixAChange = ({ cardName }: Props) => {
  const cardData: CardData = data[cardName];
  return (
    <ChoiceCard title={cardData.title} description={cardData.description} links={cardData.links} />
  );
};

export default FixAChange;
