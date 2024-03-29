import styled from "styled-components";

import contentAlign from "../../_styles/contentAlign";
import contentDirection from "../../_styles/contentDirection";

const HorizontalList = styled.ul`
  ${contentDirection.horizontal};
  ${contentAlign.center}
  flex-wrap: wrap;

  li {
    flex: 1 1 300px;
  }
`;

export default HorizontalList;
