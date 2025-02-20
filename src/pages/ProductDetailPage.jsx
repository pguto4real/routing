import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <div>ProductDetailPage</div>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetailPage;
