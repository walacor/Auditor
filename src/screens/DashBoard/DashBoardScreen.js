import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { checkSchema } from "../../redux/actions";
import {
  SidebarContainer,
  TabSelector,
  TabButton,
  TableWrapper,
} from "./DashBoard.styled";
import { BarLoader, BasicTable } from "../../shared";
import { Colors } from "../../config";

function DashBoardScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = useSelector((state) => state.schema);
  const [activeTab, setActiveTab] = useState("Fields"); // State to manage active tab

  useEffect(() => {
    const data = {
      ETId: 15000000,
    };
    dispatch(checkSchema(data, navigate));
  }, [dispatch, navigate]);

  const fieldResponse = {
    Fields: [
      {
        FieldName: "walletAddress",
        DataType: "TEXT",
        MaxLength: 2048,
        Required: true,
      },
      {
        FieldName: "blockChainUrl",
        DataType: "TEXT",
        MaxLength: 2048,
        Required: true,
      },
      {
        FieldName: "blockChainName",
        DataType: "TEXT",
        MaxLength: 2048,
        Required: true,
      },
      {
        FieldName: "typeOfBlockChain",
        DataType: "TEXT",
        MaxLength: 2048,
        Required: true,
      },
      {
        FieldName: "anchorInterval",
        DataType: "INTEGER",
        MaxLength: 20,
        Required: true,
      },
      { FieldName: "lastAnchorTime", DataType: "INTEGER", MaxLength: 20 },
    ],
  };

  const dataResponse = {
    CreatedAt: 1745235092666,
    DbHistoryTableName: "15000000_histories",
    DbTableName: "15000000_blockchain_wallet",
    DoSummary: true,
    EId: "c1d4a892-e272-441b-826a-6b31466c40d9",
    ETId: 15000000,
    Family: "Auditor",
    LastModifiedBy: "f9d09e6b-1e93-45d9-92a0-3d0e05e3593a",
    ORGId: "5dadbc17d52c4ef58fc97f1aaf81bdab1",
    ORGName: "Default",
    SV: 2,
    TableName: "blockchain_wallet",
    UpdatedAt: 1745235092666,
    _id: "68062c94ae76b91fb5262de0",
  };
  // schema?.data?.schema?.data?.data[0]
  return (
    <SidebarContainer>
      {schema?.loading ? (
        <BarLoader color={Colors.BLUE_SECONDARY} />
      ) : (
        <>
          <TabSelector>
            <TabButton
              active={activeTab === "Fields"}
              onClick={() => setActiveTab("Fields")}
            >
              Fields
            </TabButton>
            <TabButton
              active={activeTab === "Data"}
              onClick={() => setActiveTab("Data")}
            >
              Data
            </TabButton>
          </TabSelector>
          <TableWrapper>
            {activeTab === "Fields" ? (
              <BasicTable fields={fieldResponse.Fields} />
            ) : (
              <table>
                <thead>
                  <tr>
                    {Object.keys(schema?.data?.schema?.data?.data[0]).map(
                      (key) => (
                        <th key={key}>{key}</th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Object.values(schema?.data?.schema?.data?.data[0]).map(
                      (value, index) => (
                        <td key={index}>{value}</td>
                      )
                    )}
                  </tr>
                </tbody>
              </table>
            )}
          </TableWrapper>
        </>
      )}
    </SidebarContainer>
  );
}

export default DashBoardScreen;
