import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { ArrowLeft } from "lucide-react";
import * as Styles from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const { white } = useTheme();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Styles.Container>
      <Styles.BackButton onClick={handleClick}>
        <ArrowLeft size={32} color={white} />
      </Styles.BackButton>
    </Styles.Container>
  );
};

export default Header;
