import React from 'react';
import "./App.css"
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Pages from './components/pages/Pages'
import Header from './components/common/header/Header'
import Tradition from './components/goods_list/tradition/Tradition'
import Loginpage from './components/loginpage/Loginpage'
import Signup from './components/loginpage/Signup'

//import { formToJSON } from 'axios'
//import axios from 'axios'


function App()  {
  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path='/tradition' exact element = {<Tradition />} />
      <Route path='/loginpage' exact element = {<Loginpage />} />
      <Route path='/signup' exact element = {<Signup />} />

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

