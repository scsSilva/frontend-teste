import styled from "styled-components";

export const Container = styled.button`
  width: 15rem;
  height: 7.5rem;
  background: ${(props) => props.theme.foreground};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: beige;
  justify-content: space-between;
  cursor: pointer;
`;

export const About = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.p`
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  text-align: left;
`;
