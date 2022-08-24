import React, { useContext } from "react";
import { DarkMode } from "@styled-icons/material/DarkMode";
import { LightMode } from "@styled-icons/material/LightMode";
import styled from "styled-components";

import { whiteButtonStyle } from "../../atoms/Button/WhiteButton";
import contentDirection from "../../_styles/contentDirection";
import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import responsiveSize from "../../_styles/responsiveSize";
import { ColorThemeContext } from "../../../contexts/ColorThemeContext";
import { blue, yellow } from "../../_styles/color";
import CustomText from "../../atoms/Text/CustomText";

const StyledFixedButton = styled.button`
  ${whiteButtonStyle};
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.small};
  padding: ${spaceSize.small};
  border-radius: 1.5rem;
  opacity: 0.7;
  box-shadow: 0px 4px 6px -2px rgb(0 0 0 / 12%),
    0px 2px 2px -1px rgb(0 0 0 / 5%);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }

  ${responsiveSize.mobile} {
    width: 44px;
    height: 44px;
    border-radius: 50%;

    ${CustomText} {
      display: none;
    }
  }
`;

interface DarkModeButtonProps {
  className?: string;
}

export default function DarkModeButton({
  className,
}: DarkModeButtonProps): JSX.Element {
  const { isDarkMode, setIsDarkMode } = useContext(ColorThemeContext);

  const onClick = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <StyledFixedButton onClick={onClick} className={className}>
      {isDarkMode ? (
        <>
          <LightMode size={16} fill={yellow.default} />
          <CustomText size="small">라이트 모드</CustomText>
        </>
      ) : (
        <>
          <DarkMode size={16} fill={blue.dark} />
          <CustomText>다크 모드</CustomText>
        </>
      )}
    </StyledFixedButton>
  );
}