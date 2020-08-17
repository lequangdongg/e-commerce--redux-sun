import React, { useEffect, useState } from "react";
import "./Product.scss";
import Pagination from "../../components/Product/Pagination";
import ProductItem from "../../components/Product/ProductItem";
import ProductSort from "../../components/Product/ProductSort";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, sortProduct } from "../../redux";
export default function Product() {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(16);
  const products = useSelector((state) => state.products);
  const title = useSelector((state) => state.title);
  const resultShow = useSelector((state) => state.navbar.result);
  const clickCheckBox = useSelector((state) => state.navbar.clickCheck);
  const clickCheckBrand = useSelector((state) => state.navbar.checkBrand);
  const clickRating = useSelector((state) => state.navbar.clickRating);
  const clickPrice = useSelector((state) => state.navbar.clickPrice);
  const [curr, setCurr] = useState([]);
  useEffect(() => {
    dispatch(fetchData(sort));
    if (products.length <= 0) {
      setCurr(products.slice(indexOfFrirstProduct, indexOfLastProducts));
    }
  }, []);
  const indexOfLastProducts = currentPage * productPerPage;
  const indexOfFrirstProduct = indexOfLastProducts - productPerPage;
  const productShow = products.slice(indexOfFrirstProduct, indexOfLastProducts);

  useEffect(() => {
    if (title) {
      setCurr(title.slice(indexOfFrirstProduct, indexOfLastProducts));
    }
  }, [title]);

  useEffect(() => {
    if (resultShow) {
      setCurr(resultShow.slice(indexOfFrirstProduct, indexOfLastProducts));
    }
  }, [resultShow]);

  useEffect(() => {
    if (clickCheckBox) {
      setCurr(clickCheckBox.slice(indexOfFrirstProduct, indexOfLastProducts));
    }
  }, [clickCheckBox]);

  useEffect(() => {
    if (clickCheckBrand) {
      setCurr(clickCheckBrand.slice(indexOfFrirstProduct, indexOfLastProducts));
    }
  }, [clickCheckBrand]);

  useEffect(() => {
    if (clickRating) {
      setCurr(clickRating.slice(indexOfFrirstProduct, indexOfLastProducts));
    }
  }, [clickRating]);

  useEffect(() => {
    if (clickPrice) {
      setCurr(clickPrice.slice(indexOfFrirstProduct, indexOfLastProducts));
    }
  }, [clickPrice]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const showRating = (rating) => {
    let result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(<i key={i} className="fas fa-star"></i>);
    }
    for (let j = 1; j <= 5 - rating; j++) {
      result.push(<i key={j + 100} className="far fa-star"></i>);
    }
    return result;
  };
  const handleChange = (event) => {
    setSort(event.target.value);
    dispatch(sortProduct(event.target.value));
  };
  return (
    <div className="products">
      <ProductSort
        handleChange={handleChange}
        sort={sort}
        length={products.length}
      />
      <div className="product__content">
        {curr.length > 0 ? curr.map((items) => (
          <ProductItem
            key={items.id}
            products={items}
            showRating={showRating}
          />
        )) : productShow.map((items) => (
          <ProductItem
            key={items.id}
            products={items}
            showRating={showRating}
          />
        )) }
      </div>
      <Pagination
        productPerPage={productPerPage}
        totalProduct={products.length}
        paginate={paginate}
      />
    </div>
  );
}
