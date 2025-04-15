import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Outlet, NavLink } from "react-router-dom";

import { menuIcon, closeIcon } from "../../assets";
import "./Styles.css";

const DashBoardScreen = ({ menuItems }) => {
  const [sidebar, setSideBar] = useState(false);
  const navigate = useNavigate();
  const handleOnItemClick = (item, index) => {
    console.log("onItemClicked");
    navigate(item.path);
  };
  const showSidebar = () => {
    setSideBar(!sidebar);
  };

  return (
    <>
      <Navbar>
        <SideNavOpener onClick={showSidebar}>
          <Icon src={menuIcon} alt="imageText" />
        </SideNavOpener>
      </Navbar>
      <nav className={sidebar ? "nav-menu active" : "unDockedSideNav"}>
        <NavMenuItems>
          <ClosedSideNavIconDiv>
            <Icon
              src={closeIcon}
              alt="imageText"
              zeroHeight="0px"
              zeroWidth="0px"
              onClick={showSidebar}
            />
          </ClosedSideNavIconDiv>

          {menuItems?.map((item, index) => {
            return (
              <SideNavSections
                key={index}
                onClick={() => handleOnItemClick(item, index)}
              >
                <Logo src={item.icon} alt="icon" />

                <NavLink
                  id="nav-menu-items"
                  to={item.path}
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "#99a3c1",
                    textDecoration: "none",
                  })}
                >
                  {item.name}
                </NavLink>
              </SideNavSections>
            );
          })}
        </NavMenuItems>
      </nav>
      <Outlet />
    </>
  );
};

export default DashBoardScreen;
const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  padding-right: 0.5rem;
  @media (min-width: 1274px) {
    width: ${(props) => props.zeroWidth};
    height: ${(props) => props.zeroHeight};
  }
`;

const Logo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const Navbar = styled.div`
  background-color: #eff2f7;
  height: 60px;
  min-width: 100%;
  display: flex;
  justify-content: start;
  transition: 400ms;
  @media (min-width: 1274px) {
    height: 0px;
    width: 0px;
    transition: 400ms;
  }
`;
const SideNavOpener = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  min-width: 4rem;
`;
const NavMenuItems = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    color: white !important;
    transition: 300ms;
  }
`;
const ClosedSideNavIconDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 2rem;
  padding-top: 1rem;
  @media (min-width: 1274px) {
    width: 0px;
    height: 0px;
  }
`;

const DashBoardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0rem 0rem 0.7rem 0.7rem;
  border-bottom: 1px solid #778996;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  margin-bottom: 4rem;
`;
const SideNavSections = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 1rem;
  height: 1.5rem;
  align-items: center;
  padding: 0.2rem;
  border-radius: 0.4rem;
  padding-left: 1rem;
`;
const DashBoardHeading = styled.span`
  margin-top: 1rem;
  font-size: 1.1rem;
  color: white;
`;
