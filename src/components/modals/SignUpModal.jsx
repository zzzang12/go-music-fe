import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const SignUpModal = ({ showSignUpModal, toggleSignUpModal }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [input, setInput] = useState({ userName: '', email: '', password: '', passwordCheck: '' });
  const handleInputChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setInput({
      ...input,
      [id]: value
    });
  };

  const handleSignUp = () => {
    console.log('handleSignUp');
    console.log(input);
    toggleSignUpModal();
  };

  return (
    <Modal isOpen={showSignUpModal}>
      <ModalHeader toggle={toggleSignUpModal} className="bg-success text-white">
        Sign Up
      </ModalHeader>
      <ModalBody>
        {errorMessage && <div className="h5 mb-4 text-danger">errorMessage</div>}
        <Form>
          <FormGroup floating>
            <Input type="text" id="userName" placeholder="User Name" onChange={handleInputChange}/>
            <Label for="username">User Name</Label>
          </FormGroup>
          <FormGroup floating>
            <Input type="email" id="email" placeholder="Email" onChange={handleInputChange}/>
            <Label for="email">Email</Label>
          </FormGroup>
          <FormGroup floating>
            <Input type="password" id="password" placeholder="Password" onChange={handleInputChange}/>
            <Label for="password">Password</Label>
          </FormGroup>
          <FormGroup floating>
            <Input type="password" id="passwordCheck" placeholder="Password Check" onChange={handleInputChange}/>
            <Label for="password">Password Check</Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter className="d-flex justify-content-center">
        <Button color="success" size="lg" onClick={handleSignUp}>Sign Up</Button>
      </ModalFooter>
    </Modal>
  );
};

export default SignUpModal;