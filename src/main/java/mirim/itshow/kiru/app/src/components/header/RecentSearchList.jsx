import { ReactComponent as SearchList } from "../../svgfiles/search_list.svg";
import { ReactComponent as SearchX } from "../../svgfiles/search_x.svg";
import "./search_modal.css";

export default function RecentSearchList({ keyword }) {
  // console.log("검색어 기록", keyword);
  return (
    <li className="search_li">
      <SearchList className="search_icon"/>
      {/* <img className="search_icon" src="images/list_icon.jpg" /> */}
      <span className="keyword">{keyword}</span>
      {/* <img className="x_icon" src="images/x_icon.png" /> */}
      <SearchX className="x_icon"/>
    </li>
  );
}
