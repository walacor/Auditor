import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getAnchorList } from "../../redux/actions";
import { BarLoader } from "../../shared";
import { SidebarContainer } from "../DashBoard/DashBoard.styled";

function AnchorListScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnchorList());
  }, []);
  const anchorList = useSelector((state) => state.anchorList);
  const formatString = (str) => {
    if (str.length <= 15) {
      return str;
    }
    const firstPart = str.slice(0, 11);
    const lastPart = str.slice(-8);
    return `${firstPart}.....${lastPart}`;
  };
  return (
    <SidebarContainer>
      {!anchorList?.loading ? (
        <BarLoader />
      ) : (
        <>
          <Heading>Anchor List</Heading>
          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  {Object.keys(anchorList?.data?.memoTransactions?.[0]).map(
                    (key) => (
                      <th key={key}>{key}</th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {anchorList?.data?.memoTransactions.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.entries(row).map(([key, value], colIndex) => (
                      <td key={colIndex}>
                        {key === "memo" || key === "signature"
                          ? formatString(value)
                          : value !== null
                          ? value
                          : "N/A"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableWrapper>
        </>
      )}
    </SidebarContainer>
  );
}

export default AnchorListScreen;
export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2e5aac;
  text-align: center;
  margin-top: 20px;
  font-family: "Quicksand", sans-serif;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* Enable horizontal scrolling for smaller screens */
  margin-top: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Quicksand", sans-serif;

  th,
  td {
    padding: 14px 20px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    word-wrap: break-word; /* Ensure long text wraps */
    font-size: 0.9rem;
  }

  th {
    background-color: #2e5aac;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f5ff; /* Subtle hover effect */
    transition: background-color 0.3s ease;
  }

  td {
    color: #333;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 12px 16px; /* Reduce padding for smaller screens */
    }
  }

  @media (max-width: 480px) {
    th,
    td {
      padding: 8px 12px; /* Further reduce padding for very small screens */
      font-size: 0.9rem; /* Adjust font size */
    }
  }
`;
