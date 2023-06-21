import "./empty_notice.css";
import { ReactComponent as Danger } from "../../svgfiles/danger.svg";

export default function EmptyNotice() {
    return (
        <div className="empty_notice_container">
            <div className="empty_notice">
                <Danger/>
                <h2>장바구니에 담긴 상품이 없습니다.</h2>
                <p>원하는 상품을 장바구니에 담아보세요!</p>
            </div>
        </div>
    )
}