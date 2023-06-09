/* 커스텀한 select 박스의 header - 기본 */

import React from "react";
import "../content.css";
import { ReactComponent as ArrowUp } from "../../../svgfiles/arrow_up.svg";
import { ReactComponent as ArrowDown } from "../../../svgfiles/arrow_down.svg";

export default function Content({ listOpen, ddHeaderExOff }) {
  return (
    <>
      <div className="dd-header-content">
        <div className="dd-header-title">사이즈</div>
        <div className={`dd-header-ex ${ddHeaderExOff && "dd-header-ex-off"}`}>
          사이즈를 선택해주세요
        </div>
        <div className="dd-header-icon">
          {listOpen ? <ArrowUp /> : <ArrowDown />} {/* using svg */}
        </div>
      </div>
    </>
  );
}
