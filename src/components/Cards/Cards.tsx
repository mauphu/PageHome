/* eslint-disable jsx-a11y/alt-text */
import {
  Heading,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { ReactElement } from "react";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
  imgs: string;
}

export default function Card ({ heading, description, icon, href,imgs }: CardProps) {
  return (
    <Center py={6}>
      <motion.div
        initial={{ y: 300 }}
        whileInView={{ y: 15 }}
        transition={{ type: "spring", damping: 30}}
        viewport={{ once: true }}
      >
      <Box
        maxW={"350px"}
        w={"full"}
        h={"500px"}
        bg={useColorModeValue("white", "red.800")}
        boxShadow={"3xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"200px"}
          w={"full"}
          src={
            imgs
          }
          objectFit={"cover"}
          
        />
        <Flex justify={"center"} mt={-12} color={"white"} _hover={{color:"white"}}>
        <Center
            backgroundColor={"Darkorange"}
            rounded={"100%"}
            boxSize={"60px"}
          >
           {icon}
          </Center>
        </Flex>
        <Box p={6} cursor={"pointer"}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading mt={"10px"} fontSize={"2xl"} fontWeight={500} fontFamily={"body"} _hover={{color :"Darkorange"}} >
              {heading}
            </Heading>
            <Text mt={"10px"} color={"white.500"}>{description}</Text>
          </Stack>
        </Box>
      </Box>
      </motion.div>
    </Center>
  );
};
