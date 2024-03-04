import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Detailpage = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function getSingleProductDetail() {
      let response = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );

      // https://dummyjson.com/products/1
      // console.log(params.id);
      console.log(response);
      setSingleProduct(response.data);
    }
    getSingleProductDetail();
  }, [params.id]);

  console.log(params);
  return (
    <div>
      The product ID received from Product List is{" "}
      <span className="bg-red-300">{params.id}.</span>
      <span className="bg-red-300">
        The product name is {singleProduct.title}
      </span>
    </div>
  );
};

export default Detailpage;
