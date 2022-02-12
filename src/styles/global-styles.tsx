import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${Colors.backgroundPrimary};
  }

  * {
    font-size: 1rem;
  }
`;

export { GlobalStyles };
