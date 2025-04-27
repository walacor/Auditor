import styled from "styled-components";

import { Colors } from "../../constants/colors";

const DefButton = styled.button`
  background-color: ${(props) => props.backgroundColor || Colors.BLUISH_GREEN};
  border-radius: 10px;
  padding: 0.5rem 2rem;
  margin: 0.5rem;
  border: none;
  outline: none;
  font-weight: bold;
  letter-spacing: 0.1rem;

  color:${props=>props.color||"white"};
`;

export { DefButton };
