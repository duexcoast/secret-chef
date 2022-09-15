import { Container, SimpleGrid, createStyles, Title, Center, Space, Text } from '@mantine/core';
import Image from 'next/future/image';
import React from 'react';
import amy from '../public/amy.jpg';
import jeff from '../public/jeff.jpg';

const useStyles = createStyles((theme) => ({
  image: {
    objectFit: 'cover',
    objectPosition: 'top',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,
    marginBottom: 24,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 36,
    },
    '@media (max-width: 370px)': {
      fontSize: 30,
    },
  },
  description: {
    fontSize: theme.fontSizes.lg,
  },
  chefPics: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

export default function about() {
  const { classes } = useStyles();
  return (
    <Container size="lg">
      <Center>
        {' '}
        <Title className={classes.title}>About Us</Title>
      </Center>
      <SimpleGrid className={classes.chefPics} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} cols={2}>
        <div>
          <Image className={classes.image} src={amy} />
        </div>
        <div>
          <Image className={classes.image} src={jeff} />
        </div>
      </SimpleGrid>
      <Space h="md" />
      <Text className={classes.description}>
        Your Secret Chefs serves the greater Indianapolis area with specialized culinary services
        for the Foodservice Industry, and offers a customizable list of services.
        <Space h="md" />
        Your Secret Chefs is owned and managed by a professional Chef team that consist of Jeff
        White, CEC, CFSP and his wife Amy White, CEC, CFSP. The two hold Bachelor Degrees from
        Johnson and Wales University are Serve Safe Sanitation certified and members of The American
        Culinary Association.
        <Space h="md" />
        Chefs jeff and Amy have a passion for the Food Service Industry and enjoy serving the local
        community and look forward to serving you. Please feel free to contact them at
        information@yoursecretchefs.com or 317-258-4460 for additional information and a personal
        consultation.
      </Text>
      <Space h="md" />
    </Container>
  );
}
