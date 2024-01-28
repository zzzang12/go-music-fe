import React, { useEffect, useState } from 'react';
import Product from '../Product';

const ProductPage = ({ location }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/${location}`)
    .then((res) => res.json())
    .then((result) => setCards(result));
  }, [location]);

  return (
    <div className="container pt-4" id="body">
      <div className="h3 text-center text-success">Products</div>
      <div className="row justify-content-around">
        {cards.map((card) => <Product key={card.id} {...card}/>)}
      </div>
    </div>
  );
};

export default ProductPage;