import axios from "axios";
import { config } from "../config/config";
import { AddProductT, UpdateProductT } from "../types";
import { BASE_URL } from "./../config/baseurl";

const addProduct = async (payload: AddProductT) => {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("description", payload.description);
  formData.append("category", payload.category);
  formData.append("price", payload.price);
  formData.append("image", payload.image);
  try {
    const response = await axios.post(
      `${BASE_URL}/addProduct`,
      formData,
      config
    );
    return response.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getProducts`);
    return response.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

const updateProduct = async (payload: UpdateProductT) => {
  const formData = new FormData();

  if (payload.image === null) {
    formData.append("name", payload.name);
    formData.append("description", payload.description);
    formData.append("category", payload.category);
    formData.append("price", payload.price);
  } else {
    formData.append("name", payload.name);
    formData.append("description", payload.description);
    formData.append("category", payload.category);
    formData.append("price", payload.price);
    formData.append("image", payload.image);
  }
  try {
    const response = await axios.put(
      `${BASE_URL}/updateProduct/${payload.id}`,
      formData,
      config
    );
    return response.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

const deleteProduct = async (payload: string) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/deleteProduct/${payload}`,
      config
    );
    return "Product deleted successfully";
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

const productServices = {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};

export default productServices;
