import { Banknote } from "lucide-react";
import * as Styles from "./styles";

interface BadgeProps {
  title: string;
  value: number;
}

const Badge = ({ title, value }: BadgeProps) => {
  return (
    <Styles.Container>
      <Banknote size={48} />

      <Styles.Content>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Value>{value}</Styles.Value>
      </Styles.Content>
    </Styles.Container>
  );
};

export default Badge;
