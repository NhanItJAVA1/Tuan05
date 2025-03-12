import React from "react";
import MyHeader from "./MyHeader/MyHeader";
import MyBody from "./MyBody/MyBody";
import MyFooter from "./MyFooter/MyFooter";

const Chefify = () => {
  return (
    <div className="max-w-3/5 m-auto border-2 border-gray-400/50 shadow-2xs my-3">
      <MyHeader />
      <MyBody />
      <MyFooter />
    </div>
  );
};

export default Chefify;
