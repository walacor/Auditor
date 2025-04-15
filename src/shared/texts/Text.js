import styled from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "18px"};
  color: ${(props) => props.color || "black"};
  font-family: ${(props) => props.fontFamily || "Quicksand"};
  font-weight: ${(props) => props.fontWeight || "none"};
  margin: ${(props) => props.margin || ".3rem 0rem"};
  margin-top: ${(props) => props.marginTop || "default"};
  margin-left: ${(props) => props.marginLeft || "default"};
  margin-right: ${(props) => props.marginRight || "default"};
  margin-bottom: ${(props) => props.marginBottom || "default"};
`;
