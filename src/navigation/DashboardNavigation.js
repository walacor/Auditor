import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { AnchorListScreen, SettingsScreen, DashBoardScreen } from "../screens";
import { ContentArea, DashboardLayout, Sidebar } from "../shared";

const DashboardNavigation = () => {
  // const userisAdmin = useSelector(
  //   (state) => state.userLogin.login?.user?.isAdmin
  // );

  return (
    <Router>
      <DashboardLayout>
        <Sidebar />
        <ContentArea>
          <Routes>
            <Route path="/" element={<DashBoardScreen />} />
            <Route path="/dashboard" element={<DashBoardScreen />} />
            <Route path="/anchors-List" element={<AnchorListScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </ContentArea>
      </DashboardLayout>
    </Router>
  );
};
export default DashboardNavigation;
