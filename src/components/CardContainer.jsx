import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardContainer = ({ location, isPromotion, showBuyModal }) => {
  location = 'cards.json';
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/${location}`)
    .then((res) => res.json())
    .then((result) => setCards(result));
  }, []);

  const cardItems = cards.map((card) => {
    return <Card key={card.id} {...card} isPromotion={isPromotion} showBuyModal={showBuyModal}/>;
  });

  return (
    <div className="container pt-4">
      <h3 className="text-center text-primary">Products</h3>
      <div className="pt-4 row">
        {cardItems}
      </div>
    </div>
  );
};

export default CardContainer;