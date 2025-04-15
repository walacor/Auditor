// for searchInputs

import React from "react";
import styled from "styled-components";

import { Colors } from "../../config";
import { searchIcon, crossIcon } from "../../assets";

const SearchInput = ({ searchUsers, setSearchUsers }) => {
  return (
    <SearchDiv>
      <Input
        placeholder="Enter the value ... "
        value={searchUsers}
        onChange={(param) => setSearchUsers(param.target.value)}
      />
      <Image src={searchIcon} alt="searchIcon" />
    </SearchDiv>
  );
};

export { SearchInput };
const SearchDiv = styled.div`
  background-color: ${(props) => props.background || "white"};
  padding: 0.5rem;
  display: flex;
  width: 30%;
  max-width: 250px;
  margin: 1rem 0rem;
  padding: 0.7rem 0.5rem 0.7rem 1.2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
`;
const Input = styled.input`
  border: none;
  width: 85%;
  font-size: medium;
  margin-right: 1.5rem;
  ::placeholder {
    color: ${Colors.TEXT_GRAY};
    font-size: medium;
    font-family: Nunito;
    font-weight: 500;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
const Image = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  padding-right: 0.5rem;
  cursor: pointer;
`;
