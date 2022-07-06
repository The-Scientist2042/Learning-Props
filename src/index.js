import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import './index.css'
import Card from './components/Card';


function Index(){
    return(
      <div id="container">
        <Navbar/>
        <Card/>
      </div>
    )
}

ReactDOM.render(<Index/>,document.getElementById('root'))