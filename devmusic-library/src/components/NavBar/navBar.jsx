import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function NavBar(props){
    return (  
        <nav className="navbar navbar-dark bg-dark">   
<nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">NavBar</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
    </nav>

     
    

    );
} 

export default NavBar;