import styled from "styled-components";

export const Form = styled.form`
  width: 29.6rem;
  height: ${(props) => props.heightForm};

  padding: 3.4rem 1.8rem 3.4rem 1.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.8rem;

  background-color: var(--gray-3);
`;
