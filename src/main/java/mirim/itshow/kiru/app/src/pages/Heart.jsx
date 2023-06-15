import React, { useEffect, useState } from "react";
import axios from 'axios';
import { getCookie } from "../util/cookie";
import setToken from "../util/setToken";
import { useNavigate } from "react-router-dom";

export default function Heart() {

    // 상품 목록 조회
    let [country, setCountry] = useState('hanbok');
    let fetchUrl = `/api/heart/all/${country}`;

    // 상품 데이터
    let [products, setProducts] = useState({});

    // 카테고리 목록
    let [categorys, setCategorys] = useState({});

    // redirect
    let navigate = useNavigate();

    // 상품 데이터 가져오기
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
            } catch (error) {
                if (error.status = 401) {
                    alert('로그인 후 이용해주세요.');
                    navigate('/Login_form');
                }
            }
        };

        fetchData(fetchUrl);
    }, [country]);


    function countryHandler(param) {
        console.log("백: ", param);
        setCountry(param); //hanbok, kimono로 바꿈
        categoryDatas(); //카테고리 목록 가져오기
    }

    // 나라별 카테고리 목록 가져오기
    async function categoryDatas() {
        try {
            const response = await axios.get(`/api/heart/all/${country}`, {
                headers: {
                    'Authorization': `Bearer ${getCookie("accessToken")}`
                }
            });
            console.log(response);
            setCategorys(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div className='Banner'>
                <h2>즐겨찾기</h2>

                {/* 한복 기모노 정렬 */}
                <div className="selection">
                    <div className="cloum c1" onClick={countryHandler.bind(this, 'hanbok')}>
                        <i className="ri-checkbox-blank-circle-fill"></i>
                        한복
                    </div>
                    <div className="cloum c2" onClick={countryHandler.bind(this, 'kimono')}>
                        <i className="ri-checkbox-blank-circle-fill"></i>
                        기모노
                    </div>
                </div>
            </div>


            {/* 카테고리 목록 */}
            {/* <nav className="brand_nav">
                {Object.values(categorys).map((category) => {
                    return (
                        <span key={category.categoryId} onClick={brandHandler.bind(this, brand.categoryId)} style={{ marginRight: "10px" }}>{brand.title}</span>
                    );
                })}
            </nav> */}
        </>
    )
}