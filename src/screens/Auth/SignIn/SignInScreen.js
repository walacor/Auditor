import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
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
  Loader,
} from "../../../shared";
import { verifyMail, verifyPassword } from "../../../utils";
import { userLogin } from "../../../redux/actions";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
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
    const data = {
      email: email,
      password: password,
      deviceTypeID: 3,
    };

      // console.log("something",data)
      dispatch(userLogin(data));
  };
  return (
    <BodyContainer>
      <BoxContainer>
        <BoxHeader>
          <Text fontSize="56px">Auditor </Text>
        </BoxHeader>
        <Circle>
          <img src={WalacorLogo} alt="Mobcoder Icon" width={50} height={50} />
        </Circle>
        <BoxBody>
          <TextDiv>
            <Text fontSize="16px">Username</Text>
          </TextDiv>
          <InputField isEmail func={setEmail} />
          <TextDiv>
            <Text fontSize="16px">Password</Text>
          </TextDiv>
          <InputField func={setPassword} />
        </BoxBody>
        <BoxFooter>
          <GradientButton onClick={onSignInClick} label={"Sign In"} />
          {loading ? <Loader /> : ""}

          <GrayText onClick={navToForgotPassword}>
            Forgot your Password ?
          </GrayText>
        </BoxFooter>
      </BoxContainer>
    </BodyContainer>
  );
};

export default SignInScreen;
