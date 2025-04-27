import React from 'react';
import styled, { keyframes } from 'styled-components';

// Props for Loader: color and size
interface LoaderProps {
  color?: string;
  size?: number;
}

// Keyframes for the ring spinner
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Keyframes for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled wrapper for the ring loader, accepts color and size props
type StyledLoaderProps = Required<LoaderProps>;
const StyledLoader = styled.div<StyledLoaderProps>`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ color }) => color};
  opacity: 0;
  animation: ${fadeIn} 0.3s ease forwards;

  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => size * 0.8}px;
    height: ${({ size }) => size * 0.8}px;
    margin: ${({ size }) => size * 0.1}px;
    border: ${({ size, color }) => `${size * 0.1}px solid ${color}`};
    border-radius: 50%;
    animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => `${color} transparent transparent transparent`};
  }

  & > div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & > div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & > div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

// React component that renders four divs for the spinner
const Loader: React.FC<LoaderProps> = ({ color = 'currentColor', size = 30 }) => (
  <StyledLoader color={color} size={size}>
    <div />
    <div />
    <div />
    <div />
  </StyledLoader>
);

export default Loader;
