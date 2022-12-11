import styled from "styled-components";

export const LiStyle = styled.li`
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

  .divTrash {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--gray-1);
  }

  :hover {
    background-color: var(--gray-2);

    span {
      color: var(--gray-0);
    }

    button {
      background-color: var(--gray-2);
      color: var(--gray-0);
    }
  }
`;
