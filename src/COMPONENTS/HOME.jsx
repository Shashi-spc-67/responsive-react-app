import React from "react";
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap"
import Carousel from "./Carousel";
import Cards from "./Cards";
import ABOUT from "./ABOUT";

function HOME() {
  return (
    <div>
      <Carousel/>
       <Cards/>
       <ABOUT/>
    </div>
  );
}

export default HOME;
