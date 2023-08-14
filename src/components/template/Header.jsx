import React from 'react';
import Logo from '../atoms/logo';
import Navbar from '../organism/navbar';
import Container from '../atoms/Container/container';

const Header = () => {
  const logoData = [
    { src: '/images/logo.png', alt: 'Ecommrce', href: '' },
    // Add more logo items as needed
  ];

  return (
    <header className='p-2 bg-gray-300'>
        <Container>
            <div className='inr-header flex justify-self-center	justify-between items-center'>
                <Logo logoData={logoData} />
                <Navbar />
            </div>
        </Container>
    </header>
  );
};

export default Header;
