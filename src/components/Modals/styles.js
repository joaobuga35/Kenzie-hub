import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 36.9rem;
  height: 31.2rem;
  background-color: var(--gray-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 0.4rem;
  z-index: 10;

  @media (max-width: 375px) {
    width: 32.9rem;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 12px;
  background-color: var(--gray-2);
  border-radius: 0.4rem 0.4rem 0 0;

  h3 {
    color: var(--gray-0);
    font-size: 1.4rem;
    font-weight: 700;
  }

  button {
    color: var(--gray-1);
    font-size: 1.6rem;
    font-weight: 600;
    border: none;
    background-color: var(--gray-2);
  }
`;
export const ModalForm = styled.form`
  padding: 2.4rem 2rem;
  .errorsModal {
    margin-left: 1rem;
    font-size: 1.2rem;
    color: var(--color-primary);
  }
  .titleStatus {
    display: block;
    margin-top: 1.6rem;
  }

  .selectModal {
    width: 100%;
    height: 3.8rem;
    display: block;
    margin-bottom: 2rem;

    background-color: var(--gray-2);
    color: var(--gray-0);

    border: 1px solid var(--gray-3);
    border-radius: 0.4rem;

    padding-left: 1.3rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;

    font-size: 1.4rem;
  }
`;
