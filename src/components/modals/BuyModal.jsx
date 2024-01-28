import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Status = {
  Default: 'default',
  Success: 'success',
  Failure: 'failure'
};

const BuyModal = ({ showBuyModal, toggleBuyModal }) => {
  const [status, setStatus] = useState(Status.Default);
  const [input, setInput] = useState({ cardName: '', cardInfo: '' });
  const [rememberCardCheck, setRememberCardCheck] = useState(false);

  const handleRememberCardCheckChange = () => {
    setRememberCardCheck(!rememberCardCheck);
  };

  const handleUseSavedCard = () => {
    // object storage 꺼내오기
  };

  const handleInputChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setInput({
      ...input,
      [id]: value
    });
  };

  const handleSubmit = async () => {
    console.log(input);

    switch (input.cardName) {
      case '1':
        setStatus(Status.Success);
        break;

      case '2':
        setStatus(Status.Failure);
        break;

      default :
    }

    if (rememberCardCheck) {
      // local storage에 저장
    }

    const response = await fetch('/charge', {
      method : 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body   : JSON.stringify({
        operation: 'Charge'
      })
    });
    console.log(response.ok);

    if (response.ok) {
      console.log('Purchase Complete!');
      setStatus(Status.Success);
    }
  };

  return (
    <Modal isOpen={showBuyModal}>
      <ModalHeader toggle={toggleBuyModal} className="bg-success text-white">
        Buy Item
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup floating>
            <Input type="text" id="cardName" placeholder="Card Name" onChange={handleInputChange}/>
            <Label for="cardName">Card Name</Label>
          </FormGroup>
          <FormGroup floating>
            <Input type="text" id="cardInfo" placeholder="Card Information" onChange={handleInputChange}/>
            <Label for="cardInfo">Card Information</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" id="rememberCardCheck" onChange={handleRememberCardCheckChange}/>
            <Label for="rememberCardCheck">Remember card?</Label>
          </FormGroup>
        </Form>
        {status === Status.Success && <div className="h5 text-success">Request Successfully</div>}
        {status === Status.Failure &&
          <div className="h5 text-danger">Credit card information invalid, try again or exit</div>}
      </ModalBody>
      <ModalFooter className="d-flex justify-content-center">
        {status !== Status.Success &&
          <Button color="success" outline size="lg" onClick={handleUseSavedCard}>Use saved card</Button>}
        {status !== Status.Success && <Button color="success" size="lg" onClick={handleSubmit}>Charge</Button>}
        {status === Status.Success && <Button color="success" size="lg" onClick={toggleBuyModal}>OK</Button>}
      </ModalFooter>
    </Modal>
  );
};

export default BuyModal;