import { createStyles, Container, Title, Grid, Stack } from '@mantine/core';
import HeroImage from './HeroImage';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
  imageCol: {
    '@media (max-width: 1000px)': {
      height: 700,
      border: 'medium black',
    },
  },
  copyCol: {
    height: '100%',
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  return (
    <div>
      <Container size="lg">
        <Grid grow gutter="xl">
          <Grid.Col order={2} orderSm={2} orderMd={2} orderLg={1} md={6} lg={4}>
            <Stack className={classes.copyCol} justify="center">
              <Title className={classes.title}>Your Secret Chefs.</Title>
              <Title className={classes.title}>Your Secret Chefs.</Title>
              <Title className={classes.title}>Your Secret Chefs.</Title>
            </Stack>
          </Grid.Col>
          <Grid.Col
            className={classes.imageCol}
            order={1}
            orderSm={1}
            orderMd={2}
            orderLg={1}
            md={6}
            lg={4}
          >
            <HeroImage />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
