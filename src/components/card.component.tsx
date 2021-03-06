import styled from "styled-components";
import { Colors } from "../styles/colors";

const Card = styled.div`
  background: ${Colors.backgroundSecondary};
  border-radius: 1em;
  padding: 1em;
  box-sizing: border-box;
  margin: 0 auto;
  box-shadow: 0 0.25rem 1rem 0 rgba(0, 0, 0, 0.47);
`;

export { Card };
