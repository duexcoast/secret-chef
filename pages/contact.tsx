import {
  Container,
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  Space,
} from '@mantine/core';
import { useState } from 'react';
import axios from 'axios';
import { ContactIconsList } from '../components/ContactIcons/ContactIconList';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundColor: theme.colors.green[8],
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][8],
  },
  successMessage: {
    color: theme.colors.green,
  },
}));

export default function ContactUs() {
  const { classes } = useStyles();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [buttonText, setButtonText] = useState('Send message');

  const [submitted, setSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setButtonText('Sending...');

    const messageData = { email, name, message };

    const res = await axios.post('/api/contact-form', messageData);
    if (res.status === 200) {
      setButtonText('Send message');
      setSubmitted(true);
      setEmail('');
      setName('');
      setMessage('');
      setShowSuccessMessage(true);
    } else {
      setButtonText('Send message');
      setSubmitted(true);
      setEmail('');
      setName('');
      setMessage('');
      setShowFailureMessage(true);
    }
  };

  return (
    <Container size="lg">
      <div className={classes.wrapper}>
        <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave us a message if you would like a free consultation and we will get back to you
              shortly.
            </Text>

            <ContactIconsList variant="white" />
          </div>
          <div className={classes.form}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                placeholder="your@email.com"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                placeholder="John Doe"
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                label="Your message"
                placeholder="Your message..."
                minRows={4}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />

              <Group position="right" mt="md">
                <Button type="submit" className={classes.control}>
                  {buttonText}
                </Button>
                {showFailureMessage ? (
                  <Text size="sm" color="red">
                    There was an error delivering your message.
                  </Text>
                ) : (
                  ''
                )}
                {showSuccessMessage ? (
                  <Text size="sm" className={classes.successMessage}>
                    Delivered successfully. We'll reach out to you soon.
                  </Text>
                ) : (
                  ''
                )}
              </Group>
            </form>
          </div>
        </SimpleGrid>
      </div>
      <Space h="lg" />
    </Container>
  );
}
