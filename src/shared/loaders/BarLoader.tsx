import React from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../../config";

const barsAnimation = keyframes`
  33% {
    background-size: var(--bar-width) 10%, var(--bar-width) 100%, var(--bar-width) 100%;
  }
  50% {
    background-size: var(--bar-width) 100%, var(--bar-width) 10%, var(--bar-width) 100%;
  }
  66% {
    background-size: var(--bar-width) 100%, var(--bar-width) 100%, var(--bar-width) 10%;
  }
`;

const LoaderWrapper = styled.div<{
  width?: string;
  height?: string;
  barWidth?: string;
  color?: string;
}>`
  width: ${({ width }) => width || "50.4px"};
  height: ${({ height }) => height || "44.8px"};
  --bar-width: ${({ barWidth }) => barWidth || "10.1px"};
  --c: ${({ color }) =>
    `linear-gradient(${color || Colors.BLUE_SECONDARY} 0 0)`};
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: var(--bar-width) 100%;
  background-repeat: no-repeat;
  animation: ${barsAnimation} 1s infinite linear;
  border-radius: 4px;
  margin-top: 35%;
`;

type LoaderProps = {
  width?: string;
  height?: string;
  barWidth?: string;
  color?: string;
};

const Loader: React.FC<LoaderProps> = ({ width, height, barWidth, color }) => {
  return (
    <LoaderWrapper
      width={width}
      height={height}
      barWidth={barWidth}
      color={color}
    />
  );
};

export default Loader;
