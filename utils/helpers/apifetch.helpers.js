import axios from "axios";

const mainAPI = "https://rent-car-appx.herokuapp.com";

export const apiFetch = axios.create({
  baseURL: mainAPI,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Accest-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "append,delete,entries,foreach,get,has,keys,set,values,Authorization,Content-Type",
  },
});
