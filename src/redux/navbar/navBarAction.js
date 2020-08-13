import {
  CLICK_SHOW_RESULT,
  FETCH_SHOW_RESULT,
  CHECK_REFINE,
  CHECK_BRAND,
  CLICK_RATING,
  CLICK_PRICE,
} from "./navBarType";
import axios from "axios";

export const fetchNavBar = (result, check) => {
  return async (dispatch) => {
    if (result || check) {
      const res = await axios.get(
        `http://localhost:4000/products?${`result=${result}`}`
      );
      dispatch(clickProductShowResult(res.data, result));
    }
  };
};

export const fetchNavBarCheckbox = (check) => {
  return async (dispatch) => {
    const resCheck = await axios.get(
      `http://localhost:4000/products?${`description=${check}`}`
    );
    const resCheck1 = await axios.get(`http://localhost:4000/products?`);
    if (check) {
      dispatch(checkProductRefine(resCheck.data, check));
    } else {
      dispatch(checkProductRefine(resCheck1.data));
    }
  };
};

export const fetchNavBarCheckBoxBrand = (brand) => {
  return async (dispatch) => {
    const resCheck = await axios.get(
      `http://localhost:4000/products?${`brand=${brand}`}`
    );
    const resNotCheck = await axios.get(`http://localhost:4000/products?`);
    if (brand) {
      dispatch(checkProductBrand(resCheck.data, brand));
    } else {
      dispatch(checkProductBrand(resNotCheck.data));
    }
  };
};

export const fetNavBarClickRating = (rating) => {
  return async (dispatch) => {
    if (rating || rating === 0) {
      const res = await axios.get(
        `http://localhost:4000/products?${`ranking=${rating}`}`
      );
      dispatch(clickProductRating(res.data, rating));
    }
  };
};

export const fetNavBarClickPrice = price => {
  return async (dispatch) => {
    const res = await axios.get(
      `http://localhost:4000/products?&from=${price.from}&to=${price.to}`
    );
    dispatch(clickProductPrice(res.data, price));
  };
};

export const getProductsShowResult = () => {
  return {
    type: FETCH_SHOW_RESULT,
  };
};

export const clickProductShowResult = (result) => {
  return {
    type: CLICK_SHOW_RESULT,
    result,
  };
};

export const checkProductRefine = (check) => {
  return {
    type: CHECK_REFINE,
    check,
  };
};

export const checkProductBrand = (brand) => {
  return {
    type: CHECK_BRAND,
    brand,
  };
};

export const clickProductRating = (rating) => {
  return {
    type: CLICK_RATING,
    rating,
  };
};

export const clickProductPrice = price => {
  return {
    type: CLICK_PRICE,
    price
  };
};
