import React, { useEffect, useState } from 'react';
import Order from '../Order';
import LoadUserInfo from '../../utils/LoadUserInfo';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  LoadUserInfo();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/orders.json`)
    .then((res) => res.json())
    .then((result) => setOrders(result));
  }, []);

  return (
    <div className="mt-5" id="body">
      {orders.map((order) => <Order key={order.id} {...order}/>)}
    </div>
  );
};

export default OrderPage;