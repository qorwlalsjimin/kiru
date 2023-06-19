import React from 'react'
import "./review.css"
import Footer from "../footer/Footer"

const Review = () => {
  return (
    <>
      {/* 타이틀 */}
      <div className="reviewp">
        <h1>리뷰(0)</h1>
        <h1>전체 상품 리뷰 보기</h1>
      </div>

      {/* 박스 */}
      <div className="boxs">
        <div className='top'>

        </div>
        <div className="box">

          {/* 별점 아이콘 */}
          <div className="icon">
            <i className="ri-star-fill"></i> -
          </div>

          {/* 리뷰 */}
          <div className="re">
            <div className="rediv">
              <p>아주 좋아요</p> <div className="rebar"></div>0
            </div>
            <div className="rediv">
              <p>맘에 들어요</p><div className="rebar"></div>0
            </div>
            <div className="rediv">
              <p>보통이에요</p><div className="rebar"></div>0
            </div>
            <div className="rediv">
              <p>그냥 그래요</p><div className="rebar"></div>0
            </div>
            <div className="rediv">
              <p>별로예요</p><div className="rebar"></div>0
            </div>
          </div>
        </div>

        {/* 박스 밖 */}
        <div className="sort">
          <div className="sort_deep">

            <h1>별점순</h1>
            <h1>최신순</h1>
          </div>
        </div>

        <div className="box2">
          <select id="phone" className="" >
            {/* 한국 */}
            <option value="+82">별점</option>
            {/* 일본 */}
            <option value="+81">+81</option>
            {/* 미국 */}
            <option value="+01">+01</option>
          </select>
          <select id="phone" className="" >
            {/* 한국 */}
            <option value="+82">키</option>
            {/* 일본 */}
            <option value="+81">+81</option>
            {/* 미국 */}
            <option value="+01">+01</option>
          </select>
          <select id="phone" className="" >
            {/* 한국 */}
            <option value="+82">몸무게</option>
            {/* 일본 */}
            <option value="+81">+81</option>
            {/* 미국 */}
            <option value="+01">+01</option>
          </select>
        </div>
        <button className='r_w'>리뷰 쓰기</button>
      </div>

    </>
  )
}

export default Review
