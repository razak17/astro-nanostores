import { atom } from "nanostores";

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
};

export const user = atom({
  _id: "",
  name: "",
  email: "",
  password: "",
});

export const users = atom([
  {
    _id: "admin",
    name: "Razak Mo",
    email: "razakmoapps@gmail.com",
    password: "password",
  },
]);
