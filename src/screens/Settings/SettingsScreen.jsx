import React, { useState } from "react";
import {
  SettingsWrapper,
  SettingsCard,
  HeaderSection,
  Avatar,
  HeaderText,
  FormSection,
  InputGroup,
  Label,
  Input,
  TextArea,
  SaveButtonWrapper,
  SaveButton,
  FormControl,
  StyledSelect,
  DropdownIcon,
} from "./Settings.styled";
import { useDispatch } from "react-redux";
import { createSchema, insertRecord } from "../../redux/actions";

const Settings = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [chainEndpoint, setChainEndpoint] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [chainType, setChainType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ETId: 50,
      SV: 1,
      Schema: {
        ETId: 15000000,
        TableName: "blockchain_wallet",
        Family: "Auditor",
        DoSummary: true,
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
          {
            FieldName: "lastAnchorTime",
            DataType: "INTEGER",
            MaxLength: 20,
          },
        ],
        Indexes: [],
      },
    };

    // dispatch(createSchema(data));
    const data2 = {
      walletAddress:
        "[144,78,26,136,44,158,163,205,95,2,140,238,101,66,55,224,219,150,249,76,220,161,21,72,31,97,245,226,60,111,206,36,176,207,252,152,207,79,25,12,76,99,163,127,199,90,114,211,1,197,74,88,152,95,43,185,29,35,91,242,160,26,137,51]",
      blockChainUrl: "https://api.devnet.solana.com",
      blockChainName: "Solana",
      anchorInterval: 1,
      typeOfBlockChain: "single",
      // UID: "f32235ef-99e6-42f3-9537-8bf1528acac7", add in case we want to modify the record
    };
    dispatch(insertRecord(data2));
  };

  return (
    <SettingsWrapper>
      <SettingsCard>
        <HeaderSection>
          <Avatar>AD</Avatar>
          <HeaderText>
            <h2>Account Settings</h2>
            <p>Manage your personal information</p>
          </HeaderText>
        </HeaderSection>

        <form onSubmit={handleSubmit}>
          <FormSection>
            <InputGroup>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Label>Chain Endpoint</Label>
              <Input
                type="text"
                placeholder="Chain endpoint"
                value={chainEndpoint}
                onChange={(e) => setChainEndpoint(e.target.value)}
              />
            </InputGroup>
          </FormSection>

          <FormSection>
            <InputGroup style={{ gridColumn: "1 / -1" }}>
              <Label>Wallet Address</Label>
              <TextArea
                rows={4}
                placeholder="Chain Wallet Address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
            </InputGroup>
          </FormSection>
          <FormControl>
            <StyledSelect
              value={chainType}
              onChange={(e) => setChainType(e.target.value)}
            >
              <option value="">Select Chain Type</option>
              <option value="type1">Single</option>
              <option value="type2">Multiple</option>
            </StyledSelect>
            <DropdownIcon />
          </FormControl>

          <SaveButtonWrapper>
            <SaveButton type="submit">Save Changes</SaveButton>
          </SaveButtonWrapper>
        </form>
      </SettingsCard>
    </SettingsWrapper>
  );
};

export default Settings;
