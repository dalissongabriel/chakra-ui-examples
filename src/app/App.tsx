import { Stack, Text } from "@chakra-ui/react";
import ButtonLink from "../components/ButtonLink";
import PageContainer from "../components/PageContainer";
import { ROUTES } from "../constants/RoutesConstants";

function App() {
  return (
    <PageContainer>
      <Stack maxW={"md"} w="full">
        <Stack textAlign={"center"}>
          <Text fontSize="4xl" fontWeight={"bold"} color={"teal"}>
            Chakra-UI
          </Text>
          <Text fontSize="3xl" fontWeight={"bold"} color={"gray.500"}>
            Examples
          </Text>
        </Stack>

        <Stack rounded="md" spacing={8} bg={"gray.700"} p={6}>
          <ButtonLink
            navigateTo={ROUTES.CARD}
            w={"100%"}
            variant="link"
            justifyContent={"flex-start"}
          >
            Card
          </ButtonLink>
          <ButtonLink
            navigateTo={ROUTES.FORM}
            w={"100%"}
            variant="link"
            justifyContent={"flex-start"}
          >
            Form
          </ButtonLink>
        </Stack>
      </Stack>
    </PageContainer>
  );
}

export default App;
