import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { api } from "../../utils/api";
import * as Styles from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import BadgeCep from "./components/BadgeCep";

const searchCepFormValidationSchema = zod.object({
  firstCep: zod.number().min(8, "CEP inválido!"),
  secondCep: zod.number().min(8, "CEP inválido!"),
  thirdCep: zod.number().min(8, "CEP inválido!"),
  fourthCep: zod.number().min(8, "CEP inválido!"),
  fifthCep: zod.number().min(8, "CEP inválido!"),
});

type SearchCepFormData = zod.infer<typeof searchCepFormValidationSchema>;

export interface ICep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface ISearchCepData {
  address: Array<ICep>;
}

const SearchCep = () => {
  const [searchCepData, setSearchCepData] = useState<ISearchCepData | null>(
    null
  );

  const searchCepForm = useForm<SearchCepFormData>({
    resolver: zodResolver(searchCepFormValidationSchema),
  });

  const {
    handleSubmit,
    watch,
    reset,
    register,
    formState: { errors },
  } = searchCepForm;

  const firstCep = watch("firstCep");
  const secondCep = watch("secondCep");
  const thirdCep = watch("thirdCep");
  const fourthCep = watch("fourthCep");
  const fifthCep = watch("fifthCep");
  const isSubmitDisabled = false;

  const handleSearchAddress = async () => {
    Promise.all([
      api.get(`https://viacep.com.br/ws/${firstCep}/json`),
      api.get(`https://viacep.com.br/ws/${secondCep}/json`),
      api.get(`https://viacep.com.br/ws/${thirdCep}/json`),
      api.get(`https://viacep.com.br/ws/${fourthCep}/json`),
      api.get(`https://viacep.com.br/ws/${fifthCep}/json`),
    ]).then((response) => {
      const data: ISearchCepData = { address: [] };

      data.address.push(response[0].data);
      data.address.push(response[1].data);
      data.address.push(response[2].data);
      data.address.push(response[3].data);
      data.address.push(response[4].data);

      setSearchCepData(data);
    });
    reset();
  };

  return (
    <Styles.Container>
      <div>
        <Styles.Title>Consultar CEP</Styles.Title>
      </div>

      {searchCepData != null ? (
        <Styles.ContentData>
          <Styles.ListData>
            {searchCepData.address.map((item) => {
              return (
                <li key={item.cep}>
                  <BadgeCep info={item} title={item.cep} />
                </li>
              );
            })}
          </Styles.ListData>

          <Button text="Voltar" onClick={() => setSearchCepData(null)} />
        </Styles.ContentData>
      ) : (
        <Styles.Form onSubmit={handleSubmit(handleSearchAddress)}>
          <FormProvider {...searchCepForm}>
            <Input
              placeholder="Primeiro CEP (apenas números)"
              type="number"
              step={1}
              {...register("firstCep", { valueAsNumber: true })}
            />
            <span>{errors.firstCep?.message}</span>

            <Input
              placeholder="Segundo CEP (apenas números)"
              type="number"
              step={1}
              {...register("secondCep", { valueAsNumber: true })}
            />
            <span>{errors.secondCep?.message}</span>

            <Input
              placeholder="Terceiro CEP (apenas números)"
              type="number"
              step={1}
              {...register("thirdCep", { valueAsNumber: true })}
            />
            <span>{errors.thirdCep?.message}</span>

            <Input
              placeholder="Quarto CEP (apenas números)"
              type="number"
              step={1}
              {...register("fourthCep", { valueAsNumber: true })}
            />
            <span>{errors.fourthCep?.message}</span>

            <Input
              placeholder="Quinto CEP (apenas números)"
              type="number"
              step={1}
              {...register("fifthCep", { valueAsNumber: true })}
            />
            <span>{errors.fifthCep?.message}</span>

            <Button text="Consultar" disabled={isSubmitDisabled} />
          </FormProvider>
        </Styles.Form>
      )}
    </Styles.Container>
  );
};

export default SearchCep;
