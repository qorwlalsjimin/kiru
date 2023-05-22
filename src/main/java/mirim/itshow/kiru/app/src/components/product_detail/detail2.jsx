import React from 'react'
// import { getProducts } from "../../service/fetcher";
import "./detail.css"
import { Link } from 'react-router-dom';
import Review from './Review'
import Inquiry from './Inquiry';
import Guidance from "./Guidance"

const Detail2 = () => {

  return (
    <>

    <div className="content">

        <div className="btn">
      <button><h1>후기</h1></button>
      <button><h1>상품 문의</h1></button>
      <button><h1>안내사항</h1></button>
      </div>

    <Review />

{/* <Inquiry/> */}
    {/* <Guidance /> */}
            {/* <img src={product.image} alt="" srcset="" /> */}
            </div>
    </>
  )
}

export default Detail2
