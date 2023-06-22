import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    'Pay once and get life-time access to our high quality components.',
  plans: [
    {
      id: 'oss',
      title: 'COPPER',
      description: 'Basic compoents, perfect to get started.',
      price: 'Free',
      features: [
        {
          title: '1 Recompensas',
        },
        {
          title: '1 Local',
        },
        {
          title: '150 usuarios',
        },
        {
          title: '',
        },
        {
          title: '',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'bootstrap',
      title: 'SILVER',
      description: 'Complete frontend stack for bootstrappers and small teams.',
      price: '€14.99',
      isRecommended: true,
      features: [
        {
          title: '10 Recompensas',
        },
        {
          title: '2 locales',
        },
        {
          title: 'Usuarios Ilimitados',
        },
        {
          title: 'Local destacado 🥈',
        },
        {
          title: 'Reconpensas multi-local',
        },
        {
          title: '',
        },
        null,
        {
          title: 'Soporte',
          iconColor: 'yellow.500',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license',
      },
    },
    {
      id: 'startup',
      title: 'GOLD',
      description: 'Unlimited license for growing teams.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €47.99
          </Text>
          <Text>€25.98</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Recompensas ilimitadas',
        },
        {
          title: 'Locales ilimitados',
        },
        {
          title: 'Usuarios ilimitados',
        },
        {
          title: 'Local destacado 🥇',
        },
        {
          title: 'Integracion API',
        },
        {
          title: '',
        },
        null,
        {
          title: 'Soporte',
          iconColor: 'yellow.500',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license',
      },
    },
  ],
}
