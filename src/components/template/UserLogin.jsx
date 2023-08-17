// import React from 'react';
import InputField from '@/../src/components/atoms/Input/Input';
import Submit from '@/../src/components/atoms/Input/Input-Submit';
import Label from '@/../src/components/atoms/Label/Label';
import "@/../globals.css";
import Container from '@/../src/components/atoms/Container/container';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AdminLoginPage = () => {
  const initialValues = { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:8000/admin', values);
    } catch (error) {
      // Handle login error
    }
  };

  const LoginSecStyle = 'w-4/12 ptr-login-form px-6 bg-gray-400 m-auto py-6 rounded border-2 border-yellow-600';

  return (


    <div>
        <Container>
            <div className='h-screen flex items-center'>
                <div className={LoginSecStyle}>
                    <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                          >
                            <Form>
                              <div>
                                <Label>Email:</Label>
                                <InputField type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                              </div>
                              <div>
                                <Label>Password:</Label>
                                <InputField type="password" name="password" />
                                <ErrorMessage name="password" component="div" />
                              </div>
                              <Submit type="submit">Login</Submit>
                            </Form>
                          </Formik>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AdminLoginPage;
