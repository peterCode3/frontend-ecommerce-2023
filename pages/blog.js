import React, { useEffect, useState } from 'react'
import Heading from '@/components/atoms/Heading/Heading';
import Container from '@/components/atoms/Container/container';
import Footer from '@/components/template/Footer';
import Header from '@/components/template/Header';
import "@/../globals.css"


    const Blogs = () => {
        const  [Blogs, setBlogs] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:3000/api/blogs').then((a)=>{
                return a.json();})
            .then((parsed)=>{
                setBlogs(parsed);
            });
        }, []);
  
  
    return (
    <div>
        <Header />
            <Container>
                {Blogs.map((blogitem) => {
                    return <div>
                <Heading level="3">{blogitem.title}</Heading>
                <p>{blogitem.content}</p>
                <span>{blogitem.slug}</span>
                </div>
                })}
            </Container>
        <Footer />
    </div>
  )
};

export default Blogs