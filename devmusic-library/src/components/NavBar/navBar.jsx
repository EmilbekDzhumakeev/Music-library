import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './navBar.css'

function NavBar(props){
    return (  



<div className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">NavBar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Add New Song</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Update</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Delete</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
      <h2> Emilbek Dz </h2>
    </div>
  </div>
</div>

     
    

    );
} 

export default NavBar;