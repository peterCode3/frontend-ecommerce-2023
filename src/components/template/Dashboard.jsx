import React from 'react'
import Header from '@/components/template/Header'
import "@/../globals.css"
import Footer from '@/components/template/Footer'
import UserDetails from '@/components/organism/userdetails'
import Heading from '@/components/atoms/Heading/Heading'
import Container from '@/components/atoms/Container/container'
import Link from 'next/link';



export default function dashboard() {

 const BreadcrumbStyle = {
    display: 'inline-block',
    padding: '10px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
 }


  return (
    <div>
      <Header />
        <Container>
            <div className='breadcrumb'>
                <ul>
                  <li style={BreadcrumbStyle}>
                    <Link href="/">Home</Link>
                  </li> 
                  <li style={BreadcrumbStyle}>
                    <Link href="/">My Account</Link>
                  </li>
                </ul>
            </div>
            <Heading level="3" >My Account</Heading>
            <UserDetails />
        </Container>
      <Footer />
    </div>
  )
}
