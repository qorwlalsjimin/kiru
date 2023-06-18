/* 커스텀한 select 박스의 header - size 선택시*/

import React, { useState } from "react";
import "../content.css";
import { ReactComponent as ArrowUp } from "../../../svgfiles/arrow_up.svg";
import { ReactComponent as ArrowDown } from "../../../svgfiles/arrow_down.svg";

export default function ContentSize({ headerTitle, listOpen }) {
  return (
    <>
      {/* {console.log(headerTitle)} */}
      <div className="dd-header-content">
        <div>
          <div className="dd-header-title">사이즈</div>
          <div className="dd-header-size">{headerTitle}</div>
        </div>
        <div className="dd-header-icon size">
          {listOpen ? <ArrowUp /> : <ArrowDown />}
        </div>
      </div>
    </>
  );
}
