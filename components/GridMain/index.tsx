import React from 'react';
import { createStyles } from '@mantine/core';
import Image from 'next/future/image';
import saltbae from '../../public/saltbae.jpg';

const useStyles = createStyles((theme) => ({
  container: {
    // height: 400,
    display: 'grid',
    gridTemplateColumns: '5fr 4fr',
    gridTemplateRows: '2fr 3fr',
    gridTemplateAreas: `
                      'text image'
                      'text image'
                      `,
    // backgroundColor: theme.colors.green,
  },
  saltBae: {
    gridArea: 'image',
  },
  img: {
    objectFit: 'cover',
    objectPosition: 'top',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
}));

export default function GridMain() {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.saltBae}>
        {/* <Image className={classes.img} src={saltbae} /> */}
      </div>
    </div>
  );
}
