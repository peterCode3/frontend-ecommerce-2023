import React from 'react'
import Header from '@/components/template/Header'
import "@/../globals.css"
import Footer from '@/components/template/Footer'
import UserDetails from '@/components/organism/userdetails'
import Heading from '@/components/atoms/Heading/Heading'
import Container from '@/components/atoms/Container/container'
import AnchorTag from '../atoms/AnchorTag/AnchorTag';




export default function dashboard() {

 const BreadcrumbStyle = 'inline-block p-4 md:font-bold no-underline text-black';
    

  return (
    <div>
      <Header />
        <Container>
            <div className='breadcrumb'>
                <ul>
                  <li className={BreadcrumbStyle}>
                    <AnchorTag href="/">Home</AnchorTag>
                  </li> 
                  <li className={BreadcrumbStyle}>
                    <AnchorTag href="/">My Account</AnchorTag>
                  </li>
                </ul>
            </div>
            <div className='py-6'>
                <Heading level="3" >My Account</Heading>
            </div>
            <UserDetails />
        </Container>
      <Footer />
    </div>
  )
}
