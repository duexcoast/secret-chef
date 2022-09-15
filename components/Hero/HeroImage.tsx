import Image from 'next/image';
import React from 'react';
import hero from '../../public/saltbae.jpg';

export default function HeroImage() {
  return (
    <div>
      <Image
        src={hero}
        alt="Chef Jeff seasoning skewers on the grill"
        layout="intrinsic"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </div>
  );
}
