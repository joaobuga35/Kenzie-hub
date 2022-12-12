import styled from "styled-components";

export const DivDashMain = styled.div`
  .divContentDatas {
    border-top: 1px solid var(--gray-3);
    border-bottom: 1px solid var(--gray-3);
  }

  .divUser {
    display: flex;
    justify-content: space-between;
  }
`;

export const Profile = styled.div`
  padding: 0rem 1.6rem 0rem 1.6rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  border-bottom: ${(props) => props.border};

  h2 {
    color: var(--gray-0);
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  span {
    color: var(--gray-1);
    font-size: 1.2rem;
  }

  p {
    color: var(--gray-1);
    font-size: 1.4rem;
  }

  .divTech {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: var(--gray-0);
      font-size: 1.6rem;
    }

    margin-bottom: 2.8rem;
  }

  @media (min-width: 1024px) {
    max-width: 90rem;
    margin: 0 auto;
  }
`;

export const DivMessage = styled.div`
  margin-top: 5rem;
  height: 41.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .warning {
    height: 10rem;
    width: 10rem;
    color: red;
  }
`;
