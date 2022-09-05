import styled, { css } from "styled-components";

import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import contentDirection from "../../_styles/contentDirection";
import elementColor from "../../_styles/elementColor";
import hoverEffect from "../../_styles/hoverEffect";
import activeEffect from "../../_styles/activeEffect";

const sectionHeaderButtonStyle = css`
  ${elementColor.blue};
  ${hoverEffect.blue};
  ${activeEffect.blue};
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.smaller};
  padding: ${spaceSize.small} ${spaceSize.small};
  border-radius: ${spaceSize.smaller};
`;

const SectionHeaderButton = styled.button`
  ${sectionHeaderButtonStyle};
`;

export default SectionHeaderButton;
