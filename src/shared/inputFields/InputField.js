// this input field is specifically for login inputs..

import React, { useState } from "react";

import { hidePasswordIcon, showPasswordIcon } from "../../assets";
import "./inputField.css";
import styled from "styled-components";

export const InputField = (props) => {
  const { placeHolder, isEmail, func } = props;

  const [isProtected, setIsProtected] = useState(true);

  const setPasswordInputType = () => {
    if (isProtected) return "password";
    else return "text";
  };
  return (
    <InputDiv className="inputDiv">
      <CustomInputField
        placeholder={placeHolder ? placeHolder : ""}
        type={isEmail ? "text" : setPasswordInputType()}
        onChange={(param) => {
          func(param.target.value);
        }}
      />
      {isEmail ? (
        <div style={{ flex: 0.05, height: 47 }} />
      ) : (
        <Image
          src={isProtected ? hidePasswordIcon : showPasswordIcon}
          width={30}
          height={30}
          cursor="pointer"
          alt="password icon"
          onClick={() => {
            setIsProtected(!isProtected);
          }}
        />
      )}
    </InputDiv>
  );
};

const CustomInputField = styled.input`
  border: none;
  width: 100%;
  color: ${(props) => props.color || "black"};
  font-family: "Nunito", sans-serif;
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
  font-size: medium;
  &:focus {
    border: none;
    outline: none;
  }
  flex: 0.95;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
  width: 90%;
  border-radius: 10px;
  padding-left: 5px;
  border: 1px solid #c7c7c7;
  flex: 1;
`;

const Image = styled.img`
  height: ${(props) => props.height || "25px"};
  width: ${(props) => props.width || "25px"};
  margin: 10px 10px;
  cursor: ${(props) => props.cursor || "pointer"};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1); /* Slightly enlarges on hover */
    opacity: 0.8; /* Makes it slightly transparent */
  }
  flex: 0.05;
  &.fade-out {
    opacity: 0;
    transform: scale(0.8);
  }

  &.fade-in {
    opacity: 1;
    transform: scale(1);
  }
`;
