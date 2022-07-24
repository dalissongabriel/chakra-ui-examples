import { Center } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContainer({ children }: Props) {
  return (
    <Center h="100vh" bg={"gray.800"}>
      {children}
    </Center>
  );
}
