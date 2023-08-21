import React, { useState } from 'react';
import { useRouter } from 'next/router';
import InputField from '@/../src/components/atoms/Input/Input';
import Submit from '@/../src/components/atoms/Input/Input-Submit';
// Remove the duplicate import of React from here
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "@/../globals.css";
import Container from '@/../src/components/atoms/Container/container';
import CheckBox from '@/../src/components/atoms/CheckBox/CheckBox';



function Register() {
  const FormStyle = 'w-4/12 ptr-login-form px-6 bg-gray-400 m-auto py-6 rounded border-2 border-yellow-600';
  const FormMainStyle = 'h-screen flex items-center';

  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const submit = async (values, { resetForm }) => {
    // Handle form submission using fetch or axios
    // You can use the 'values' object to access form field values
    try {
      const response = await fetch('http://localhost:3000/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fname,
          lname,
          username,
          email,
          password
        }),
      });
      if (response.ok) {
        // Handle successful response, e.g., redirect to login page
        router.push('/login');
        resetForm(); // Reset the form after successful submission
      } else {
        // Handle error response
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };



  return (
    <div>
      <Container>
        <div className={FormMainStyle}>
          <div className={FormStyle}>
            <Formik
            >
              <Form onSubmit={submit}>
                <InputField name="firstname" placeholder="First Name" 
                  onChange={e => setfName(e.target.value)}  
                />
                <ErrorMessage name="firstname" component="div" />
                <InputField name="lastname" placeholder="Last Name" 
                  onChange={e => setlName(e.target.value)}  
                />
                <ErrorMessage name="lastname" component="div" />
                <InputField name="username" placeholder="User Name" 
                  onChange={e => setName(e.target.value)}  
                />
                <ErrorMessage name="username" component="div" />
                <InputField name="email" type="email" placeholder="Email Address" 
                  onChange={e => setEmail(e.target.value)}  
                />
                <ErrorMessage name="email" component="div" />
                <InputField name="password" type="password" placeholder="Password" 
                  onChange={e => setPassword(e.target.value)}  
                />
                <ErrorMessage name="password" component="div" />
                <div>
                  <CheckBox name="gender" label="Male" />
                  <CheckBox name="gender" label="Female" />
                  <CheckBox name="gender" label="Other" />
                </div>
                {/* <Submit type='submit'>Sign Up</Submit> */}
                <Submit type='submit'>Sign Up</Submit>

              </Form>
            </Formik>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Register;
