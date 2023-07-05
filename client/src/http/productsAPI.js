import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export const getAllProducts = async () => {
  const response = await api.get("products");
  return response.data;
};

export const getSingleProduct = async (productName) => {
  const response = await api.get(`products/${productName}`);
  return response.data;
};

export const getAllBrands = async () => {
  const response = await api.get("brands");
  return response.data;
};

export const getSingleBrand = async (brandName) => {
  const response = await api.get(`brands/${brandName}`);
  return response.data;
};
