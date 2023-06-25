const Section = {
  baseStyle: {
    pt: 28,
    pb: 28,
    px: [4, null],
  },
  variants: {
    subtle: {},
    solid: {
      bg: 'green.400',
    },
    alternate: ({ colorMode }: any) => ({
      bg: colorMode === 'dark' ? 'gray.800' : 'gray.50',
    }),
  },
  defaultProps: {
    variant: 'subtle',
  },
}

export default Section
