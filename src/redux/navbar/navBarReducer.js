import {
  CLICK_SHOW_RESULT,
  CHECK_REFINE,
  CHECK_BRAND,
  CLICK_RATING,
  CLICK_PRICE,
} from "./navBarType";

const initialState = {
  showResult: {
    Appliancies: {
      id: 1,
      name: "Appliances",
      active: "false",
      search: "Appliancies",
    },
    Audio: {
      id: 2,
      name: "Audio",
      active: "false",
      search: "Audio",
    },
    Cameras: {
      id: 3,
      name: "Cameras & Cammorders",
      active: "false",
      search: "Cameras",
    },
    Car: {
      id: 4,
      name: "Car Electric & GPS",
      active: "false",
      search: "Car",
    },
    Cell: {
      id: 5,
      name: "Cell Phones",
      active: "false",
      search: "Cell",
    },
    Computer: {
      id: 6,
      name: "Computer & Tablet",
      active: "false",
      search: "Computer",
    },
    Health: {
      id: 7,
      name: "Health, Fitness & Beatiful",
      active: "false",
      search: "Health",
    },
    Office: {
      id: 8,
      name: "Office & School Supplies",
      active: "false",
      search: "Office",
    },
    TV: {
      id: 9,
      name: "TV & Home Theater",
      active: "false",
      search: "TV",
    },
    Video: {
      id: 10,
      name: "Video Games",
      active: "false",
      search: "Video",
    },
  },
  showCheckboxRefine: [
    {
      id: 1,
      name: "Streaming media plyr",
      count: 5,
    },
    {
      id: 2,
      name: "Burst skus",
      count: 5,
    },
    {
      id: 3,
      name: "Voice assistants",
      count: 6,
    },
    {
      id: 4,
      name: "Apple",
      count: 2,
    },
    {
      id: 5,
      name: "45''-50''  tv's",
      count: 2,
    },
    {
      id: 6,
      name: "Earbud headphones",
      count: 2,
    },
    {
      id: 7,
      name: "Smart lighting",
      count: 5,
    },
    {
      id: 8,
      name: "Toy 2 life character",
      count: 10,
    },
    {
      id: 9,
      name: "Tv mounts",
      count: 2,
    },
    {
      id: 10,
      name: "External",
      count: 2,
    },
    {
      id: 11,
      name: "Blu-ray",
      count: 2,
    },
    {
      id: 12,
      name: "51''-60'' tv's",
      count: 2,
    },
    {
      id: 13,
      name: "At&t go phone",
      count: 2,
    },
    {
      id: 14,
      name: "Mid 32'' lcd",
      count: 2,
    },
    {
      id: 15,
      name: "Wireless speakers",
      count: 2,
    },
    {
      id: 16,
      name: "Ream paper",
      count: 1,
    },
  ],

  showBrand: [
    {
      id: 1,
      name: "Apple",
      count: 14,
    },
    {
      id: 2,
      name: "HP",
      count: 8,
    },
    {
      id: 3,
      name: "Insignia",
      count: 8,
    },
    {
      id: 4,
      name: "Meta",
      count: 9,
    },
    {
      id: 5,
      name: "SamSung",
      count: 9,
    },
  ],
  showRating: [
    {
      id: 1,
      ranking: 5,
      quantity: 3,
    },
    {
      id: 2,
      ranking: 4,
      quantity: 22,
    },
    {
      id: 3,
      ranking: 3,
      quantity: 5,
    },
    {
      id: 4,
      ranking: 2,
      quantity: 4,
    },
    {
      id: 5,
      ranking: 1,
      quantity: 4,
    },
    {
      id: 6,
      ranking: 0,
      quantity: 10,
    },
  ],
  showPrice: [
    {
      id: 1,
      price: "≤1",
      to: 1,
      from: "",
    },
    {
      id: 2,
      price: "$1 - 80",
      from: 1,
      to: 80,
    },
    {
      id: 3,
      price: "$80 -160",
      from: 80,
      to: 160,
    },
    {
      id: 4,
      price: "$160 - 240",
      from: 160,
      to: 240,
    },
    {
      id: 5,
      price: "$240 - 1,820",
      from: 240,
      to: 1820,
    },
    {
      id: 6,
      price: "$1,820 - 3,400",
      from: 1820,
      to: 3400,
    },
    {
      id: 7,
      price: "$3,400 - 4,980",
      from: 3400,
      to: 4980,
    },
    {
      id: 8,
      price: "≥ $4,980",
      to: "",
      from: 4890,
    },
  ],
};
const navBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_SHOW_RESULT:
      console.log(action)
      return { ...state, result: action.result };
    case CHECK_REFINE:
      return { ...state, clickCheck: action.check };
    case CHECK_BRAND:
      return { ...state, checkBrand: action.brand };
    case CLICK_RATING:
      return { ...state, clickRating: action.rating };
    case CLICK_PRICE:
      return { ...state ,clickPrice: action.price };
    default:
      return state;
  }
};

export default navBarReducer;
