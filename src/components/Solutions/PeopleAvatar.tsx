import { Avatar, Text, Box, Flex, keyframes, Container, Stack, Heading, VStack } from '@chakra-ui/react';

export default function PeopleAvatar() {
  const size = '96px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <VStack
      justifyContent="center"
      alignItems="center"
      h="250px"
      w="full"
      overflow="hidden">
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        >
        <Avatar
          src="https://i.pravatar.cc/300"
          size="full"
          position="absolute"
          top={0}
        />
      </Box>
      <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
        >
          <Heading fontSize={"2xl"}>{"Quản lý sản xuất trong may mặc"}</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Text>
        </Stack>
    </VStack>
  );
}