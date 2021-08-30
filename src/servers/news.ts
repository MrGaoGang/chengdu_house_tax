import { requestWrapper } from "./base";

export async function getAllNews() {
  return await requestWrapper({
    url: "/news",
    method: "GET",
  });
}
