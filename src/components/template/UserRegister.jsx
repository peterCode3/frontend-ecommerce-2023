// import React from 'react';
import InputField from '@/../src/components/atoms/Input/Input';
import Submit from '@/../src/components/atoms/Input/Input-Submit';
// import Label from '@/../src/components/atoms/Label/Label';
// import "@/../globals.css";
// import Container from '@/../src/components/atoms/Container/container';
// import CheckBox from '@/../src/components/atoms/CheckBox/CheckBox';

// function Register() {
//   return (
//     <div>
//       <Container>
//             <div className='h-screen flex items-center'>
//                 <div className='w-4/12 ptr-login-form px-6 bg-gray-400 m-auto py-6 rounded border-2 border-yellow-600'>
//                     <form action="">
//                         <Label htmlfor='firstname'>
//                             First Name
//                             <InputField type="lastname" placeholder="User Name" name="firstname" />
//                         </Label>
//                         <Label htmlfor='user'>
//                             Last Name
//                             <InputField type="text" placeholder="User Name" name="lastname" />
//                         </Label>
//                         <Label htmlfor='user'>
//                             User Name
//                             <InputField type="text" placeholder="User Name" name="lastname" />
//                         </Label>
//                         <Label htmlfor='email'>
//                             Email Address
//                             <InputField type="email" placeholder="Email Address" name="email" />
//                         </Label>
//                         <Label htmlfor='Password'>
//                             Password
//                             <InputField type="password" placeholder="Password" name="password" />
//                         </Label>
//                         <Label htmlfor='gender'>
//                             <CheckBox label="Male"/>
//                             <CheckBox label="Female"/>
//                             <CheckBox label="Other"/>
//                         </Label>
//                         <Submit type='submit' value='Sign Up'/>
//                     </form>
//                 </div>
//             </div>
//         </Container>
//     </div>
//   )
// }

// export default Register




import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "@/../globals.css";
import Container from '@/../src/components/atoms/Container/container';
import CheckBox from '@/../src/components/atoms/CheckBox/CheckBox';

function Register() {
  const initialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    gender: '',
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  const FormStyle = 'w-4/12 ptr-login-form px-6 bg-gray-400 m-auto py-6 rounded border-2 border-yellow-600';
  const FormMainStyle = 'h-screen flex items-center';


  return (
    <div>
      <Container>
        <div className={FormMainStyle}>
          <div className={FormStyle}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <InputField name="firstname" placeholder="First Name" />
                <ErrorMessage name="firstname" component="div" />
                <InputField name="lastname" placeholder="Last Name" />
                <ErrorMessage name="lastname" component="div" />
                <InputField name="username" placeholder="User Name" />
                <ErrorMessage name="username" component="div" />
                <InputField name="email" type="email" placeholder="Email Address" />
                <ErrorMessage name="email" component="div" />
                <InputField name="password" type="password" placeholder="Password" />
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
