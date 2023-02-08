import axios from "axios";
import { wantedAddress } from "../../constants/api";
import { IUserAccount } from "../../types/IUserAccount";

export const signInApi = (userAccount: IUserAccount) =>
  axios
    .post(`${wantedAddress}/auth/signin`, userAccount)
    .then((res) => localStorage.setItem("accessToken", res.data.access_token));
