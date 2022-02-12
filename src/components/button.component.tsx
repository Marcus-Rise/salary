import styled from "styled-components";
import { Colors } from "../styles/colors";

const Button = styled.button`
  border: 0.1rem solid transparent;
  text-transform: uppercase;
  background: ${Colors.backgroundPrimary};
  padding: 0.75rem 1rem;
  border-radius: 1rem;

  &:hover {
    border-color: ${Colors.textSecondary};
    cursor: pointer;
  }

  &:active {
    filter: brightness(97%);
    border-color: ${Colors.textPrimary};
  }
`;

export { Button };
