const CTA = {
  parts: ['wrapper', 'title', 'action', 'secondaryAction'],
  baseStyle: {
    wrapper: {
      pt: 28,
      pb: 28,
    },
    action: {
      colorScheme: 'green',
    },
    secondaryAction: {
      colorScheme: 'green',
      variant: 'ghost',
    },
  },
  variants: {
    subtle: {},
    solid: {
      wrapper: {
        bg: 'green.400',
      },
      secondaryAction: {
        colorScheme: 'white',
      },
    },
    light: ({ colorMode }: any) => ({
      wrapper: {
        bg: colorMode === 'dark' ? 'gray.700' : 'gray.100',
      },
    }),
  },
  defaultProps: {
    variant: 'subtle',
  },
}

export default CTA
