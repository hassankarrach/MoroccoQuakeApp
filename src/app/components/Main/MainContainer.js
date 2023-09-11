import React from "react";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import { StyledMain } from "./Styled.Main";

export default function MainContainer() {
  return (
    <StyledMain>
      <LeftSection />
      <RightSection />
    </StyledMain>
  );
}
