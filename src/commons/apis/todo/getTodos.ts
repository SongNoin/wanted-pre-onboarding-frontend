import axios from "axios";
import { wantedAddress } from "../../constants/api";

export default async function getTodos() {
  return await axios
    .get(`${wantedAddress}/todos`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
    .then((res) => res.data);
}
