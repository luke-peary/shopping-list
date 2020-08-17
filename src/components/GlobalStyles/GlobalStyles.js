import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

export default createGlobalStyle`
  ${styledNormalize}

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body,
  dl, dt, dd,
  ul, ol, li,
  h1, h2, h3, h4, h5, h6,
  pre,
  form, fieldset,
  p, blockquote,
  figure, figcaption,
  table, th, td {
    margin: 0; 
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.7rem;
    line-height: 1.41;
    font-family: "Lato", sans-serif;
  }
`;
