import axios from "axios";
import { wantedAddress } from "../../constants/api";

export const deleteTodo = async (id: number) => {
  await axios.delete(`${wantedAddress}/todos/${id}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
};
