import { requestWrapper } from "./base";

export async function getCosInfo() {
  return await requestWrapper({
    url: "/cos-tmp",
    method: "GET",
  });
}
