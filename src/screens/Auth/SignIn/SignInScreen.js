import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  BodyContainer,
  BoxContainer,
  BoxHeader,
  BoxBody,
  BoxFooter,
  TextDiv,
  Circle,
} from "../AuthStyles";
import { WalacorLogo } from "../../../assets";
import {
  InputField,
  Text,
  GradientButton,
  GrayText,
} from "../../../shared";
import { userLogin } from "../../../redux/actions";
import { Strings } from "../../../constants";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mailErrorMessage, setMailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const loading = useSelector((state) => state.userLogin?.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navToForgotPassword = () => {
    navigate("/forgotPassword");
  };
  const onSignInClick = async () => {
    if (password && username) {
      setMailErrorMessage("");
      setPasswordErrorMessage("");
      const data = {
        userName: username,
        password: password,
      };
      dispatch(userLogin(data));
    }else {
      if (!username) {
        setMailErrorMessage("Please enter your email");
      } else {
        setMailErrorMessage("");
      }
      if (!password) {
        setPasswordErrorMessage("Please enter your password");
      } else {
        setPasswordErrorMessage("");
      }
    }
  };
  return (
    <BodyContainer>
      <BoxContainer>
        <BoxHeader>
          <Text fontSize="56px">{Strings.AUDITOR}</Text>
        </BoxHeader>
        <Circle>
          <img src={WalacorLogo} alt="Mobcoder Icon" width={50} height={50} />
        </Circle>
        <BoxBody>
          <TextDiv>
            <Text fontSize="16px">{Strings.USERNAME}</Text>
          </TextDiv>
          <InputField isEmail func={setUsername} />
          {mailErrorMessage && (
            <Text fontSize="12px" color="red">
              {mailErrorMessage}
            </Text>
          )}
          <TextDiv>
            <Text fontSize="16px">{Strings.PASSWORD}</Text>
          </TextDiv>
          <InputField func={setPassword} />
          {passwordErrorMessage && (
            <Text fontSize="12px" color="red">
              {passwordErrorMessage}
            </Text>
          )}
        </BoxBody>
        <BoxFooter>
          <GradientButton
            onClick={onSignInClick}
            label={Strings.SIGN_IN}
            loading={loading}
          />

          <GrayText onClick={navToForgotPassword}>
            {Strings.FORGOT_PASSWORD}
          </GrayText>
        </BoxFooter>
      </BoxContainer>
    </BodyContainer>
  );
};

export default SignInScreen;
