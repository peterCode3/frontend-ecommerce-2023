// Auth.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Auth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Check if a valid token is stored in session storage
      const token = sessionStorage.getItem('adminToken');
      if (!token) {
        // Redirect to the login page if no token is found
        router.push('/admin-login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default Auth;
