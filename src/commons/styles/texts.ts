import styled from "styled-components";
import { colors } from "../constants/colors";

const LogoText = styled.span`
  font-family: "Poppins";
  font-style: Bold;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: ${colors.white};
  cursor: pointer;
`;

const HeaderTitleText = styled.span`
  font-family: "Noto Sans KR";
  font-style: Bold;
  font-weight: 700;
  font-size: 17px;
  line-height: 100%;
  color: ${colors.white};
  cursor: pointer;
`;

const H1 = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 100%;
`;

const P1 = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
`;

export const StyledText = { LogoText, HeaderTitleText, H1, P1 };
