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
  }, []);

  const indexOfLastProducts = currentPage * productPerPage;
  const indexOfFrirstProduct = indexOfLastProducts - productPerPage;
  let currentProducts = products.slice(indexOfFrirstProduct, indexOfLastProducts);
  if(title){  
    currentProducts = title.slice(indexOfFrirstProduct, indexOfLastProducts);
  }
  if(resultShow){
    currentProducts = resultShow.slice(indexOfFrirstProduct, indexOfLastProducts);
  }
  if(clickCheckBox){
    currentProducts = clickCheckBox.slice(indexOfFrirstProduct, indexOfLastProducts);
  }
  if(clickCheckBrand){
    currentProducts = clickCheckBrand.slice(indexOfFrirstProduct, indexOfLastProducts);
  }
  if(clickRating){
    currentProducts = clickRating.slice(indexOfFrirstProduct, indexOfLastProducts);
  }
  if(clickPrice){
    currentProducts = clickPrice.slice(indexOfFrirstProduct, indexOfLastProducts);
  }
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
        {currentProducts.map((items) => (
          <ProductItem
            key={items.id}
            products={items}
            showRating={showRating}
          />
        ))}
      </div>
      <Pagination
        productPerPage={productPerPage}
        totalProduct={products.length}
        paginate={paginate}
      />
    </div>
  );
}
