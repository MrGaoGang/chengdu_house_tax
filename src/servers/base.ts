export const BASE_API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:9000"
    : "https://service-ow8622vh-1252273386.cd.apigw.tencentcs.com/release";
import { getItem } from "@/utils/url";
import axios from "axios";

type WrapperTypes = {
  method: "GET" | "POST";
  url: string;
  params?: {
    [key: string]: string | number | undefined;
  };
};
const instance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});
export function requestWrapper(info: WrapperTypes) {
  const { method, url, params = {} } = info;
  return new Promise((resolve, reject) => {
    instance
      .request({
        method: method,
        data: {
          ...params,
        },
        params: {
          phone: getItem("iphone_num"),
        },
        url: url,
      })
      .then((res) => {
        if (res.data) {
          if (res.data.code === 0) {
            resolve(res.data.result);
          } else {
            reject(res.data.msg);
          }
        } else {
          reject("请求失败,数据为空:" + res.status);
        }
      })
      .catch(() => {
        reject("请求失败");
      });
  });
}
