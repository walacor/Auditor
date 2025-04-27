import styled from "styled-components";
const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f8fb;
  align-items: center;
  height: 100vh;
  overflow: auto;
  min-width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    114deg,
    rgb(211, 211, 211) 0%,
    rgb(255, 255, 255) 50%,
    rgb(209, 248, 255) 100%
  );
`;
const BoxContainer = styled.div`
  position: relative;
  border-radius: 10px;
  background: white;
  width: 26%;
  max-height: 750px;
  min-width: 200px;
  margin: 0px;
  box-shadow: 2px 2px 10px #cfcfcf;
  @media (max-width: 1450px) {
    width: 34%;
    transition: 300ms;
  }
  @media (max-width: 1050px) {
    width: 45%;
    transition: 300ms;
  }
  @media (max-width: 750px) {
    width: 60%;
    transition: 300ms;
  }
  @media (max-width: 450px) {
    width: 90%;
    transition: 300ms;
  }
`;

const BoxHeader = styled.div`
  width: 100%;
  background-color: rgb(250, 250, 250);
  height: 160px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(
    114deg,
    rgba(255, 255, 255, 1) 0%,
    rgb(244, 244, 244) 50%,
    rgb(221, 249, 254) 100%
  );
`;
const BoxBody = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const BoxFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  flex-direction: column;
  align-items: center;
`;
const BoxHeaderImage = styled.img`
  width: 47%;
  height: 160px;
  bottom: 0px;
`;
const BoxHeaderTitle = styled.div`
  width: 100%;
  padding: 0rem 0rem 0rem 1.5rem;
`;

const TextDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  min-width: 95%;
  padding-left: 5%;
  margin-top: 5px;
`;

const Circle = styled.div`
  width: 92px;
  height: 92px;
  background-color: #f8f8fb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 150px; /* Adjust this value as needed */
  left: 50%;
  transform: translate(-50%, -50%);
`;

export {
  BodyContainer,
  BoxContainer,
  BoxHeader,
  BoxBody,
  BoxFooter,
  BoxHeaderImage,
  BoxHeaderTitle,
  TextDiv,
  Circle,
};
