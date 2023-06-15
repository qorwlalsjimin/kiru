import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";

export default function SearchResult() {
    console.log("뭐시여...");
    let keyword = useParams();
    console.log("없나요",keyword);
    return (
        <>
            <Header />
            
            <Footer/>
        </>
    )
}