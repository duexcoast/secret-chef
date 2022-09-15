import { Stack } from '@mantine/core';
import { IconPhone, IconMapPin, IconAt } from '@tabler/icons';
import { ContactIcon } from './ContactIcon';

type ContactIconVariant = 'white' | 'gradient';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  { title: 'Email', description: 'information@yoursecretchefs.com', icon: IconAt },
  { title: 'Phone', description: '(317) 258-4460', icon: IconPhone },
  { title: 'Address', description: 'Noblesville, IN 46062', icon: IconMapPin },
];

export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
  return <Stack>{items}</Stack>;
}
