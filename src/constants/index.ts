export const API = import.meta.env.VITE_API;

export const ENDPOINT = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/create",
  },
  BOARDS: {
    LIST: "/board/list",
  },
};

export const ROUTES = {
  HOME: "/",
  BOARD: "/board/:id",
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
  },
};
