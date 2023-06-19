/* eslint-disable react/no-children-prop */
import {
  Stack,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function Contact() {
  return (
    
    <Container backgroundColor={"#f2f2f2"} maxW={"full"} mt={20}>
      
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"} pt={"40px"}>
        <Heading fontSize={"3xl"}>CONTACT US </Heading>
        <div className="decorateLineGray">
          <div className="decorateLineOrange"></div>
        </div>
        <Text color={"gray.600"} fontSize={"xl"}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        </Text>
      </Stack>
      <Container bg="#f2f2f2" maxW="full" centerContent overflow="hidden">
        <VStack>
          <Box
            bg="white"
            color="black"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 5 }}
          >
            <Box p={0}>
              <VStack>
                <WrapItem>
                  <Box>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 0 }}>
                      <HStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="black"
                          _hover={{ border: "2px solid black" }}
                          leftIcon={<MdPhone color="black" size="20px" />}
                        >
                          +91-988888888
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="black"
                          _hover={{ border: "2px solid black" }}
                          leftIcon={<MdEmail color="black" size="20px" />}
                        >
                          hello@abc.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="black"
                          _hover={{ border: "2px solid black" }}
                          leftIcon={
                            <MdLocationOn color="black" size="20px" />
                          }
                        >
                          Karnavati, India
                        </Button>
                      </HStack>
                    </Box>
                  
                  </Box>
                </WrapItem>
                <WrapItem width={"full"}>
                  <Box bg="white" borderRadius="lg" width={"full"}>
                    <Box m={8} color="#0B0E3F" >
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="orange"
                            color="white"
                            _hover={{bg:"green"}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Container>
  );
}
