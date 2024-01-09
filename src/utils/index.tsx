import axios from "axios";
import { API } from "src/constants";

export const http = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});
