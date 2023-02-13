import axios from "axios";
import { LoginT, RegisterT } from "../types";
import { BASE_URL } from "./../config/baseurl";

const register = async (payload: RegisterT) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, payload);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

const login = async (payload: LoginT) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, payload);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const authServices = {
  register,
  login,
  logout,
};

export default authServices;
