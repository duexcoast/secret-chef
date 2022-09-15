import Image from 'next/image';
import React from 'react';
import hero from '../../public/saltbae.jpg';

export default function HeroImage() {
  return (
    <div>
      <Image src={hero} alt="Chef Jeff seasoning skewers on the grill" layout="intrinsic" />
    </div>
  );
}
