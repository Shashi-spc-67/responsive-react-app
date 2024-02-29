import React from 'react'
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./module.Header.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsSearchHeart } from "react-icons/bs";
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark ">
    <div class="container-fluid">
      <a class="navbar-brand">MYNTRA</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Products">Products</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/About" >About</Link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-danger" type="submit"><BsSearchHeart /></button>
        </form>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Header