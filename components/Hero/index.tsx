import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  Grid,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
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
  // column: {
  //   backgroundColor: 'black',
  // },
}));

export default function Hero() {
  const { classes } = useStyles();
  return (
    <div>
      <Container size="lg">
        <Grid grow gutter="xl">
          <Grid.Col order={2} orderSm={2} orderMd={2} orderLg={1} md={6} lg={4}>
            <Title className={classes.title}>Your Secret Chefs.</Title>
          </Grid.Col>
          <Grid.Col order={1} orderSm={1} orderMd={2} orderLg={1} md={6} lg={4}>
            <HeroImage />
          </Grid.Col>
        </Grid>
        {/* <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Specialized culinary services.</Title>
            <Text color="dimmed" mt="md">
              Your Secret Chefs serves the greater Indianapolis area with specialized culinary
              services for the Foodservice Industry. Your Secret Chefs offers a customizable list of
              services
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all components and hooks
                export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                keyboard
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
          <Group>
            <HeroImage />
          </Group>
        </div> */}
      </Container>
    </div>
  );
}
