import axios from "axios";
import { wantedAddress } from "../../constants/api";
import { IUpdateTodo } from "../../types/IUpdateTodo";

export const updateTodo = async (id: number, todo: IUpdateTodo) => {
  await axios.put(`${wantedAddress}/todos/${id}`, todo, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": `application/json`,
    },
  });
};
