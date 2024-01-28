import { Card, CardBody, CardFooter, CardHeader, CardImg, CardText } from 'reactstrap';

const Order = ({ productName, img, imgAlt, desc, price, days }) => {
  return (
    <Card className="text-center">
      <CardHeader className="h5">{productName}</CardHeader>
      <CardBody className="row">
        <div className="mx-auto col-6">
          <CardImg src={img} alt={imgAlt} className="float-start" style={{ width: '80%' }}/>
        </div>
        <CardText className="col-6">{desc}</CardText>
        <CardText className="mt-4">Price: {price}</CardText>
      </CardBody>
      <CardFooter className="text-muted">Purchased {days} days ago</CardFooter>
    </Card>
  );
};

export default Order;