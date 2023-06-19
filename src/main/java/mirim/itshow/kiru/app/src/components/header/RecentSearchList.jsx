import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchList } from "../../svgfiles/search_list.svg";
import { ReactComponent as SearchX } from "../../svgfiles/search_x.svg";
import "./search_modal.css";

export default function RecentSearchList({ keyword, recentKeywords, setRecentKeywords }) {
  // console.log("검색어 기록", keyword);

  const navigate = useNavigate();
  function recentHandle() {
    navigate(`/result/${keyword}`);
  }

  function deleteHandle() {
    let keywordIndex = recentKeywords.indexOf(keyword); //인덱스로 지워야 함
    let filtered = recentKeywords.filter((element, index) => keywordIndex !== index);
    setRecentKeywords(filtered);
  }

  return (
    <li className="search_li">
      <SearchList className="search_icon"/>
      <span className="keyword" onClick={recentHandle.bind(this, keyword)}>{keyword}</span>
      <SearchX className="x_icon" onClick={deleteHandle.bind(this, keyword)}/>
    </li>
  );
}
