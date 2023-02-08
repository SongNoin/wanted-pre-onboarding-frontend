import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpApi } from "../../commons/apis/auth/signUp";
import SignUpUI from "./SignUp.presenter";

export default function SignUpContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorTxt, setEmailErrorTxt] = useState("");
  const [passwordErrorTxt, setPasswordErrorTxt] = useState("");
  const navigate = useNavigate();

  const isVerifySignupForm =
    email !== "" &&
    password !== "" &&
    emailErrorTxt === "" &&
    passwordErrorTxt === "";

  function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      setEmailErrorTxt("이메일을 입력해주세요.");
      return;
    }

    if (!e.target.value.includes("@")) {
      setEmailErrorTxt("@를 포함해주세요.");
      return;
    }

    setEmailErrorTxt("");

    setEmail(e.target.value);
  }

  function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      setPasswordErrorTxt("비밀번호를 입력해주세요.");
      return;
    }

    if (e.target.value.length < 8) {
      setPasswordErrorTxt("비밀번호를 8자 이상으로 해주세요.");
      return;
    }
    setPasswordErrorTxt("");

    setPassword(e.target.value);
  }

  function onClickSignUp() {
    signUpApi({ email, password })
      .then(() => {
        alert("가입에 성공하였습니다!\n로그인을 해주세요.");
        navigate("/signin");
      })
      .catch((e) => alert(e.response.data.message));
  }

  return (
    <SignUpUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      emailErrorTxt={emailErrorTxt}
      passwordErrorTxt={passwordErrorTxt}
      onClickSignUp={onClickSignUp}
      isVerifySignupForm={isVerifySignupForm}
    />
  );
}
