import React from 'react';
import "./App.css"
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Pages from './components/pages/Pages'
import Header from './components/common/header/Header'
// import Tradition from './components/goods_list/tradition/Tradition'
// import Improve from './components/goods_list/improve/Improve';
import Login_form from './components/member/Login_form'
import Join_form from './components/member/Join_form'
import Tradition from './components/item/tradition/Tradition';
import Item_list from './components/item/Item_list'


//import { formToJSON } from 'axios'
//import axios from 'axios'


function App()  {
  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path='/tradition' exact element = {<Tradition />} />
      {/* <Route path='/Improve' exact element = {<Improve />} /> */}
    
      <Route path='/Item_list' exact element = {<Item_list />} />
      <Route path='/Login_form' exact element = {<Login_form />} />
      <Route path='/Join_form' exact element = {<Join_form />} />

      </Routes>

      </Router>
    </>
  )
}

export default App
// const App = () => {
//   const [message, setMessage] = useState([]);

//   useEffect(()=>{
//     fetch("/pages")
//     .then((response =>{
//         return response.json();
//     })
//     .then(function (data){
//         setMessage(data);
//     }));
// },[]);



//   return (
//     <>
//       <Pages />

//     </>
//   )
// }


// function App() {
//   const [hello, setHello] = useState('')

//    useEffect(() => {
//        axios.get('/api/hello')
//        .then(response => setHello(response.data))
//        .catch(error => console.log(error))
//    }, []);

//    return (
//        <div>
//            백엔드에서 가져온 데이터입니다 : {hello}
//        </div>
//    );
// }

