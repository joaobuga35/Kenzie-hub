import styled from "styled-components";

export const Ul = styled.ul`
  width: 100%;
  background-color: var(--gray-3);
  border-radius: 0.4rem;
  height: 41.6rem;
  padding: 2.2rem 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  li {
    padding: 1.2rem;
    background-color: var(--gray-4);
    height: 4.8rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;

    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--gray-0);
    }

    span {
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--gray-1);
    }
  }

  li:hover {
    background-color: var(--gray-2);

    span {
      color: var(--gray-0);
    }
  }
`;
