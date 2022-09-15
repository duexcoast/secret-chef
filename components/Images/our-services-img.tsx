import { createStyles } from '@mantine/core';
import Image from 'next/future/image';
import React from 'react';
import jeffandamy from '../../public/try.jpg';

const useStyles = createStyles(() => ({
  image: {
    objectFit: 'cover',
    objectPosition: 'top',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
}));

export default function OurServicesImg() {
  const { classes } = useStyles();
  return (
    <>
      <Image
        className={classes.image}
        src={jeffandamy}
        alt="Chef Jeff seasoning skewers on the grill"
        priority
      />
    </>
  );
}
