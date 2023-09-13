import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { ICep } from "../..";
import * as Styles from "./styles";
import { useState } from "react";

interface BadgeCepProps {
  title: string;
  info: ICep;
}

const BadgeCep = ({ title, info }: BadgeCepProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Styles.Container
      expand={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <MapPin size={32} />

      <Styles.Content>
        <Styles.Title>{title}</Styles.Title>
        <Styles.List expand={isExpanded}>
          <li>
            <p>CEP: {info.cep}</p>
            <p>Logradouro: {info.logradouro}</p>
            <p>Complemento: {info.complemento}</p>
            <p>Bairro: {info.bairro}</p>
            <p>Localidade: {info.localidade}</p>

            <p>UF: {info.uf}</p>
            <p>IBGE: {info.ibge}</p>
            <p>GIA: {info.gia}</p>
            <p>DDD: {info.ddd}</p>
            <p>SIAFI: {info.siafi}</p>
          </li>
        </Styles.List>
      </Styles.Content>

      {isExpanded ? <ChevronUp /> : <ChevronDown />}
    </Styles.Container>
  );
};

export default BadgeCep;
