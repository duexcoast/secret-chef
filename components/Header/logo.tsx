import React from 'react';
import { Title, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  secret: {
    color: theme.colors.green[8],
  },
}));

export default function Logo() {
  const { classes } = useStyles();

  return (
    <Title order={3} color="green.8" style={{ fontWeight: 'bold' }}>
      Your<span className={classes.secret}>Secret</span>Chefs
    </Title>
  );
}
