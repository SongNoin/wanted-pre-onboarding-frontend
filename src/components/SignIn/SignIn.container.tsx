import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInApi } from "../../commons/apis/auth/signIn";
import { isLogin } from "../../commons/utils/auth/isLogin";
import SignInPresenter from "./SignIn.presenter";

export default function SignInContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isVerifySigninForm = email !== "" && password !== "";

  useEffect(() => {
    if (isLogin) {
      navigate("/todo");
    }
  }, []);

  function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function onClickSignIn() {
    signInApi({ email, password })
      .then(() => {
        window.location.reload();
        navigate("/todo");
        alert("로그인에 성공했습니다!");
      })
      .catch((e) => alert(e.response.data.message));
  }

  return (
    <SignInPresenter
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSignIn={onClickSignIn}
      isVerifySigninForm={isVerifySigninForm}
    />
  );
}
