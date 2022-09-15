import React from 'react';
import { HeaderMiddle } from './Header/header';
import Footer from './Footer';

export default function Layout({ children }: any) {
  // const links = [
  //   { label: 'Home', link: '/' },
  //   { label: 'About', link: 'about' },
  //   { label: 'Services', link: 'services' },
  //   { label: 'Contact', link: 'contact' },
  // ];

  return (
    <>
      <HeaderMiddle />
      <main>{children}</main>
      <Footer />
    </>
  );
}
