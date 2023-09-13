import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { api } from "../../utils/api";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as Styles from "./styles";

const palindromeFormValidationSchema = zod.object({
  start: zod.number().min(1),
  end: zod.number().min(1),
});

type PalindromeFormData = zod.infer<typeof palindromeFormValidationSchema>;

interface IPalindromes {
  numbers: Array<Number>;
}

const Palindrome = () => {
  const [palindromes, setPalindromes] = useState<IPalindromes | null>(null);

  const palindromeForm = useForm<PalindromeFormData>({
    resolver: zodResolver(palindromeFormValidationSchema),
  });

  const { handleSubmit, watch, reset, register } = palindromeForm;

  const start = watch("start");
  const end = watch("end");
  const isSubmitDisabled = !(start && end && end > start);

  const handleFetchPalindromes = async () => {
    const response = await api.get(
      `http://localhost:3000/palindromicNumbers/list/${start}/${end}`
    );

    setPalindromes(response.data);
    reset();
  };

  return (
    <Styles.Container>
      <div>
        <Styles.Title>Palíndromos</Styles.Title>
      </div>

      {palindromes != null ? (
        <Styles.ContentData>
          <Styles.ListData>
            {palindromes.numbers.map((item) => {
              return (
                <li key={`${item}`}>
                  <Styles.BadgeNumber>
                    <span>{`${item}`}</span>
                  </Styles.BadgeNumber>
                </li>
              );
            })}
          </Styles.ListData>

          <Button text="Voltar" onClick={() => setPalindromes(null)} />
        </Styles.ContentData>
      ) : (
        <Styles.Form onSubmit={handleSubmit(handleFetchPalindromes)}>
          <FormProvider {...palindromeForm}>
            <Input
              placeholder="Informe o início do intervalo"
              type="number"
              min={1}
              step={1}
              pattern="^[1-9]\d*$"
              {...register("start", { valueAsNumber: true })}
            />
            <Input
              placeholder="Informe o final do intervalo"
              type="number"
              min={1}
              step={1}
              pattern="^[1-9]\d*$"
              {...register("end", { valueAsNumber: true })}
            />
            <Button
              text="Buscar"
              disabled={isSubmitDisabled}
              onClick={() => {}}
            />
          </FormProvider>
        </Styles.Form>
      )}
    </Styles.Container>
  );
};

export default Palindrome;
