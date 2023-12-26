import React from 'react';

const Card = ({ img, imgAlt, desc, price, productName }) => {
  return (
    <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
      <div className="card mb-3">
        <img className="card-img-top" src={img} alt={imgAlt}/>
        <div className="card-body">
          <h4 className="card-title">{productName}</h4>
          <p className="card-text">Price: <strong>{price}</strong></p>
          <p className="card-text">{desc}</p>
          <a href="/" className="btn btn-primary">Buy</a>
        </div>
      </div>
    </div>
  );
};

export default Card;