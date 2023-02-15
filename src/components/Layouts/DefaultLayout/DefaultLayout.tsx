import styled from "styled-components";
import { colors } from "../../../commons/constants/colors";
import Header from "../Header";

export default function DefaultLayout({
  children,
}: {
  children?: React.ReactElement;
}) {
  return (
    <>
      <LayoutBG>
        <LayoutWrap>
          <Header />
          <InnerWrap>{children}</InnerWrap>
        </LayoutWrap>
      </LayoutBG>
    </>
  );
}

const LayoutBG = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.ligntMain};
`;
const LayoutWrap = styled.div`
  height: 100vh;
  width: 1023px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.bg};
`;

const InnerWrap = styled.div`
  padding: 30px;
`;
