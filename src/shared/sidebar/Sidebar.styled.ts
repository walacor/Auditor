import styled from "styled-components";
import { Colors } from "../../config";

export const SidebarContainer = styled.div<{ collapsed: boolean }>`
  width: ${(props) => (props.collapsed ? "80px" : "250px")};
  transition: width 0.3s ease;
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  padding: 0 15px;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  margin-top: 15px;
  margin-bottom: 40px;
`;

export const LogoText = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin-left: 10px;
  font-family: Quicksand;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 8px 12px;
  border-radius: 10px;
  gap: 10px;
  color: #888;
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  flex: 1;
  font-size: 0.95rem;
  outline: none;
`;

export const MenuSection = styled.nav`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => (props.active ? "#2e5aac" : "#333")};
  background-color: ${(props) => (props.active ? "#fff" : "transparent")};
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgb(213, 213, 213);
  }
  border-bottom: ${(props) => (props.active ? "1px solid #e0e0e0" : "none")};
  box-shadow: ${(props) =>
    props.active ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none"};
`;

export const IconWrapper = styled.span`
  font-size: 1.4rem;
`;

export const BottomMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`;
export const CollapseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;
export const Label = styled.span`
  font-size: 1rem;
  margin-top: -2%;
`;
