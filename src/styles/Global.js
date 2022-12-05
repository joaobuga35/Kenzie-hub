import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --color-background: #FFFFFF;
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --gray-4: #121214;
    --gray-3:#212529;
    --gray-2:#343B41;
    --gray-1:#868E96;
    --gray-0:#F8F9FA;
    --color-error: #E83F5B; 
    --color-success: #3FE864;
    font-size: 60%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  .container {
    height: 100vh;
    width: 100vw;
    background-color: var(--gray-4);
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .container-register {
    height: 100%;
  }

  .container-dash {
    height: 100vh;
    width: 100vw;
    background-color: var(--gray-4);
  }

  .containerInput {
    width: 100%;
  }

`;
