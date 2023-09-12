import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import * as Styles from "./styles";

interface ServiceItemProps {
  Icon: ReactNode;
  title: string;
  description: string;
  url: string;
}

const ServiceItem = ({ Icon, title, description, url }: ServiceItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  return (
    <Styles.Container onClick={handleClick}>
      {Icon}
      <Styles.About>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>
      </Styles.About>
    </Styles.Container>
  );
};

export default ServiceItem;
