import { CardData, CardName as Props } from './types';
import data from './data.json';
import ChoiceCard from './components/choice_card';

const FindOrFix = ({ cardName }: Props) => {
  const cardData: CardData = data[cardName];
  return (
    <ChoiceCard
      cardName={cardName}
      title={cardData.title}
      description={cardData.description}
      links={cardData.links}
    />
  );
};

export default FindOrFix;
