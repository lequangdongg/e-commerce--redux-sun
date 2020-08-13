import { FETCH_PRODUCT, SORT_PRODUCT } from "./productType";
const initialState = [];

const sortPro = (arr, number) => {
  if (number == 2) {
    return arr.sort((a, b) => a.price - b.price);
  } else if (number == 3) {
    return arr.sort((a, b) => b.price - a.price);
  }
  return [...arr];
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      let arr = state.concat(action.product);
      return sortPro(arr, action.number);
    case SORT_PRODUCT:
      return sortPro(state, action.number);
    default:
      return [...state];
  }
};

export default productReducer;
