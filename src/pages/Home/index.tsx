import { Car, Coins, ListOrdered, MapPin } from "lucide-react";
import ServiceItem from "./components/ServicesItem";
import * as Styles from "./styles";

const Home = () => {
  return (
    <Styles.Container>
      <Styles.MainContent>
        <Styles.List>
          <li>
            <ServiceItem
              url={"/services/"}
              title="Consultar CEP"
              description="Obtenha informações sobre determinado CEP"
              Icon={<MapPin />}
            />
          </li>
          <li>
            <ServiceItem
              url={"/services/cashFlow"}
              title="Calcular troco"
              description="Calcule o troco de uma compra."
              Icon={<Coins />}
            />
          </li>
          <li>
            <ServiceItem
              url={"/services/palindrome"}
              title="Números palíndromos"
              description="Liste números dentro de um intervalo."
              Icon={<ListOrdered />}
            />
          </li>
          <li>
            <ServiceItem
              url={"/services/garage"}
              title="Garagem"
              description="Cadastre informações dos seus veículos"
              Icon={<Car />}
            />
          </li>
        </Styles.List>
      </Styles.MainContent>
    </Styles.Container>
  );
};

export default Home;
