import React from "react";
import { useNavigate } from "react-router-dom";

import { backgroundImage, mobIcon, WalacorLogo } from "../../../assets";
import { InputField, Text, GradientButton, GrayText } from "../../../shared";
import {
  BodyContainer,
  BoxContainer,
  BoxHeader,
  BoxBody,
  BoxFooter,
  BoxHeaderImage,
  BoxHeaderTitle,
  TextDiv,
  Circle,
} from "../AuthStyles";

const ForgotPasswordScreen = () => {
  const navigate = useNavigate();

  const navToLogin = () => {
    navigate("/", { replace: true });
  };
  const onSendClick = () => {
    // navigate("/forgotPassword/verificationMaiSuccess", { replace: true });
  };
  return (
    <div>
      {" "}
      <BodyContainer>
        <BoxContainer>
          <BoxHeader>
            <BoxHeaderTitle>
              <Text fontWeight="500" fontSize="35px">
                Forgot Password ?
              </Text>
            </BoxHeaderTitle>
          </BoxHeader>
          <Circle>
            <img src={WalacorLogo} alt="Walacor Icon" width={50} height={50} />
          </Circle>
          <BoxBody>
            <TextDiv>
              <Text fontSize="15px">Email</Text>
            </TextDiv>
            <InputField isEmail placeHolder="Enter email here.." />
          </BoxBody>
          <BoxFooter>
            <GradientButton onClick={onSendClick} label={"Send"} />
            <GrayText onClick={navToLogin}>Login here</GrayText>
          </BoxFooter>
        </BoxContainer>
      </BodyContainer>
    </div>
  );
};

export default ForgotPasswordScreen;
