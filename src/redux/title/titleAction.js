import { FETCH_SEARCH } from "./titleType";
import axios from "axios";

export const fetchSearch = (keyword) => {
  return async (dispatch) => {
    if (keyword) {
      const res = await axios.get(
        `http://localhost:4000/products?q=${keyword}`
      );
      dispatch(searchItem(res.data, keyword));
    }
  };
};

export const searchItem = (keyword) => {
  return {
    type: FETCH_SEARCH,
    keyword,
  };
};
