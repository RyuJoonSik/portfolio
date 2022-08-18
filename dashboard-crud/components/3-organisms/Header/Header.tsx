import React from "react";
import styled from "styled-components";

import contentAlign from "../../../styles/contentAlign";
import contentDirection from "../../../styles/contentDirection";
import responsiveSize from "../../../styles/responsiveSize";
import spaceSize from "../../../styles/spaceSize";
import { blue } from "../../../styles/color";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;

  ${contentDirection.horizontal};
  ${contentAlign.spaceBetweenCenter};
  gap: ${spaceSize.largest};
  padding: ${spaceSize.small} ${spaceSize.large};
  background-color: ${blue.default};
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);

  ${responsiveSize.mobile} {
    ${contentAlign.center};
    padding: 0;
  }
`;

export default function Header(): JSX.Element {
  const TITLE = "<frontend>류준식</frontend>";

  return (
    <StyledHeader>
      <h1>{TITLE}</h1>
      <HeaderNavigation />
    </StyledHeader>
  );
}