import React, { useState } from "react";
import styled from "styled-components";

import contentDirection from "../../_styles/contentDirection";
import elementColor from "../../_styles/elementColor";

interface DailyLifePostQueryButtonListProps {
  handleOrderByDesc: () => void;
  handleOrderByAsc: () => void;
}

const StyledDailyLifePostQueryButtonList = styled.div`
  ${contentDirection.horizontal};

  button {
    ${elementColor.blue};
    width: 100%;
    border-radius: 0;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;

  transform: translate(0, 32px);
`;

export default function DailyLifePostQueryButtonList({
  handleOrderByDesc,
  handleOrderByAsc,
}: DailyLifePostQueryButtonListProps): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleByDesc = () => {
    handleOrderByDesc();
    handleDropdown();
  };

  const handleByAsc = () => {
    handleOrderByAsc();
    handleDropdown();
  };

  return (
    <StyledDailyLifePostQueryButtonList>
      <button onClick={handleDropdown}>토글 버튼</button>
      {isDropdownOpen && (
        <ButtonContainer>
          <button onClick={handleByDesc}>최신 순</button>
          <button onClick={handleByAsc}>오래된 순</button>
        </ButtonContainer>
      )}
    </StyledDailyLifePostQueryButtonList>
  );
}
