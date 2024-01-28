import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import Context from './contexts/Context';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
  const { setIsSignedIn } = useContext(Context);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsSignedIn(false);
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  return (
    <Button color="success" size="lg" onClick={handleSignOut}>Sign Out</Button>
  );
};

export default SignOutButton;