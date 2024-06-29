import axios from "axios";

export const createAxios = (type = "api") => {
  const token = localStorage.getItem("access_token");

  let options;

  type === "login"
    ? (options = {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      baseURL: process.env.REACT_APP_BASE_URL
    })
    : type === "api"
      ? (options = {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${ token }`,
          "Access-Control-Allow-Origin": "*"
        },
        baseURL: process.env.REACT_APP_BASE_URL
      })
      : type === "cors"
        ? (options = {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${ token }`,
            "Access-Control-Allow-Origin": "*"
          },
          baseURL: process.env.REACT_APP_BASE_URL
        })
        : (options = {
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
          baseURL: process.env.REACT_APP_BASE_URL
        });

  let instance = axios.create(options);

  instance.interceptors.response.use(
    response => response,
    error => Promise.reject({ ...error })
  );

  return instance;
};

export * from "./endpoints";
