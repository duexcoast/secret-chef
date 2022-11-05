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
}));

export default function about() {
  const { classes } = useStyles();
  return (
    <Container size="lg">
      <Center>
        {' '}
        <Title className={classes.title}>About Us</Title>
      </Center>
      <SimpleGrid cols={2}>
        <div>
          <Image className={classes.image} src={amy} priority />
        </div>
        <div>
          <Image className={classes.image} src={jeff} priority />
        </div>
      </SimpleGrid>
      <Space h="md" />
      <Title order={1} align="center" mb="lg">
        Your Secret Chefs offers specialized foodservice consulting to the greater Indianapolis
        area.
      </Title>
      <Text className={classes.description}>
        Your Secret Chefs is owned and managed by a professional Chef team that consists of Jeff
        White, CEC, CFSP and his wife Amy White, CEC, CFSP. The two hold Bachelor Degrees from
        Johnson and Wales University are Serve Safe Sanitation certified and members of The American
        Culinary Association.
        <Space h="md" />
        Chefs Jeff and Amy have a passion for the Food Service Industry and enjoy serving the local
        community and look forward to serving you. Please feel free to contact them at
        <Text span weight={600}>
          {' '}
          information@yoursecretchefs.com
        </Text>{' '}
        or{' '}
        <Text span weight={600}>
          317-258-4460
        </Text>{' '}
        for additional information and a free personal consultation.
      </Text>
      <Space h="md" />
    </Container>
  );
}
