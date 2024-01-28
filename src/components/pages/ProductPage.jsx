import React, { useEffect, useState } from 'react';
import Product from '../Product';

const ProductPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/cards.json`)
    .then((res) => res.json())
    .then((result) => setCards(result));
  }, []);

  return (
    <div className="container pt-4" id="body">
      <div className="row justify-content-around">
        {cards.map((card) => <Product key={card.id} {...card}/>)}
      </div>
    </div>
  );
};

export default ProductPage;