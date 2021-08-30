import { HouseInfoType } from "@/types";
import { requestWrapper } from "./base";

export async function getAllHouses() {
  return await requestWrapper({
    url: "/house",
    method: "GET",
  });
}

export async function addHouses(houseInfo: HouseInfoType) {
  
  return await requestWrapper({
    url: "/house-add",
    method: "POST",
    params: {
      ...(houseInfo || {}),
    },
  });
}

export async function updateHouses(houseInfo: HouseInfoType) {
  return await requestWrapper({
    url: "/house-update",
    method: "POST",
    params: {
      ...(houseInfo || {}),
    },
  });
}

export async function deleteHouse(id: number) {
  return await requestWrapper({
    url: "/house-delete",
    method: "POST",
    params: {
      id: id,
    },
  });
}
