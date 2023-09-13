import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  background: ${(props) => props.theme.light};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  & > div {
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: flex-start;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Form = styled.form`
  flex: 1;
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 450px) {
    width: 20rem;
  }
`;

export const SelectForm = styled(Select)`
  width: 100%;
`;
