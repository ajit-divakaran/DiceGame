import styled, { keyframes } from "styled-components";
const ErrorAnimate = ({ error }) => {
  return <Error>{error}</Error>;
};

export default ErrorAnimate;
const animates = keyframes`
  
    0% {
      transform: translateX(-10px);
    }
    25% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0);
    }

  `;
const Error = styled.p`
  position: absolute;
  right: 0;
  top: -45px;
  color: red;
  animation-name: ${animates};
  animation-duration: 0.25s;
  animation-iteration-count: 2;
`;
