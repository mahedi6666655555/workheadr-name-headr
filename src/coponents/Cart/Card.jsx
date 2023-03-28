import React from "react";
import "./Cart.css";
const Card = (props) => {
  let { img, price, name, ratings, seller } = props.Products;

  return (
    <div>
      <div className="w-[350px] mn h-[600px]  relative">
        <div>
          <img className="p-2" src={img} alt="" />
        </div>
        <div className="pl-5">
          <h6 className="text-2xl font-bold pb-2">{name}</h6>
          <p className="pb-11 font-bold">price: {price}</p>
          <p>Manufacturer :{seller}</p>
          <p>Rating :{ratings}</p>
        </div>
        <div>
          <button className="w-full bg-orange-600 mt-4 bottom-0 py-5 absolute hover:bg-red-400 border">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
