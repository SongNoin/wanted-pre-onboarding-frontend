import axios from "axios";
import { IUserAccount } from "../../types/IUserAccount";

export const signInApi = (userAccount: IUserAccount) =>
  axios.post(
    `https://pre-onboarding-selection-task.shop/auth/signin`,
    userAccount
  );
