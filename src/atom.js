import { atom } from "recoil";

export const isAuthenticated = atom({
  key: "authenticated",
  default: false,
});

export const isError = atom({
  key: "error",
  default: {
    status: false,
    message: "",
  },
});
