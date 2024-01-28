import React, { useContext, useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Context from '../contexts/Context';
import SignUpModal from './SignUpModal';

const SignInModal = ({ showSignInModal, toggleSignInModal }) => {
  const { setIsSignedIn } = useContext(Context);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [input, setInput] = useState({ email: '', password: '' });

  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  const handleInputChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setInput({
      ...input,
      [id]: value
    });
  };

  const handleSignIn = () => {
    console.log('handleSignIn');
    console.log(input);
    setIsSignedIn(true);
    toggleSignInModal();
  };

  const handleSignUp = () => {
    console.log('handleSignUp');
    toggleSignInModal();
    toggleSignUpModal();
  };

  return (
    <>
      <Modal isOpen={showSignInModal}>
        <ModalHeader toggle={toggleSignInModal} className="bg-success text-white">
          Sign In
        </ModalHeader>
        <ModalBody>
          {errorMessage && <div className="h5 mb-4 text-danger">errorMessage</div>}
          <Form>
            <FormGroup floating>
              <Input type="email" id="email" placeholder="Email" onChange={handleInputChange}/>
              <Label for="email">Email</Label>
            </FormGroup>
            <FormGroup floating>
              <Input type="password" id="password" placeholder="Password" onChange={handleInputChange}/>
              <Label for="password">Password</Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center">
          <Button color="success" size="lg" className="me-3" onClick={handleSignIn}>Sign In</Button>
          <Button color="primary" size="lg" onClick={handleSignUp}>Sign Up</Button>
        </ModalFooter>
      </Modal>

      <SignUpModal showSignUpModal={showSignUpModal} toggleSignUpModal={toggleSignUpModal}/>
    </>
  );
};

export default SignInModal;