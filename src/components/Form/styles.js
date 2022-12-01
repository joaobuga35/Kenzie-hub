import styled from "styled-components";

export const Form = styled.form`
  width: 29.6rem;
  height: ${(props) => props.heightForm};

  padding: 3.4rem 1.8rem 3.4rem 1.8rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.8rem;

  background-color: var(--gray-3);

  border-radius: 0.4rem;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
`;
