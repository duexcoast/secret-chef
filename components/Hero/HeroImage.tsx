import { createStyles } from '@mantine/core';
import Image from 'next/future/image';
import React from 'react';
import hero from '../../public/saltbae.jpg';

const useStyles = createStyles(() => ({
  image: {
    objectFit: 'cover',
    objectPosition: 'top',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
}));
// const css = { width: '100%', height: 'auto' };
export default function HeroImage() {
  const { classes } = useStyles();
  return (
    <>
      <Image
        className={classes.image}
        src={hero}
        alt="Chef Amy and Chef Jeff preparing a delicious meal"
        priority
      />
    </>
  );
}
