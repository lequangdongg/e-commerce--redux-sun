import { FETCH_PRODUCT, SORT_PRODUCT } from "./productType";
import axios from "axios";

export const fetchData = (number) => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:4000/products?`);
    dispatch(setProduct(res.data, number));
  };
};

export const setProduct = (product, number) => {
  return {
    type: FETCH_PRODUCT,
    product,
    number,
  };
};

export const sortProduct = (number) => {
  return {
    type: SORT_PRODUCT,
    number,
  };
};
