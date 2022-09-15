import React from 'react';
import { HeaderMiddle } from './header';

export default function Layout({ children }) {
  const links = [
    { label: 'About', link: 'about' },
    { label: 'Services', link: 'services' },
  ];

  return (
    <>
      <HeaderMiddle links={links} />
      <main>{children}</main>
    </>
  );
}
