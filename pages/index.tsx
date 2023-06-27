import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBarChart2,
  FiCloud,
  FiDollarSign,
  FiFeather,
  FiGrid,
  FiMap,
  FiNavigation2,
  FiSlack,
  FiSliders,
  FiSmile,
  FiTrello,
  FiTrendingUp,
  FiUserCheck,
  FiUserPlus,
  FiZap,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="DescuentifyApp"
        description="Tarjetas de fidelizacion online"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        {/* <TestimonialsSection /> */}

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Bienvenidos a la
                <Br /> Revolución de la
                <Em color='green'> Fidelización</Em>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Crea recompensas para tus clientes y gana trafico!
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
              <FallInPlace delay={0.4} fontWeight="black">
                <Em pr={2}>|</Em> Hacer que vuelvas
              </FallInPlace>
              </HStack>

              <ButtonGroup spacing={4} alignItems="center" >
                <ButtonLink colorScheme="green" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/signup"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                {/* change-img */}
                <Image
                  src="/static/images/mobileapp.png"
                  //layout="fixed"
                  width={600}
                  height={600}
                  alt="Screenshot of Descuentify app"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 3]}
        iconSize={6}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Simple",
            icon: FiSmile,
            description: "Con una interfaz intuitiva y fácil de usar, configurar y gestionar tu programa de recompensas nunca ha sido tan sencillo. Olvídate de complicaciones y dedica más tiempo a hacer crecer tu negocio mientras Descuentify se encarga de mantener a tus clientes comprometidos y felices.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Rapido",
            icon: FiZap,
            description:
              "Implementa el programa de fidelización en cuestión de minutos. Otorga recompensas de forma instantánea y observa cómo tus clientes se mantienen leales a tu negocio en un abrir y cerrar de ojos. No pierdas tiempo, acelera tu éxito.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Rentable",
            icon: FiDollarSign,
            description:
              "No solo fortaleces la lealtad de tus clientes, sino que también obtienes un retorno de inversión significativo. Atrae a nuevos clientes, aumenta tus ventas y maximiza tus ganancias.Te brindamos la estrategia ideal para un crecimiento rentable y sostenible.",
            iconPosition: "left",
            delay: 1,
          },

        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Nuestra mision">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
           
            Descuentify tiene como objetivo recompensar la lealtad de los clientes a través de recompensas especiales y descuentos exclusivos. Sabemos que en un mercado competitivo como el actual, los consumidores tienen muchas opciones. Reconocer y recompensar su lealtad es fundamental para mantenerlos comprometidos con una marca en particular.
          </Text>

          
        </VStack>
      </HighlightsItem>

      <HighlightsItem title="Tarjetas de fidelizacion">
        <Text color="muted" fontSize="lg">
        Las tarjetas de fidelización online permiten a los usuarios acumular puntos mediante el escaneo de códigos QR.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="TARJETA"
        description="CEREZA"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "green.500"]}
      >
        “PONER UNA RECOMPENSA DE EJEMPLO”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Revolucionario 🚀"
      >
        <Text color="muted" fontSize="lg">
          Conocer a tus clientes y hacer que vuelvan, nunca fue tan facil. Si te identificas con alguna de estas categorias de empresa, unite a la revolucion.
        </Text>
        <Wrap mt="8">
          {[
            "Restaurantes",
            "Coctelerias",
            "Medicos particulares",
            "Masajistas",
            "Indumentaria",
            "Supermerkat",
            "Librerias",
            "Hotel",
            "Coffe-shop",
            "Comida rapida",
            "Floreria",
            "Ecommers",
            "Ferreteria",
            "Servicio de limpieza",
            "Lavanderia",
            "Discotecas",
            "Y muchas mas...",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="green"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          ¿Porque tener Descuentify?
          <Br /> <Em color='green.500'>¡Es gratis!</Em>
        </Heading>
      }
      description={
        <>
          Dile adiós a los métodos tradicionales y descubre cómo nuestra app revoluciona la forma en que premias a tus clientes.
          <Br />
          ¡Convierte tu negocio en un referente digital y comienza a cosechar los beneficios de la tecnología con Descuentify!.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Trafico.",
          icon: FiNavigation2,
          description:
            "Potencia la visibilidad de tu negocio y capta la atención de un mayor número de personas.",
          variant: "inline",
        },
        {
          title: "Fidelizacion.",
          icon: FiUserCheck,
          description:
            "Con ella, podrás ofrecerles beneficios exclusivos, recompensas personalizadas y promociones especiales.",
          variant: "inline",
        },
        {
          title: "Estadisticas.",
          icon: FiTrello,
          description:
            "Obtén información valiosa y detallada sobre tus ventas, clientes y rentabilidad de las recompensas.",
          variant: "inline",
        },
        {
          title: "Publicidad.",
          icon: FiTrendingUp,
          description:
            "Aprovecha  las herramientas de segmentación y las estrategias publicitarias personalizadas",
          variant: "inline",
        },
        {
          title: "AI.",
          icon: FiSlack,
          description:
            "Una variedad imensa de opciones de fidelazion, Recompensas, Descuentos, Tarjetas de regalo, Servicios y aun mas.",
          variant: "inline",
        },
        {
          title: "Ranking.",
          icon: FiBarChart2,
          description:
            "Obtén una visión clara de tu posición en comparación con la competencia y motiva a tus clientes a alcanzar los primeros puestos..",
          variant: "inline",
        },
        {
          title: "API.",
          icon: FiCloud,
          description:
            "Obtendrás un mayor control y flexibilidad para adaptar nuestra app a tus necesidades específicas, optimizando así tu experiencia empresarial.",
          variant: "inline",
        },
        {
          title: "Internacional.",
          icon: FiMap,
          description: 
          "Brindar recompensas en cualquier país. Premia a tus clientes en todo el mundo con regalos especiales.",
          variant: "inline",
        },
        {
          title: "Amigable con el ecosistema.",
          icon: FiFeather,
          description:
            "Empieza a cuidar el planeta avanzando a una etapa digital, dejando las tarjetas de carton en el pasado.",
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        {/* VAT may be applicable depending on your location. */}
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

// export async function getStaticProps() {
//   return {
//     props: {
//       announcement: {
//         title: "Support us by becoming a stargazer! 🚀 ",
//         description:
//           '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
//         href: "https://github.com/saas-js/saas-ui",
//         action: false,
//       },
//     },
//   };
// }
