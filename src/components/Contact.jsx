import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import ContactImage from '../assets/contact.jpeg';

function Contact() {
  const bgColor = useColorModeValue(
    'background.lightSecondary',
    'background.darkPrimary',
  );

  const formBgColor = useColorModeValue(
    'surface.light',
    'background.darkSecondary',
  );

  return (
    <Container
      as="section"
      id="contato"
      direction="column"
      minW="100%"
      px={0}
      position="relative"
    >
      <Box
        flex="1"
        h={{ base: '0', md: 'sm' }}
        w="full"
        backgroundImage={`url(${ContactImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />

      <Box flex="1" h={{ base: '2xl', md: 'xs' }} w="full" bg={bgColor} />

      <Box
        as="form"
        bg={formBgColor}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="10"
        h={{ base: 'xl', md: 'md' }}
        w={{ base: 'full', md: '2xl' }}
        px={{ base: 9, md: 12 }}
        py={9}
        shadow="lg"
      >
        <VStack spacing={10}>
          <Heading fontSize={{ base: 22, md: 24 }} fontWeight="normal">
            Deixe uma mensagem
          </Heading>

          <Flex
            direction="column"
            justifyContent="space-between"
            w="full"
            gap={10}
          >
            <Flex direction={{ base: 'column', md: 'row' }} flex="1" gap={10}>
              <FormControl isRequired>
                <FormLabel fontWeight="light">Nome</FormLabel>

                <Input
                  variant="flushed"
                  focusBorderColor="brand.700"
                  rounded="0"
                  w="full"
                  size="sm"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="light">Email</FormLabel>

                <Input
                  variant="flushed"
                  mode="dark"
                  focusBorderColor="brand.700"
                  rounded="0"
                  w="full"
                  size="sm"
                />
              </FormControl>
            </Flex>

            <FormControl flex="1" isRequired>
              <FormLabel fontWeight="light">Mensagem</FormLabel>

              <Textarea
                placeholder="Escreva sua mensagem aqui..."
                focusBorderColor="brand.700"
                variant="flushed"
                rounded="0"
                size="sm"
                resize="none"
              />
            </FormControl>

            <Button variant="cta">Enviar</Button>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
}

export default Contact;
