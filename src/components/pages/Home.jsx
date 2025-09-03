import React from 'react';
import MiniNavbar from '../layout/MiniNavbar';
import Hero from '../sections/Hero';
import '../../css/style.css';

export default function Home() {
  return (
    <div className='pt-10'>
      <MiniNavbar />
      <Hero />
    </div>
  );
}
