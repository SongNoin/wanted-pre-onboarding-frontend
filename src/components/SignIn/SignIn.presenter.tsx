import styled from "styled-components";

interface Props {
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSignIn: () => void;
  isVerifySigninForm: boolean;
}

export default function SignInPresenter({
  onChangeEmail,
  onChangePassword,
  onClickSignIn,
  isVerifySigninForm,
}: Props) {
  return (
    <>
      <Wrap>
        <InputWrap>
          <span>이메일</span>
          <input onChange={(e) => onChangeEmail(e)} />
        </InputWrap>
        <InputWrap>
          <span>비밀번호</span>
          <input type="password" onChange={(e) => onChangePassword(e)} />
        </InputWrap>
        <button disabled={!isVerifySigninForm} onClick={onClickSignIn}>
          로그인
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
