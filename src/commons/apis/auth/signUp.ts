import axios from "axios";
import { wantedAddress } from "../../constants/api";
import { IUserAccount } from "../../types/IUserAccount";

export const signUpApi = async (userAccount: IUserAccount) =>
  await axios.post(`${wantedAddress}/auth/signup`, userAccount);
