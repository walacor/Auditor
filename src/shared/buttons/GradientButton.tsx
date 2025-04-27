import styled from "styled-components";
import { StyledLoader } from "..";

interface StyledButtonProps {
  borderRadius?: string | number;
}
const StyledButton = styled.button<StyledButtonProps>`
  background-image: linear-gradient(
    to right,
    rgb(123, 192, 199) 0%,
    rgb(116, 184, 229) 51%,
    rgb(102, 161, 220) 100%
  );
  border: none;
  color: white;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  height: 50px;
  width: 100%;
  padding: 10px 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  border-radius: ${(props) => props.borderRadius || "10px"};
  cursor: pointer;

  &:hover {
    background-position: right center;
    text-decoration: none;
  }
`;

interface GradientButtonProps {
  label: string;
  onClick: () => void;
  borderRadius?: number | string;
  loading?: boolean;
  disabled?: boolean;
}
// Button Component
const GradientButton = ({
  label,
  onClick,
  borderRadius,
  loading,
  disabled,
}: GradientButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      borderRadius={borderRadius}
      disabled={disabled}
    >
      {loading ? <StyledLoader /> : label}
    </StyledButton>
  );
};

export default GradientButton;
