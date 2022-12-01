import styled from "styled-components";

export const BtnDefault = styled.button`
  background-color: ${(props) => props.backColor};
  color: var(--color-background);

  width: 100%;
  height: 3.8rem;

  border: 1px solid ${(props) => props.colorBorder};
  border-radius: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;

  :hover {
    filter: brightness(0.9);
  }
`;

export const BtnLogoutAndBack = styled.button`
  background-color: var(--gray-3);
  color: var(--color-background);

  width: ${(props) => props.widthBtn};
  height: 3.2rem;

  border: 1px solid var(--gray-3);
  border-radius: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
