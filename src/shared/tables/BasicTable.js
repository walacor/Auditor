import React from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  padding: 24px;
  width: 100%;
  height: 100dvh;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background: #f6f6f6;
`;

const HeadCell = styled.th`
  text-align: left;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const BodyRow = styled.tr`
  &:nth-child(even) {
    background: #fafafa;
  }
`;

const BodyCell = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: #555;
  border-bottom: 1px solid #eee;
`;

const RequiredTag = styled.span`
  background-color: #eef3ff;
  color: #2e5aac;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 8px;
  margin-left: 8px;
`;

const DynamicTable = ({ fields }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <TableHead>
          <tr>
            <HeadCell>Field Name</HeadCell>
            <HeadCell>Data Type</HeadCell>
            <HeadCell>Max Length</HeadCell>
            <HeadCell>Required</HeadCell>
          </tr>
        </TableHead>
        <TableBody>
          {fields.map((field, index) => (
            <BodyRow key={index}>
              <BodyCell>{field.FieldName}</BodyCell>
              <BodyCell>{field.DataType}</BodyCell>
              <BodyCell>{field.MaxLength}</BodyCell>
              <BodyCell>
                {field.Required ? <RequiredTag>Yes</RequiredTag> : "No"}
              </BodyCell>
            </BodyRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
};

export default DynamicTable;
