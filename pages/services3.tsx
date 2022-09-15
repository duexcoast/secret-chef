import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
} from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock, TablerIcon } from '@tabler/icons';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Recipe and Menu Assesment',
    description:
      'Menu development combines the best of culinary talents and practical kitchen skills. Whether you’re refreshing or fine tuning your current recipes or designing a brand menu we can help finalize your ideas',
  },
  {
    icon: IconUser,
    title: 'Equiptment Selection',
    description:
      'We provide equipment advisory services for a single piece of equipment replacement to a full scale project.',
  },
  {
    icon: IconCookie,
    title: 'Operations Analysis',
    description:
      'An operational analysis will give you a good overview of your restaurant’s current status. Our R.I.S.E – Restaurant Inspection & Service evaluation will tell you what areas you need to improve to run more successfully.',
  },
  {
    icon: IconLock,
    title: 'New Restaurant Start Up',
    description:
      'The process of creating a new restaurant concept can be an overwhelming. We’ll guide you through the process to ensure you have a successful start.',
  },
  {
    icon: IconMessage2,
    title: 'Culinary Training',
    description:
      '70% of operators say they need help improving employee training. We learn what is important to you. Then as a third party we teach the importance of, showing up on time, the proper use of the tools they use, reducing waste and overall culinary skill.',
  },
];

interface FeatureProps {
  icon: TablerIcon;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={20} stroke={1.5} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{title}</Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export default function FeaturesGrid({ title, description, data = MOCKDATA }: FeaturesGridProps) {
  const { classes, theme } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
