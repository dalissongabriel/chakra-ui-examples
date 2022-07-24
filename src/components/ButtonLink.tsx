import { Button, ButtonProps } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type Props = ButtonProps & {
  navigateTo: string;
};

const ButtonLink = ({ navigateTo, ...rest }: Props) => {
  const navigate = useNavigate();

  const handleNavigateTo = (route: string) => {
    navigate(route);
  };

  return (
    <Button
      colorScheme={rest.colorScheme || "blue"}
      leftIcon={rest.leftIcon || <IoIosArrowBack />}
      width={rest.width || "140px"}
      {...rest}
      onClick={() => handleNavigateTo(navigateTo)}
    >
      {rest.children}
    </Button>
  );
};

export default ButtonLink;
