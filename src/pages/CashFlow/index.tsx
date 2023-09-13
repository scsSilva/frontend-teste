import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { api } from "../../utils/api";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Badge from "./components/Badge";
import * as Styles from "./styles";

const cashFlowFormValidationSchema = zod.object({
  price: zod.number().min(1),
  amountReceived: zod.number().min(1),
});

type CashFlowFormData = zod.infer<typeof cashFlowFormValidationSchema>;

interface IChange {
  price: number;
  amountReceived: number;
  change: number;
  hundredNotes: number;
  notesOutOfTen: number;
  notesOutOfOne: number;
}

const CashFlow = () => {
  const [change, setChange] = useState<IChange | null>(null);

  const cashFlowForm = useForm<CashFlowFormData>({
    resolver: zodResolver(cashFlowFormValidationSchema),
  });

  const { handleSubmit, watch, reset, register } = cashFlowForm;

  const price = watch("price");
  const amountReceived = watch("amountReceived");
  const isSubmitDisabled = !(price && amountReceived && amountReceived > price);

  const handleCalculateCash = async () => {
    const response = await api.get(
      `http://localhost:3000/cashFlow/change/${price}/${amountReceived}`
    );

    setChange(response.data);
    reset();
  };

  return (
    <Styles.Container>
      <div>
        <Styles.Title>Calcular troco</Styles.Title>
      </div>

      {change != null ? (
        <Styles.ContentData>
          <Styles.ListData>
            <li>
              <Badge title="Notas de 100" value={change.hundredNotes} />
            </li>
            <li>
              <Badge title="Notas de 10" value={change.notesOutOfTen} />
            </li>
            <li>
              <Badge title="Notas de 1" value={change.notesOutOfOne} />
            </li>
          </Styles.ListData>

          <Button text="Voltar" onClick={() => setChange(null)} />
        </Styles.ContentData>
      ) : (
        <Styles.Form onSubmit={handleSubmit(handleCalculateCash)}>
          <FormProvider {...cashFlowForm}>
            <Input
              placeholder="Informe o valor da compra"
              type="number"
              min={1}
              step={1}
              pattern="/^\d+$/"
              {...register("price", { valueAsNumber: true })}
            />
            <Input
              placeholder="Informe o valor pago"
              type="number"
              min={1}
              step={1}
              pattern="/^\d+$/"
              {...register("amountReceived", { valueAsNumber: true })}
            />
            <Button text="Calcular" disabled={isSubmitDisabled} />
          </FormProvider>
        </Styles.Form>
      )}
    </Styles.Container>
  );
};

export default CashFlow;
