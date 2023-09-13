import styled from "styled-components";

interface BadgeProps {
  expand: boolean;
}

export const Container = styled.div<BadgeProps>`
  height: ${(props) => (props.expand ? "21rem" : "7rem")};
  width: 100%;
  background: ${(props) => props.theme.white};
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 1rem;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 10px;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const TitleItem = styled.p`
  font-weight: 600;
`;

export const List = styled.ul<BadgeProps>`
  list-style: none;
  width: 100%;
  flex: 1;
  display: ${(props) => (props.expand ? "flex" : "none")};
  justify-content: flex-start;
  padding-top: ${(props) => (props.expand ? "2rem" : "0")};

  & li {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
`;
