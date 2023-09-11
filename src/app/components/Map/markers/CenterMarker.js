import React from "react";
import styled from "styled-components";

function CenterMarker() {
  return <StyledCenterMark />;
}

const StyledCenterMark = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  animation: pulse 1s infinite alternate;
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

export default CenterMarker;
