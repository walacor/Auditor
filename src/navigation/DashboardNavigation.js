import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import {
  AnchorDetailsScreen,
  AnchorListScreen,
  DashBoardScreen,
  SettingsScreen,
} from "../screens";
import { usersIcon, settingsIcon, templateIcon } from "../assets";
import { Sidebar } from "../shared";

const DashboardNavigation = () => {
  // const userisAdmin = useSelector(
  //   (state) => state.userLogin.login?.user?.isAdmin
  // );
  return (
    <Router>
      <Sidebar />
      <Routes>
        {/* <Route
          path=""
          element={<DashBoardScreen menuItems={authMenuItems} />}
        />
        <Route path="dashboard" element={<Navigate replace to="users" />} /> */}
        <Route path="*" element={<AnchorDetailsScreen />} />
        <Route path="/anchor-Details" element={<AnchorDetailsScreen />} />

        <Route path="/anchors-List" element={<AnchorListScreen />} />

        <Route path="/settings" element={<SettingsScreen />} />
        {/* <Route path="/events" element={<Events />} />
        <Route path="/events/events1" element={<EventsOne />} />
        <Route path="/events/events2" element={<EventsTwo />} />
        <Route path="/support" element={<Support />} /> */}
      </Routes>
    </Router>
  );
};
export default DashboardNavigation;
