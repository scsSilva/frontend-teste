import styled from "styled-components";

export const Container = styled.div`
  height: 7rem;
  width: 100%;
  background: ${(props) => props.theme.white};
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 1rem;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 10px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const Value = styled.p`
  font-size: 1.5rem;
`;
