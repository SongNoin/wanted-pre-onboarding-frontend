import axios from "axios";
import { wantedAddress } from "../../constants/api";
import { IUserAccount } from "../../types/IUserAccount";

export const signUpApi = (userAccount: IUserAccount) =>
  axios.post(`${wantedAddress}/auth/signup`, userAccount);
