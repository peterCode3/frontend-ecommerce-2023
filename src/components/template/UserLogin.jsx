import InputField from '@/../src/components/atoms/Input/Input';
import Submit from '@/../src/components/atoms/Input/Input-Submit';
import "@/../globals.css";
import Container from '@/../src/components/atoms/Container/container';
import Label from '../atoms/Label/Label';
import Header from './Header';
import Footer from './Footer';

// components/AdminLoginForm.js
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import axios from 'axios';

const AdminLoginForm = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const LoginSecStyle = 'mt-8 mb-8 w-4/12 ptr-login-form px-6 bg-gray-400 m-auto py-6 rounded border-2 border-yellow-600';

  
  useEffect(() => {
    // Check if a valid token is stored in session storage
    const token = sessionStorage.getItem('adminToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/admin-login', { email, password });
      const { token } = response.data;

      // Store the token securely in session storage
      sessionStorage.setItem('adminToken', token);

      console.log('Logged in with token:', token);
      setIsLoggedIn(true);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminToken'); 
    setIsLoggedIn(false); 
    router.push('/admin-login'); 
  };

  
  return (
    <div className='main-login'>
    <Header isLoggedIn={isLoggedIn}/>
    <Container>
    {isLoggedIn ? (
      <div>
        <p>You are logged in.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      ) : (
      <div className={LoginSecStyle}>
        <form onSubmit={handleSubmit}>
          <Label htmlFor='email'>User Name</Label>
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor='password'>User Pa ssword</Label>
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Submit name='submit' type="submit">Login</Submit>
        </form>
      </div>
      )}
    </Container>
    <Footer />
    </div>
  );
};

export default AdminLoginForm;
