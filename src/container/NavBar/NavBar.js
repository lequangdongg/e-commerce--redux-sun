import React, { useState } from "react";
import "./NavBar.scss";
import Brand from "../../components/NavBar/Brand";
import Price from "../../components/NavBar/Price";
import Rating from "../../components/NavBar/Rating";
import Refine from "../../components/NavBar/Refine";
import ShowResult from "../../components/NavBar/ShowResult";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchNavBar,
  fetchNavBarCheckbox,
  fetchNavBarCheckBoxBrand,
  fetNavBarClickRating,
  fetNavBarClickPrice,
} from "../../redux";
export default function NavBar() {
  const [isCheck, setIsCheck] = useState([]);
  const [searchBrand, setSearchBrand] = useState("");
  const [textInput, setTextInput] = useState({
    from: "",
    to: "",
  });
  const navbarShowResult = useSelector((state) => state.navbar.showResult);
  const navbarShowRefine = useSelector(
    (state) => state.navbar.showCheckboxRefine
  );
  const navbarShowBrand = useSelector((state) => state.navbar.showBrand);
  const navbarShowRating = useSelector((state) => state.navbar.showRating);
  const navBarShowPrice = useSelector((state) => state.navbar.showPrice);
  const dispatch = useDispatch();
  const handleClick = (items) => {
    dispatch(fetchNavBar(items));
  };

  const handleCheckBoxType = (values) => {
    console.log(values);
    if (values) {
      const covertValue = values.join("&description=");
      dispatch(fetchNavBarCheckbox(covertValue));
    } else {
      dispatch(fetchNavBarCheckbox());
    }
  };

  const handleCheckbox = (value) => {
    const currentIndex = isCheck.indexOf(value);
    const newChecked = [...isCheck];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setIsCheck(newChecked);
    handleCheckBoxType(newChecked);
  };

  const searchFilBrand = (event) => {
    const value = event.target.value;
    setSearchBrand(value);
  };
  const handleCheckBoxBrand = (values) => {
    if (values) {
      const covertValues = values.join("&brand=");
      dispatch(fetchNavBarCheckBoxBrand(covertValues));
    } else {
      dispatch(fetchNavBarCheckBoxBrand());
    }
  };

  const handleCheckRank = (items) => {
    dispatch(fetNavBarClickRating(items));
  };

  const handleCheckPrice = (from, to) => {
    setTextInput({
      ...textInput,
      from,
      to,
    });
    const filPrice = navBarShowPrice.filter(
      (items) => items.from === from && items.to === to
    );
    dispatch(fetNavBarClickPrice(...filPrice));
  };
  const handlePriceChange = (event) => {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    setTextInput({
      ...textInput,
      [name]: value,
    });
  };

  const handleSubmitPrice = (event) => {
    event.preventDefault();
    dispatch(fetNavBarClickPrice(textInput))
  };
  return (
    <div className="show">
      <ShowResult
        navbarShowResult={navbarShowResult}
        handleClick={handleClick}
      />
      <Refine
        navbarShowRefine={navbarShowRefine}
        handleCheckbox={handleCheckbox}
        isCheck={isCheck}
      />
      <Brand
        navbarShowBrand={navbarShowBrand}
        searchFilBrand={searchFilBrand}
        handleCheckBoxBrand={handleCheckBoxBrand}
        searchBrand={searchBrand}
      />
      <Rating
        navbarShowRating={navbarShowRating}
        handleCheckRank={handleCheckRank}
      />
      <Price
        navBarShowPrice={navBarShowPrice}
        handleCheckPrice={handleCheckPrice}
        handlePriceChange={handlePriceChange}
        textInput={textInput}
        handleSubmitPrice={handleSubmitPrice}
      />
      <footer className="footer">Data courtesy of Best Buy</footer>
    </div>
  );
}
