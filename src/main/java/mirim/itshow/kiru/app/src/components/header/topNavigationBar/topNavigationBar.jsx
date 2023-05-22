// import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";
import {nav} from "../../../data/Data"
import "./header.css"
import "./script"


// export const TopNavigationBar = ({ cart }) => {
//   return (
//     <header className={styles.header}>
//       <div className={styles.inner}>
//         <Link to="/">
//           <h1 className={styles.logo}>
//             <img src="/images/logo.png" alt="logo" />
//           </h1>
//         </Link>
//         <div className={styles.input_wrap}>
//           <input type="text" placeholder="상품을 검색해보세요!" />
//           <img src="/images/icon-search.svg" alt="search" />
//         </div>
//       </div>

//       <div className={styles.menu}>
//         <Link to="/cart">
//           <div className={styles.shopping_cart}>
//             <img src="/images/icon-shopping-cart.svg" alt="cart" />
//             <span>장바구니</span>
//             {cart.length >= 1 ? (
//               <div className={styles.new_shopping_cart}>
//                 <p>{cart.length}</p>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         </Link>
//         <Link to="">
//           <div className={styles.mypage}>
//             <img src="/images/icon-user.svg" alt="user" />
//             <span>로그인</span>
//           </div>
//         </Link>
//       </div>
//     </header>
//   );
// };


const Header = () => {
  return (
    <>
      <header>

        <div className="container">

          <div className='global'>
            <i className="ri-global-line"></i> 한국어
          </div>

          <div className="logo">
            <img src="/images/logo.png" alt="" />
          </div>

          <div className="toggle">

            <i className="ri-search-line"></i>
            <i className="ri-star-line"></i>
            <i className="ri-shopping-cart-2-line"></i>
            {/* <div className="icon-container"> */}
              <Link to="/login_form"> <i className="ri-user-line"></i></Link>
              {/* <p className="icon-text">로그인·회원가입</p> */}
            {/* </div> */}
          </div>
        </div>
        <div className="nav">
          <ul className="flex">
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>




    </>
  )
}

export default Header


