import { useContext, useEffect } from 'react';
import Context from '../components/contexts/Context';

const LoadUserInfo = () => {
  const { setIsSignedIn } = useContext(Context);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo !== null) {
      setIsSignedIn(true);
    }
  }, []);
};

export default LoadUserInfo;