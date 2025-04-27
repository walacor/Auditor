import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector, useStore, useDispatch } from "react-redux";

import {
  SignInScreen,
  ForgotPasswordScreen,
  VerficationMailSentScreen,
} from "../screens";
import DashboardNavigation from "./DashboardNavigation";

const AuthNavigation = () => {
  const isLoggedIn = useSelector((state) => state.userLogin.isLogIn);

  return isLoggedIn ? (
    <DashboardNavigation />
  ) : (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignInScreen />} />
        <Route path="/forgotPassword" element={<ForgotPasswordScreen />} />
        <Route
          path="/forgotPassword/verificationMaiSuccess"
          element={<VerficationMailSentScreen />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route
          path="/forgotPassword/*"
          element={<Navigate replace to="/forgotPassword" />}
        />
        <Route
          path="/forgotPassword/verificationMaiSuccess/*"
          element={
            <Navigate replace to="/forgotPassword/verificationMaiSuccess" />
          }
        />
      </Routes>
    </Router>
  );
};

export default AuthNavigation;
