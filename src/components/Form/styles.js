import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 2rem;
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

  .div-select {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .module {
    width: 100%;
    height: 3.8rem;

    background-color: var(--gray-2);
    color: var(--gray-0);

    border: 1px solid var(--gray-3);
    border-radius: 0.4rem;

    padding-left: 1.3rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;

    font-size: 1.2rem;

    :focus {
      border: 1px solid var(--gray-1);
    }
  }
`;
