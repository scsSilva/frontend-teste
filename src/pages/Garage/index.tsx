import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { api } from "../../utils/api";
import * as Styles from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const garageFormValidationSchema = zod.object({
  model: zod.string(),
  year: zod.number().refine(
    (value) => {
      const yearString = value.toString();
      return yearString.length === 4 && !isNaN(value);
    },
    {
      message: "Ano deve possui exatamente 4 dígitos",
    }
  ),
  brand: zod.string(),
  ports: zod
    .number()
    .min(2, "O carro deve ter, no mínimo, 2 portas")
    .max(4, "O carro deve ter, no máximo, 4 portas")
    .optional(),
});

type GarageFormData = zod.infer<typeof garageFormValidationSchema>;

const Garage = () => {
  const [type, setType] = useState<"CARRO" | "MOTO">("CARRO");

  const garageForm = useForm<GarageFormData>({
    resolver: zodResolver(garageFormValidationSchema),
  });

  const {
    handleSubmit,
    watch,
    reset,
    register,
    formState: { errors },
  } = garageForm;

  const model = watch("model");
  const year = watch("year");
  const brand = watch("brand");
  const ports = watch("ports");
  let isSubmitDisabled = !(model && year && brand);

  if (type === "CARRO") {
    isSubmitDisabled = !(model && year && brand && ports);
  }

  const handleClickGarageForm = async () => {
    let dataRequest;

    if (type === "CARRO") {
      dataRequest = {
        type,
        modelo: model,
        ano: year,
        marca: brand,
        portas: ports,
      };
    } else if (type === "MOTO") {
      dataRequest = {
        type,
        modelo: model,
        ano: year,
        marca: brand,
      };
    }

    const response = await api.post(
      `${import.meta.env.VITE_API_URL}/garage/create`,
      dataRequest
    );

    const file = new Blob([JSON.stringify(response.data)], {
      type: "application/json",
    });
    const fileUrl = window.URL.createObjectURL(file);
    let tempLink = document.createElement("a");
    tempLink.href = fileUrl;
    tempLink.setAttribute("download", "veiculo.json");
    tempLink.click();

    reset();
  };

  return (
    <Styles.Container>
      <Styles.Title>Cadastrar veículo</Styles.Title>

      <Styles.Form onSubmit={handleSubmit(handleClickGarageForm)}>
        <FormProvider {...garageForm}>
          <Styles.SelectForm
            options={[
              { value: "CARRO", label: "Carro" },
              { value: "MOTO", label: "Moto" },
            ]}
            defaultValue={{ value: "CARRO", label: "Carro" }}
            onChange={(option) => setType(option?.value as "CARRO" | "MOTO")}
          />
          <Input
            placeholder="Informe o modelo"
            type="text"
            {...register("model")}
          />
          <span>{errors.model?.message}</span>

          <Input
            placeholder="Informe o ano"
            type="number"
            pattern="/^\d{4}$/"
            {...register("year", { valueAsNumber: true })}
          />
          <span>{errors.year?.message}</span>

          <Input
            placeholder="Informe a marca"
            type="text"
            {...register("brand")}
          />
          <span>{errors.brand?.message}</span>

          {type === "CARRO" && (
            <>
              <Input
                placeholder="Informe a quantidade de portas"
                type="number"
                {...register("ports", { valueAsNumber: true })}
              />
              <span>{errors.ports?.message}</span>
            </>
          )}
          <Button text="Guardar informações" disabled={isSubmitDisabled} />
        </FormProvider>
      </Styles.Form>
    </Styles.Container>
  );
};

export default Garage;
