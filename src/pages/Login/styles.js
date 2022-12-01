import styled from "styled-components";

export const DivRedirectRegister = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;

  span {
    font-size: 12px;
    font-weight: 600;
    color: var(--gray-1);
  }

  a {
    background-color: var(--gray-1);
    color: var(--color-background);

    width: 100%;
    height: 3.8rem;

    border: 1px solid var(--gray-1);
    border-radius: 0.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.4rem;
    text-decoration: none;
  }
`;
