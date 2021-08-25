import axios from "axios";
import { BASE_API_URL } from "./base";

export async function getAllNews() {
  return await axios.get(BASE_API_URL + "/news", {
    withCredentials: true,
  });
}
