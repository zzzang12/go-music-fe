import React from 'react';

const Card = ({ id, img, imgAlt, desc, price, productName, isPromotion, promotion, showBuyModal }) => {
  const priceColor = isPromotion ? 'text-danger' : 'text-dark';
  const sellPrice = isPromotion ? promotion : price;

  return (
    <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
      <div className="card mb-3">
        <img className="card-img-top" src={img} alt={imgAlt}/>
        <div className="card-body">
          <h4 className="card-title">{productName}</h4>
          <p className="card-text">Price: <strong className={priceColor}>{sellPrice}</strong></p>
          <p className="card-text">{desc}</p>
          <button className="btn btn-success text-white" onClick={() => {
            showBuyModal(id, sellPrice);
          }}>Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;