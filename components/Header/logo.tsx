import React from 'react';
import { Title, createStyles } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  secret: {
    color: theme.colors.green[8],
  },
}));

export default function Logo() {
  const { classes } = useStyles();

  return (
    <Link passHref href="/" legacyBehavior>
      <a style={{ textDecoration: 'none' }}>
        <Title inherit order={1} color="green.8" style={{ fontWeight: 'bold' }}>
          Your<span className={classes.secret}>Secret</span>Chefs
        </Title>
      </a>
    </Link>
  );
}
