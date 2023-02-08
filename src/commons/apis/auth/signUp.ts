import axios from "axios";
import { IUserAccount } from "../../types/IUserAccount";

export const signUpApi = (userAccount: IUserAccount) =>
  axios.post(
    `https://pre-onboarding-selection-task.shop/auth/signup`,
    userAccount
  );
