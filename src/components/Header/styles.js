import styled from "styled-components";

export const HeaderDash = styled.header`
  padding: 0rem 1.6rem 0rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

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

  @media (min-width: 1024px) {
    max-width: 90rem;
    margin: 0 auto;
  }
`;
