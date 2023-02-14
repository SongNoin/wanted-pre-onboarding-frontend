import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../commons/constants/colors";
import { StyledPadding } from "../../commons/styles/padding";
import { StyledText } from "../../commons/styles/texts";
import { isLogin } from "../../commons/utils/auth/isLogin";

export default function Header() {
  const navigate = useNavigate();
  function onClickMoveHome() {
    navigate("/");
  }
  function onClickMoveToSignIn() {
    navigate("/signin");
  }
  function onClickMoveToSignup() {
    navigate("/signup");
  }
  function onClickMoveToTodo() {
    navigate("/todo");
  }
  function onClickLogout() {
    localStorage.setItem("accessToken", "");
    window.location.reload();
  }
  return (
    <Wrap>
      <LogoWrap>
        <StyledText.LogoText onClick={onClickMoveHome}>
          TO DO
        </StyledText.LogoText>
      </LogoWrap>
      <HeaderTitleWrap>
        {isLogin && (
          <>
            <StyledText.HeaderTitleText onClick={onClickMoveToTodo}>
              나의 투두
            </StyledText.HeaderTitleText>
            <StyledPadding width={10} />
          </>
        )}
        <StyledText.HeaderTitleText
          onClick={isLogin ? onClickLogout : onClickMoveToSignIn}
        >
          {isLogin ? "로그아웃" : "로그인"}
        </StyledText.HeaderTitleText>
        <StyledPadding width={10} />
        {!isLogin && (
          <StyledText.HeaderTitleText onClick={onClickMoveToSignup}>
            회원가입
          </StyledText.HeaderTitleText>
        )}
      </HeaderTitleWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${colors.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

const LogoWrap = styled.div``;
const HeaderTitleWrap = styled.div`
  display: flex;
`;
