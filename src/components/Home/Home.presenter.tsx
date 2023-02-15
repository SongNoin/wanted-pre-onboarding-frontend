import styled from "styled-components";
import { StyledPadding } from "../../commons/styles/padding";
import { StyledText } from "../../commons/styles/texts";
import { isLogin } from "../../commons/utils/auth/isLogin";

export default function HomePresenter() {
  return (
    <Wrap>
      <StyledText.H1>투두에 오신걸 환영합니다!</StyledText.H1>
      <StyledPadding height={30} />
      {!isLogin && <StyledText.H1>상단에서 로그인을 해주세요!</StyledText.H1>}
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
