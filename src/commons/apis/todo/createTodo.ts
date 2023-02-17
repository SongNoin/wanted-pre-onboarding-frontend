import axios from "axios";
import { wantedAddress } from "../../constants/api";
import { INewTodo } from "../../types/INewTodo";

export const createTodo = async (todo: INewTodo) =>
  await axios.post(`${wantedAddress}/todos`, todo, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": `application/json`,
    },
  });
