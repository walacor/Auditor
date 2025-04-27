import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveTab, userLogout } from "../../redux/actions";
import { FaHome, FaCog, FaList } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import {
  SidebarContainer,
  LogoSection,
  LogoText,
  MenuSection,
  MenuItem,
  BottomMenu,
  IconWrapper,
  CollapseButton,
  Label,
} from "./Sidebar.styled";
import { Strings } from "../../constants";

const menuItems = [
  { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
  { name: "Anchor List", icon: <FaList />, path: "/anchors-List" },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeTab = useSelector((state) => state.sidebar.activeTab);

  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (name, path) => {
    dispatch(setActiveTab(name));
    navigate(path);
  };

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <SidebarContainer collapsed={collapsed}>
      <div>
        <LogoSection>
          <CollapseButton onClick={() => setCollapsed((prev) => !prev)}>
            <FiMenu size={28} />
          </CollapseButton>
          {!collapsed && <LogoText>{Strings.AUDITOR}</LogoText>}
        </LogoSection>

        <MenuSection>
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              active={activeTab === item.name}
              onClick={() => handleNavigation(item.name, item.path)}
            >
              <IconWrapper>{item.icon}</IconWrapper>
              {!collapsed && <span>{item.name}</span>}
            </MenuItem>
          ))}
        </MenuSection>
      </div>

      <BottomMenu>
        <MenuItem onClick={handleLogout} style={{ color: "#d62828" }}>
          <IconWrapper style={{ color: "#d62828" }}>
            <RiLogoutBoxRLine />
          </IconWrapper>
          {!collapsed && <Label id="sidebar_label">Log out</Label>}
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigation("Settings", "/settings")}
          active={activeTab === "Settings"}
        >
          <IconWrapper>
            <FaCog />
          </IconWrapper>
          {!collapsed && <Label id="sidebar_label">Settings</Label>}
        </MenuItem>
      </BottomMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
