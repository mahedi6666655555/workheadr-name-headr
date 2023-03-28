import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Card from "../Cart/Card";
import ".//shope.css";
const Shope = () => {
  let [product, setProdut] = useState([]);

  //   console.log(product);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProdut(data));
  }, []);
  return (
    <div className="container ">
      <div className="mt-5 ml-5 ">
        <div className="grid grid-cols-3 gap-5">
            
        {product.map((Products) => (
          <Card Products={Products} key={Products.id}></Card>
        ))}
        </div>
      </div>
      <div className="bg-green-400 h-20 sticky top-0 ">


      </div>
    </div>
  );
};

export default Shope;
