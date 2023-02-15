import styled from "styled-components";
import CommonButton from "../../commons/Buttons/CommonButton";
import CommonInput from "../../commons/Inputs/CommonInput";
import { StyledPadding } from "../../commons/styles/padding";
import { StyledText } from "../../commons/styles/texts";

interface Props {
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailErrorTxt: string;
  passwordErrorTxt: string;
  onClickSignUp: () => void;
  isVerifySignupForm: boolean;
}

export default function SignUpUI({
  onChangeEmail,
  onChangePassword,
  emailErrorTxt,
  passwordErrorTxt,
  onClickSignUp,
  isVerifySignupForm,
}: Props) {
  return (
    <>
      <Wrap>
        <StyledText.H1>회원가입</StyledText.H1>
        <StyledPadding height={30} />
        <InputWrap>
          <StyledText.H2>이메일</StyledText.H2>
          <StyledPadding height={10} />
          <CommonInput
            dataTestId="email-input"
            onChange={(e) => onChangeEmail(e)}
          />
        </InputWrap>
        <ErrorText>{emailErrorTxt}</ErrorText>
        <StyledPadding height={20} />
        <InputWrap>
          <StyledText.H2>비밀번호</StyledText.H2>
          <StyledPadding height={10} />
          <CommonInput
            dataTestId="password-input"
            type="password"
            onChange={(e) => onChangePassword(e)}
          />
        </InputWrap>
        <ErrorText>{passwordErrorTxt}</ErrorText>
        <StyledPadding height={30} />
        <CommonButton
          text="가입하기"
          dataTestId="signup-button"
          disabled={!isVerifySignupForm}
          onClick={onClickSignUp}
        />
      </Wrap>
    </>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ErrorText = styled.div`
  color: red;
`;
