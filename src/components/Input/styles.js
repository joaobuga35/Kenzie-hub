import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 3.8rem;

  background-color: var(--gray-2);
  color: var(--gray-0);

  border: 1px solid var(--gray-3);
  border-radius: 0.4rem;

  padding-left: 1.3rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;

  outline: 0;

  :focus {
    border: 1px solid var(--gray-1);
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  display: block;
  margin-bottom: 1rem;
  color: var(--gray-0);
`;
