import React from "react";
import styled from "styled-components";
import { Colors } from "../../config";

const DataInputField = (props) => {
  return <InputField {...props}/>;
};

export { DataInputField };
const InputField = styled.input`
  border: 1px solid ${Colors.TEXT_GRAY};
  background-color:white;
  padding:8px;
  width: 100%;
  border-radius:8px;
`;
