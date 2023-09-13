import * as Styles from "./styles";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ text, disabled, onClick }: ButtonProps) => {
  return (
    <Styles.Container onClick={onClick} disabled={disabled}>
      {text}
    </Styles.Container>
  );
};

export default Button;
