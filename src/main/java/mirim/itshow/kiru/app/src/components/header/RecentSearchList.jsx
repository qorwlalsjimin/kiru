import { Grid, Segment } from "semantic-ui-react";
import "./search_modal.css";

export default function RecentSearchList({ keyword }) {
  console.log("검색어 기록", keyword);
  return (
    <li className="search_li">
      <img className="search_icon" src="images/list_icon.jpg" />
      <span className="keyword">{keyword}</span>
      <img className="x_icon" src="images/x_icon.png" />
    </li>
  );
}
