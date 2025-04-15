import styled from "styled-components";
import { Colors } from "../../config";
const BodyWrapper = styled.div`
  background:${Colors.DEFAULT_BACKGROUND};
  padding:${props=>props.padding||"0px"};
  position: relative;
  height:100vh;
  font-family:Nunito;
  left: 250px;
  width: calc(100% - 250px);
  transition:400ms;
  overflow:auto;
  @media (max-width: 1274px) {
    width: 100%;
    left: 0px;
    transition:300ms;
  }
`;
export { BodyWrapper };
