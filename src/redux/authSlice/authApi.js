import axios from "axios";
import { LOGIN, LOGOUT, SIGNUP, USERINFO } from "../../api";

const baseURL = process.env.REACT_APP_BASE_URL;

export function setHeadersToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${ token }`;
}
export function unSetHeadersToken() {
  axios.defaults.headers.common.Authorization = "";
}

export const signUpApi = async userData => {
  const { data } = await axios.post(`${ baseURL } ${ SIGNUP }`, userData);
  setHeadersToken(data.token);
  return data;
};

export const signInApi = async userData => {
  const { data } = await axios.post(`${ baseURL }${ LOGIN }`, userData);
  setHeadersToken(data.token);
  return data;
};

export async function getUserInfoApi() {
  const { data } = await axios(USERINFO);
  return data;
}

export const logoutApi = async () => {
  const { data } = await axios.post(`${ baseURL } ${ LOGOUT }`);
  unSetHeadersToken();
  return data;
};
