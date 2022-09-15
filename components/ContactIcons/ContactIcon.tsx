import { createStyles, ThemeIcon, Text, Box } from '@mantine/core';

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  title: {
    color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === 'gradient' ? theme.black : theme.white,
  },
}));

type ContactIconVariant = 'white' | 'gradient';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}
interface ContactIconStyles {
  variant: ContactIconVariant;
}

export function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = 'gradient',
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === 'gradient' ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}
