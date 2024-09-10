import axios from "axios";
import { Product } from "../types/product";

const BASE_URL = "https://fakestoreapi.com";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getProducts = async () => {
  return (await axiosInstance.get<Product[]>("products")).data;
};

export const getProduct = async (id: number) => {
  return (await axiosInstance.get<Product>(`products/${id}`)).data;
};
