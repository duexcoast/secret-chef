import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  ThemeIcon,
  Grid,
  Col,
  Container,
} from '@mantine/core';
import {
  IconChefHat,
  IconMicrowave,
  IconBuildingStore,
  IconChartBar,
  IconToolsKitchen,
} from '@tabler/icons';
import Perfection from '../components/Images/perfection-img';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: IconChefHat,
    title: 'Recipe and Menu Assesment',
    description:
      'Menu development combines the best of culinary talents and practical kitchen skills. Whether you’re refreshing or fine tuning your current recipes or designing a brand menu we can help finalize your ideas',
  },
  {
    icon: IconMicrowave,
    title: 'Equiptment Selection',
    description:
      'We provide equipment advisory services for a single piece of equipment replacement to a full scale project.',
  },
  {
    icon: IconChartBar,
    title: 'Operations Analysis',
    description:
      'An operational analysis will give you a good overview of your restaurant’s current status. Our R.I.S.E – Restaurant Inspection & Service evaluation will tell you what areas you need to improve to run more successfully.',
  },
  {
    icon: IconBuildingStore,
    title: 'New Restaurant Start Up',
    description:
      'The process of creating a new restaurant concept can be an overwhelming. We’ll guide you through the process to ensure you have a successful start.',
  },
  {
    icon: IconToolsKitchen,
    title: 'Culinary Training',
    description:
      '70% of operators say they need help improving employee training. We learn what is important to you. Then as a third party we teach the importance of, showing up on time, the proper use of the tools they use, reducing waste and overall culinary skill.',
  },
];

export default function FeaturesTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 90, from: 'green', to: 'blue' }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container size="lg">
      <>
        <Perfection />
      </>
      <div className={classes.wrapper}>
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
              Our Services
            </Title>
            <Text mb="md">
              Our team knows mealtime is when we connect with one another. This is why we are
              committed to creating rich and engaging services for in the foodservice industry.
            </Text>

            <Text>
              Our goal is to design a service that fits the evolving needs of K-12, Restaurants and
              Corporate food service. Our approach to foodservice is different. We start by spending
              time getting to know your business and then only offering services that bring value to
              your company.
            </Text>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </div>
    </Container>
  );
}
