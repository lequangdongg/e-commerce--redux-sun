import React from "react";
import Title from "../../components/Title/Title";
import "./TitleEcom.scss";
import { fetchSearch } from "../../redux";
import { useSelector, useDispatch } from "react-redux";

export default function TitleEcom() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    dispatch(fetchSearch(value));
  };
  return (
    <div>
      <Title handleSearchChange={handleSearchChange} search={search} />
    </div>
  );
}
