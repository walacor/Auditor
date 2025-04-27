import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const SettingsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 20px;
  min-height: 100vh;
`;

export const SettingsCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  max-width: 860px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const Avatar = styled.div`
  background-color: #2e5aac;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const HeaderText = styled.div`
  h2 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
  }

  p {
    margin: 4px 0 0;
    color: #666;
    font-size: 0.95rem;
  }
`;

export const FormSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 0.95rem;
  transition: 0.2s ease;

  &:focus {
    border-color: #2e5aac;
    outline: none;
    box-shadow: 0 0 0 3px #eef3ff;
  }
`;

export const SaveButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const SaveButton = styled.button`
  background-color: #2e5aac;
  color: white;
  padding: 10px 22px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #204a8b;
  }
`;
export const TextArea = styled.textarea`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 0.95rem;
  transition: 0.2s ease;
  resize: none;

  &:focus {
    border-color: #2e5aac;
    outline: none;
    box-shadow: 0 0 0 3px #eef3ff;
  }
`;

export const FormControl = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px 14px;
  padding-right: 36px; /* space for the icon */
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 0.95rem;
  background-color: white;
  appearance: none;

  &:focus {
    border-color: #2e5aac;
    outline: none;
    box-shadow: 0 0 0 3px #eef3ff;
  }
`;

export const DropdownIcon = styled(IoMdArrowDropdown as any)`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #666;
`;
