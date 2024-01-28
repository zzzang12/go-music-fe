import React, { useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import BuyModal from './modals/BuyModal';

const Product = ({ img, imgAlt, desc, price, productName }) => {
  const [showBuyModal, setShowBuyModal] = useState(false);

  const toggleBuyModal = () => {
    setShowBuyModal(!showBuyModal);
  };

  return (
    <>
      <Card color="success" outline className="m-3" style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle tag="h4">{productName}</CardTitle>
          <CardSubtitle>Price: {price}</CardSubtitle>
        </CardBody>
        <img src={img} alt={imgAlt}/>
        <CardBody>{desc}</CardBody>
        <Button color="success" size="lg" className="mb-3" onClick={toggleBuyModal}>Buy</Button>
      </Card>

      <BuyModal showBuyModal={showBuyModal} toggleBuyModal={toggleBuyModal}/>
    </>
  );
};

export default Product;