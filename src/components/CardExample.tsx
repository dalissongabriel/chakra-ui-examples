import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

export default function Example() {
  return (
    <Box p={6} maxW="md" bg="gray.700" rounded="md">
      <Image
        borderRadius="md"
        src="https://bit.ly/2k1H1t6"
        fallback={<>"Loading"</>}
      />
      <Flex align="center" mt="2" p={1} bg={"gray.800"} rounded="sm">
        <Badge colorScheme="pink">PLUS</Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.400"
        >
          Verified &bull; Cape Town
        </Text>
      </Flex>
      <Text
        mt={2}
        fontSize="xl"
        fontWeight="semibold"
        lineHeight="short"
        color={"white"}
      >
        Modern, Chic Penthouse with Mountain, City & Sea Views
      </Text>
      <Text mt={2} color={"white"}>
        $119/night
      </Text>
      <Flex mt={2} align="center" color={"white"}>
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontSize="sm">
          <b>4.84</b> (190)
        </Text>
      </Flex>
    </Box>
  );
}
