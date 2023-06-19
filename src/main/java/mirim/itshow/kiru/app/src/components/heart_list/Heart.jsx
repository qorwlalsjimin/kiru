import styles from "../product_list/product_list.module.css";
import "./heart.css";
import { ReactComponent as Danger } from "../../svgfiles/danger.svg";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../util/cookie";
import { Product } from "../products/product";

export default function Heart() {

    // 상품 목록 조회
    let [country, setCountry] = useState('hanbok');

    // nav 클릭했는지
    let [isHanbokActive, setIsHanbokActive] = useState(true);
    let [isKimonoActive, setIsKimonoActive] = useState(false);

    // 상품 데이터
    let [products, setProducts] = useState({});

    // 상품 데이터 있는지 없는지
    let [makeHidden, setMakeHidden] = useState(true); //원래 보여주기

    // 카테고리 목록
    let [categorys, setCategorys] = useState({});

    let [cname, setCname] = useState();

    // redirect
    let navigate = useNavigate();

    // 상품 데이터 가져오기
    let fetchUrl = `/api/heart/all/${country}`;
    useEffect(() => {
        const fetchData = async (url) => {
            // setToken();
            try {
                const response = await axios.get(url, {
                    headers: {
                        'Authorization': `Bearer ${getCookie("accessToken")}`
                    }
                });
                setProducts(response.data);

                // console.log("여기", response.data)

                if ((response.data.length || 0) > 0) {
                    setMakeHidden(true);
                    // console.log("true 됏자나", response.data.length || 0); //안 보임
                }
                else if ((response.data.length || 0) < 1) {
                    setMakeHidden(false);
                    // console.log("false 됏자나", response.data.length || 0); //글 보임
                }
            } catch (error) {
                if (error.status = 401) {
                    alert('로그인 후 이용해주세요.');
                    navigate('/Login_form');
                }
            }
        };

        fetchData(fetchUrl);
    }, [country]);


    // 나라별 카테고리 목록 가져오기
    async function categoryDatas() {
        try {
            const response = await axios.get(`/api/heart/all/${country}`, {
                headers: {
                    'Authorization': `Bearer ${getCookie("accessToken")}`
                }
            });
            // console.log(response);
            setCategorys(response.data);
            // console.log("카테고리", categorys);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    // 한복 or 기모노
    function countryHandler(param) {
        setCountry(param); //hanbok, kimono로 바꿈
        categoryDatas(); //카테고리 목록 가져오기


        //TODO 코드 줄이기
        switch (param) {
            case "hanbok":
                setIsHanbokActive(true);
                setIsKimonoActive(false);
                break;
            case "kimono":
                setIsHanbokActive(false);
                setIsKimonoActive(true);
                break;
            default:
                break;
        }
    }


    // 카테고리 목록 클릭
    function brandHandler(brandId) {
        setCname(`brand/${brandId}`);
    }

    // 즐겨찾기 아이콘 클릭
    function btnDeleteHandler() {
        const response = axios.delete(`/api/heart/delete/all`,
            {
                headers: {
                    'Authorization': `Bearer ${getCookie("accessToken")}`
                }
            }
        );
        // console.log(response.data);
        setProducts([]);
        window.location.reload();
    }


    return (
        <>
            {/* NAV바 */}
            <div className='Banner'>
                <h2>즐겨찾기</h2>

                {/* 한복 기모노 정렬 */}
                <div className="selection">
                    <div className={`cloum c1 ${isHanbokActive && "active_sort"}`} onClick={countryHandler.bind(this, 'hanbok')}>
                        <i className="ri-checkbox-blank-circle-fill"></i><br />
                        한복
                    </div>
                    <div className={`cloum c2 ${isKimonoActive && "active_sort"}`} onClick={countryHandler.bind(this, 'kimono')}>
                        <i className="ri-checkbox-blank-circle-fill"></i><br />
                        기모노
                    </div>
                </div>
            </div>

            {/* 카테고리 목록 */}
            <nav className={`brand_nav ${makeHidden && "is_brand"}`}>
                {Object.values(categorys).map((brand) => {
                    return (
                        <span key={brand.categoryId} onClick={brandHandler.bind(this, brand.categoryId)} style={{ marginRight: "10px" }}>{brand.title}</span>
                    );
                })}
            </nav>

            {/* 상품 목록 */}
            <ul>
                <main className={styles.flex_wrap}>
                    {Object.values(products).map((product) => {
                        // {console.log(product.item)}
                        return (
                            <Product
                                key={`key-${product.heartItemId}`}
                                product={product.item} //여기서 에러남
                            />
                        );
                    })}
                </main>
            </ul>

            <div className={`btn_wrapper ${makeHidden ? "" : "notice_hidden"}`}>
                {/* 전 상품 삭제 버튼 */}
                <button className="btn_delete_all" onClick={btnDeleteHandler}>전 상품 삭제</button>
            </div>
            
            {/* 즐겨찾기 없을때 */}
            {/* TODO CSS가 안 먹힘 */}
            <div className={`notice ${makeHidden ? "notice_hidden" : ""}`}>
                <Danger/>
                <h2>즐겨찾기를 추가해주세요.</h2>
            </div>
        </>
    )
}