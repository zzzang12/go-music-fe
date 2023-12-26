import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/cards.json`)
    .then((res) => res.json())
    .then((result) => setCards(result));
  }, []);

  const cardItems = cards.map((card) => {
    return <Card key={card.id} img={card.img} imgAlt={card.imgAlt} desc={card.desc} price={card.price}
                 productName={card.productName}/>;
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