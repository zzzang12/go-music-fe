import React, { useState } from 'react';
import Order from '../Order';

const OrderPage = () => {
  const [orders, setOrders] = useState([{
    id         : 1,
    productName: 'productName1',
    price      : '1',
    desc       : 'description1',
    days       : '1',
    imgAlt     : 'imgAlt1',
    img        : '??'
  }, {
    id         : 2,
    productName: 'productName2',
    price      : '2',
    desc       : 'description2',
    days       : '2',
    imgAlt     : 'imgAlt2',
    img        : '??'
  }]);

  return (
    <div className="mt-5" id="body">
      {orders.map((order) => <Order key={order.id} {...order}/>)}
    </div>
  );
};

export default OrderPage;