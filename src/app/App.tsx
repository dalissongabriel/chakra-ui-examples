import {
  Box,
  Center,
  Divider,
  Flex,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/RoutesConstants";

function App() {
  return (
    <Center h={"100vh"}>
      <Flex direction={"column"} rowGap={30}>
        <Text fontSize="3xl" fontWeight={"bold"}>
          Chakra-UI Examples
        </Text>

        <Box p="5" maxW="320px" borderWidth="1px">
          <List display={"flex"} flexDir="column" as={"nav"}>
            <ListItem _hover={{ color: "blue.300", fontWeight: "semibold" }}>
              <Link to={ROUTES.CARD}>Card</Link>
            </ListItem>
            <Divider my={2} />
            <ListItem _hover={{ color: "blue.300", fontWeight: "semibold" }}>
              <Link to={ROUTES.FORM}>Form</Link>
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Center>
  );
}

export default App;
