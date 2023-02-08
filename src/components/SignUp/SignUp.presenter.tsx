import styled from "styled-components";

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
        <InputWrap>
          <span>이메일</span>
          <input onChange={(e) => onChangeEmail(e)} />
        </InputWrap>
        <ErrorText>{emailErrorTxt}</ErrorText>
        <InputWrap>
          <span>비밀번호</span>
          <input type="password" onChange={(e) => onChangePassword(e)} />
        </InputWrap>
        <ErrorText>{passwordErrorTxt}</ErrorText>
        <button disabled={!isVerifySignupForm} onClick={onClickSignUp}>
          가입하기
        </button>
      </Wrap>
    </>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ErrorText = styled.div`
  color: red;
`;
