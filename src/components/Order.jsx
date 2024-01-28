const Order = ({ productName, img, imgAlt, desc, price, days }) => {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <h5>{productName}</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="mx-auto col-6">
              <img src={img} alt={imgAlt} className="img-thumbnail float-start"/>
            </div>
            <div className="col-6">
              <p className="card-text">{desc}</p>
            </div>
            <div className="mt-4">
              Price: {price}
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          Purchased {days} days ago
        </div>
      </div>
    </div>
  );
};

export default Order;