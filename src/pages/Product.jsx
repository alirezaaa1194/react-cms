import React, { useEffect, useState } from "react";
import SalesPerformance from "../components/Products/SalesPerformance";
import ProductInfo from "../components/Products/ProductInfo";
import ProductNewInfo from "../components/Products/ProductNewInfo";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../utils";

export default function Product() {
  const [load, setLoad] = useState(false);
  const [product, setProduct] = useState({});

  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getProductById(params.productId).then((product) => {
      if (product) {
        setProduct(product);
        setLoad(true);
      } else {
        navigate("/products");
      }
    });
  }, []);

  

  return (
    <div>
      <h2 className="text-2xl font-bold">Product</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-6 lg:mx-6">
        <SalesPerformance load={load} />
        <ProductInfo load={load} product={product} />
        <ProductNewInfo load={load} product={product} />
      </div>
    </div>
  );
}
