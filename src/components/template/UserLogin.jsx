import React from 'react';
import Input from '@/../src/components/atoms/Input/Input';
import Submit from '@/../src/components/atoms/Input/Input-Submit';
import Label from '@/../src/components/atoms/Label/Label';
import "@/../globals.css";
import Container from '@/../src/components/atoms/Container/container';


function Admin() {
  return (
    <div>
        <Container>
            <div className='h-screen flex items-center'>
                <div className='w-4/12 ptr-login-form px-6 bg-gray-400 m-auto py-6 rounded border-2 border-yellow-600'>
                    <form action="">
                        <Label htmlfor='user'>
                            User Name
                            <Input type="text" placeholder="User Name" name="user" />
                        </Label>
                        <Label htmlfor='Password'>
                            User Password
                            <Input type="password" placeholder="Password" name="password" />
                        </Label>
                        <Submit type='submit' value='Login'/>
                    </form>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Admin
