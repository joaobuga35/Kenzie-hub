import styled from "styled-components";

export const DivButtonBack = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;
  max-width: 29.6rem;
  margin: 0 auto;
  margin-top: 4.8rem;
  margin-bottom: 3.97rem;
  a {
    text-decoration: none;
    background-color: var(--gray-3);
    color: var(--color-background);

    width: 6.8rem;
    height: 3.2rem;

    border: 1px solid var(--gray-3);
    border-radius: 0.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      filter: brightness(0.9);
    }
  }
`;
