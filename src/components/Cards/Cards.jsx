import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';

const Cards = ({ handleAddToTeam }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);
  //   console.log(cards);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          handleAddToTeam={handleAddToTeam}
        ></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleAddToTeam: PropTypes.func.isRequired,
};

export default Cards;
