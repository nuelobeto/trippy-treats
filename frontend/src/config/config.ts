import { UserT } from "../types";

const userStorage = localStorage.getItem("user");
let user;
if (typeof userStorage === "string") {
  user = JSON.parse(userStorage);
}

export const config = {
  headers: {
    Authorization: `Bearer ${user.token}`,
  },
};
