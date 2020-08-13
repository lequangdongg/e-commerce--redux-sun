import { FETCH_SEARCH } from "./titleType";
const initialState = "";

const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return action.keyword;
    
    default:
      return state;
  }
};

export default titleReducer;
