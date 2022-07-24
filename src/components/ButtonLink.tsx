import { Button, ButtonProps } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type Props = ButtonProps & {
  navigateTo: string;
  shouldLeftIcon?: Boolean;
};

const ButtonLink = ({ navigateTo, shouldLeftIcon = false, ...rest }: Props) => {
  const navigate = useNavigate();

  const handleNavigateTo = (route: string) => {
    navigate(route);
  };

  return (
    <Button
      leftIcon={
        rest.leftIcon ? (
          rest.leftIcon
        ) : shouldLeftIcon ? (
          <IoIosArrowBack />
        ) : (
          <></>
        )
      }
      {...rest}
      onClick={() => handleNavigateTo(navigateTo)}
    >
      {rest.children}
    </Button>
  );
};

export default ButtonLink;
