import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Space,
  Stack,
  Container,
  Center,
} from '@mantine/core';
import Image from 'next/future/image';
import skewers from '../public/skewer.jpg';
import saltbae from '../public/saltbae.jpg';
import OurServicesImg from '../components/Images/our-services-img';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 36,
    },
    '@media (max-width: 370px)': {
      fontSize: 30,
    },
  },
  titletwo: {
    '@media (max-width: 500px)': {
      fontSize: 16,
    },
    '@media (max-width: 1130px)': {
      fontSize: 32,
    },
  },
  secret: {
    color: theme.colors.green,
  },
  heroImg: {
    marginBottom: 36,
    '@media (max-width: 1000px)': {
      height: 500,
      marginBottom: 24,
    },
  },
  colOne: {
    backgroundColor: theme.colors.green,
    color: 'white',
    padding: 24,
  },
  img: {
    objectFit: 'cover',
    objectPosition: 'top',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  description: {
    fontSize: theme.fontSizes.lg,
  },
  desc: {
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 12px',
    // alignItems: 'center',
  },
}));

export default function FeaturesTitle() {
  const { classes } = useStyles();

  return (
    <Container size="lg">
      <div className={classes.heroImg}>
        <OurServicesImg />
      </div>
      <Stack>
        <Center>
          <Title className={classes.title}>
            Your <span className={classes.secret}>Secret</span> Chefs.
          </Title>
        </Center>
        <Title order={1} className={classes.titletwo} align="center" mb="lg">
          <Center>Offering specialized culinary services to the greater Indianapolis area.</Center>
        </Title>
        <SimpleGrid breakpoints={[{ maxWidth: 'sm', cols: 1 }]} cols={2}>
          <div>
            <Image className={classes.img} src={skewers} />
          </div>
          <div className={classes.desc}>
            <Title order={2}>Experience You Can Trust</Title>
            <Space h="md" />
            <Text className={classes.description}>
              Providing a range of services, including recipe and menu assesment, equiptment
              selection, operation analysis and culinary training, Your Secret Chefs has been
              proudly serving the local community for 10 years.
              <Space h="md" />
              Chef&apos;s Jeff and Amy White bring their vast professional expertise and knowledge,
              and look forward to serving you.
            </Text>
          </div>
        </SimpleGrid>
        <SimpleGrid breakpoints={[{ maxWidth: 'sm', cols: 1 }]} cols={2}>
          <div className={classes.desc}>
            <Title order={2}>Some More Text Here</Title>
            <Space h="md" />
            <Text className={classes.description}>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              <Space h="md" />
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum{' '}
            </Text>{' '}
          </div>
          <div>
            <Image className={classes.img} src={saltbae} />
          </div>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
