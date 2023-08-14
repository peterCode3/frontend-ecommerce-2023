import React from 'react';
import Input from '@/../src/components/atoms/Input/Input';
import Submit from '@/../src/components/atoms/Input/Input-Submit';
import Label from '@/../src/components/atoms/Label/Label';
import "@/../globals.css";
import Container from '@/../src/components/atoms/Container/container';
import CheckBox from '@/../src/components/atoms/CheckBox/CheckBox';

function Register() {
  return (
    <div>
      <Container>
            <div className='h-screen flex items-center'>
                <div className='w-4/12 ptr-login-form px-6 bg-gray-400 m-auto py-6 rounded border-2 border-yellow-600'>
                    <form action="">
                        <Label htmlfor='firstname'>
                            First Name
                            <Input type="lastname" placeholder="User Name" name="firstname" />
                        </Label>
                        <Label htmlfor='user'>
                            Last Name
                            <Input type="text" placeholder="User Name" name="lastname" />
                        </Label>
                        <Label htmlfor='user'>
                            User Name
                            <Input type="text" placeholder="User Name" name="lastname" />
                        </Label>
                        <Label htmlfor='email'>
                            Email Address
                            <Input type="email" placeholder="Email Address" name="email" />
                        </Label>
                        <Label htmlfor='Password'>
                            Password
                            <Input type="password" placeholder="Password" name="password" />
                        </Label>
                        <Label htmlfor='gender'>
                            <CheckBox label="Male"/>
                            <CheckBox label="Female"/>
                            <CheckBox label="Other"/>
                        </Label>
                        <Submit type='submit' value='Sign Up'/>
                    </form>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Register
