import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import products from "../Product.json";
const ListProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("https://dummyjson.com/products");

      setProducts(response.data.products);
    }
    getProducts();
  }, []);

  return (
    <div>
      <h1 className="text-xl">Featuered Products</h1>
      <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-3">
        {products.map((item) => (
          <div
            className="product border border-red-600 border-opacity-35 shadow-lg p-3 flex gap-3"
            key={item.id}
          >
            <div className="image">
              <img
                src={item.thumbnail}
                className="h-32 w-70 object-cover rounded-md"
              />
            </div>
            <div className="info w-3/4">
              <h2 className="text-xl">{item.title}</h2>
              <p className="text-sm opacity-65">{item.description}</p>
              <Link to={`/${item.id}`}>
                <button className="btn mt-5 px-4 py-2 bg-blue-400 text-white rounded-md">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
