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

export const ButtonModal = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.4rem;
  border: none;
  background-color: var(--gray-3);
  display: flex;
  align-items: center;
  justify-content: center;

  .plus {
    color: var(--gray-0);
  }

  :hover {
    background-color: var(--gray-2);
  }

  :hover .plus {
    color: var(--gray-3);
  }
`;
