import { request } from "./index";

const BASE_URL = `/api/baizi`;

export const createBaizi = async body => {
  const requestOptions = {
    method: "POST",
    url: BASE_URL,
    data: body,
    headers: {
      authorization: localStorage.getItem("baiziUserToken")
    }
  };
  const data = await request(requestOptions);
  return data;
};

export const fetchBaizis = async () => {
  const requestOptions = {
    method: "GET",
    url: BASE_URL,
    headers: {
      authorization: localStorage.getItem("baiziUserToken")
    }
  };
  const data = await request(requestOptions);
  return data;
};
