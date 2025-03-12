import React from 'react'
import MyHeader from "./MyHeader/MyHeader";
import MyFooter from "./MyFooter/MyFooter";
import MyBody2 from './MyBody/MyBody2';
const Chefify2 = () => {
  return (
    <div className="max-w-4/5 m-auto border-2 border-gray-400/50 shadow-2xs my-3">
    <MyHeader />
    <MyBody2 />
    <MyFooter />
  </div>
  )
}

export default Chefify2