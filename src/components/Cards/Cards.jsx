import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';

const Cards = props => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);
  console.log(cards);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map(card => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {};

export default Cards;
