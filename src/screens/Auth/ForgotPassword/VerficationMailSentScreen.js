import React from "react";
import { useNavigate } from "react-router-dom";

import { backgroundImage, mobIcon, checkIcon } from "../../../assets";
import { GrayText, Text } from "../../../shared";
import {
  BodyContainer,
  BoxContainer,
  BoxHeader,
  BoxBody,
  BoxFooter,
  BoxHeaderImage,
  BoxHeaderTitle,
  Circle,
} from "../AuthStyles";

const VerficationMailSentScreen = () => {
  const navigate = useNavigate();
  const navToLogin = () => {
    navigate("/", { replace: true });
  };
  return (
    <div>
      {" "}
      <BodyContainer>
        <BoxContainer>
          <BoxHeader>
            <BoxHeaderTitle>
              <Text fontWeight="500" fontSize="25px">
                Success !
              </Text>
            </BoxHeaderTitle>
            <BoxHeaderImage src={backgroundImage} alt="backgroundImage" />
          </BoxHeader>
          <Circle>
            <img src={mobIcon} alt="Mobcoder Icon" />
          </Circle>
          <BoxBody>
            <img src={checkIcon} alt="emailSentSuccess" />
            <Text margin="3% 10% 0% 10%" fontSize="15px">
              We have sent you a verification link on your registered email,
              please check the same to reset your password.
            </Text>
          </BoxBody>
          <BoxFooter>
            <GrayText onClick={navToLogin}>Back to Login </GrayText>
          </BoxFooter>
        </BoxContainer>
      </BodyContainer>
    </div>
  );
};

export default VerficationMailSentScreen;
