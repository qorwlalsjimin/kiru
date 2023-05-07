import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/groups' exact={true} element={<GroupList/>}/>
        <Route path='/groups/:id' element={<GroupEdit/>}/>
      </Routes>
    </Router>
  )
}

export default App;