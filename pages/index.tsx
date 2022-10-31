import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Space,
  Stack,
  Container,
  Center,
  Anchor,
} from '@mantine/core';
import Image from 'next/future/image';
import Link from 'next/link';
import skewers from '../public/skewer.jpg';
import saltbae from '../public/saltbae2.jpg';
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
  href: {
    color: theme.colors.green,
  },
}));

export default function FeaturesTitle() {
  const { classes } = useStyles();

  return (
    <Container size="lg">
      {/* <div className={classes.heroImg}>
        <OurServicesImg />
      </div> */}
      <Stack>
        <Center>
          <Title className={classes.title}>
            Who is Your <span className={classes.secret}>Secret</span> Chefs?
          </Title>
        </Center>
        <Space h="md" />
        <SimpleGrid breakpoints={[{ maxWidth: 'sm', cols: 1 }]} cols={2}>
          <div className={classes.desc}>
            <Text className={classes.description}>
              Your Secret Chefs is your strategic food service consultative partner, we help our
              clients understand their vision by offering consulting that allows them to focus on
              maintaining a successful business. Chefs Jeff and Amy are experienced foodservice
              professionals who partner with you and your staff.
              <Space h="md" />
              They will work with you to create programs and standards that help to maximize
              profits, reduce expenses, and control food and beverage costs. Your Secret Chefs works
              in all facets of the foodservice industry, you are our partner, and we will customize
              our consulting to work for you!
            </Text>
          </div>
          <div className={classes.heroImg}>
            <OurServicesImg />
          </div>
        </SimpleGrid>
        <Space h="md" />
        <Title order={1} className={classes.titletwo} align="center" mb="lg">
          <Center>
            Offering specialized foodservice consulting to the greater Indianapolis area.
          </Center>
        </Title>
        <Space h="md" />
        <SimpleGrid breakpoints={[{ maxWidth: 'sm', cols: 1 }]} cols={2}>
          <div>
            <Image className={classes.img} src={skewers} />
          </div>
          <div className={classes.desc}>
            <Title order={1}>
              <Center>Experience You Can Trust</Center>
            </Title>
            <Space h="md" />
            <Text className={classes.description}>
              Providing a range of services, including recipe and menu assesment, equiptment
              selection, operation analysis and culinary training, Your Secret Chefs has been
              proudly serving the local community for 20 years.
              <Space h="md" />
              Chef&apos;s Jeff and Amy White bring their vast professional expertise and knowledge,
              and look forward to serving you.
            </Text>
          </div>
        </SimpleGrid>
        <Space h="md" />
        <SimpleGrid breakpoints={[{ maxWidth: 'sm', cols: 1 }]} cols={2}>
          <div className={classes.desc}>
            <Space h="md" />
            <Center>
              <Title order={1}>R.I.S.E.</Title>
            </Center>
            <Center>
              <Title order={2}>Restaurant Inspection & Service Evaluation</Title>
            </Center>
            <Space h="md" />
            <Text className={classes.description}>
              Building a successful business is based on the customer experience, satisfaction, and
              return visits. Being reviewed is critical in today’s demanding world; if your
              customers are not happy, they won’t return. They may also spread the news to their
              family, friends, and to everyone online.
              <Space h="md" />
              Let Your Secret Chefs complete a discrete inspection and evaluation of your operation
              from the customers viewpoint. We can customize our evaluation of your business to
              cover only what you want us to. For a free consultation complete the{' '}
              <Link href="/contact" passHref>
                <Anchor component="a">contact us form.</Anchor>
              </Link>{' '}
            </Text>
          </div>
          <div>
            <Image className={classes.img} src={saltbae} />
          </div>
        </SimpleGrid>
        <Space h="md" />
      </Stack>
    </Container>
  );
}
