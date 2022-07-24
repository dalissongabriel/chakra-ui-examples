import { Stack } from "@chakra-ui/react";
import ButtonLink from "../../../components/ButtonLink";
import CardExample from "../../../components/CardExample";
import PageContainer from "../../../components/PageContainer";
import { ROUTES } from "../../../constants/RoutesConstants";

export default function CardScreen() {
  return (
    <>
      <PageContainer>
        <Stack>
          <ButtonLink
            navigateTo={ROUTES.HOME}
            colorScheme={"teal"}
            shouldLeftIcon
            width={"140px"}
          >
            Back
          </ButtonLink>
          <CardExample />
        </Stack>
      </PageContainer>
    </>
  );
}
