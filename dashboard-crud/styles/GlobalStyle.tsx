import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body, button {
    font-family: 'Noto Sans KR', sans-serif;
  }

  body, h1, h2, h3, p, dl, dd, ul {
    margin: 0;
  }

  button, input {
    padding: 0;
    border: 0;
  }

  input, button {
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }

  input:focus {
    outline: 0;
  }

  li{
    list-style: none;
  }
`;