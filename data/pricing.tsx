import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Precios',
  description:
    'Encuentra el plan para potenciar tu negocio',
  plans: [
    {
      id: 'COOPER',
      title: 'COPPER',
      description: 'Fideliza a clientes con nuestras tarjetas de fidelizacion',
      price: '¡Gratis!',
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
        
      ],
      action: {
        href: '/signup',
      },
    },
    {
      id: 'SILVER',
      title: 'SILVER',
      description: 'Ideal para grandes companias',
      price: '€18.99',
      isRecommended: true,
      features: [
        {
          title: '5 Recompensa por local',
        },
        {
          title: '3 locales',
        },
        {
          title: 'Usuarios 2000',
        },
        {
          title: 'Local destacado 🥈',
        },
        {
          title: 'Reconpensas multi-local',
        },
        
        null,
        {
          title: 'Soporte',
          iconColor: 'yellow.500',
        },
      ],
      action: {
        href: '/signup',
      },
    },
    {
      id: 'GOLD',
      title: 'GOLD',
      description: '¿Eres una compania que le importan sus clientes?',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €37.99
          </Text>
          <Text>€25.99</Text>
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
          title: 'Reconpensas multi-local',
        },
        {
          title: 'Integracion API',
        },
        null,
        {
          title: 'Soporte',
          iconColor: 'yellow.500',
        },
      ],
      action: {
        href: '/signup',
      },
    },
  ],
}
