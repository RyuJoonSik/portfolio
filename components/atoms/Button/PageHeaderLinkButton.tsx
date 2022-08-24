import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import contentDirection from "../../_styles/contentDirection";
import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import fontSize from "../../_styles/fontSize";
import responsiveSize from "../../_styles/responsiveSize";
import { blueButtonStyle } from "../../atoms/Button/BlueButton";

export const pageHeaderLinkButtonStyle = css`
  ${blueButtonStyle};
  ${contentDirection.vertical};
  ${contentAlign.center};
  min-width: 5rem;
  width: 5rem;
  padding: ${spaceSize.small} 0;
  border-radius: ${spaceSize.smaller};

  ${fontSize.smaller};

  ${responsiveSize.mobile} {
    border-radius: 0;
    flex: 1;
  }
`;

const PageHeaderLinkButton = styled(Link)`
  ${pageHeaderLinkButtonStyle};
`;

export default PageHeaderLinkButton;