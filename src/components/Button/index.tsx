import { ChangeEventHandler } from "react";
import * as Styles from "./styles";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: ChangeEventHandler;
}

const Button = ({ text, disabled, onClick }: ButtonProps) => {
  return <Styles.Container disabled={disabled}>{text}</Styles.Container>;
};

export default Button;
