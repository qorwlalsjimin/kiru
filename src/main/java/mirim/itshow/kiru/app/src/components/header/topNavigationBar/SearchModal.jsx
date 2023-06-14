import React from "react";

export default function SearchModal() {
    return (
        <div className="search_modal">
                <div className="modla-desk">
                  <div className="search_area">
                    <form>
                      <input></input>
                      <button type="submit">🔍</button>
                    </form>
                  </div>
                  {/* --search_area */}
                  <div className="result_area">
                    <ul>
                      <li>
                        <span>🔍</span>
                        <span>검색어</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;X</span>
                      </li>
                      <li>
                        <span>🔍</span>
                        <span>검색어</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;X</span>
                      </li>
                      <li>
                        <span>🔍</span>
                        <span>검색어</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;X</span>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* --result_area */}
                </div>
              </div>
    )
}