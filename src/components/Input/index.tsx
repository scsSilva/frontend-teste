import { InputHTMLAttributes, forwardRef } from "react";
import * as Styles from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...rest }, ref) => {
    return <Styles.Container placeholder={placeholder} ref={ref} {...rest} />;
  }
);

export default Input;
