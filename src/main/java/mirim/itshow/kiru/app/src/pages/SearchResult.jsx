import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getCookie } from "../util/cookie";
import { Product } from "../components/products/Product";
import SearchResult from "../components/search_result_list/SearchResult";

export default function searchResult() {
  
    return (
      <>
        <SearchResult/>
        <Footer />
      </>
    );
}